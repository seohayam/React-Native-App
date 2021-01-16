import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-vector-icons/Icon";
// componet
import Starcount from "../component/Starcount";
// firebase
import { addItem, imageTreat } from "../lib/firebase";
// type
import Nation from "../types/nation";
// idcon
import { FontAwesome } from "@expo/vector-icons";
import { imagePicker } from "../lib/ImagePicker";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import { RouteProp } from "@react-navigation/native";
import { KeyboardAvoidingView } from "react-native";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Create">;
  route: RouteProp<RootStackParamList, "Create">;
};

const CreateScreen: React.FC<Props> = ({ navigation, route }: Props) => {
  const [score, setScore] = useState<number>(3);
  const [message, setMessage] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [boolean, setBoolean] = useState<boolean>(false);

  const pickImage = async () => {
    const uri = await imagePicker();
    setImage(uri);
    // console.log(uri);
  };

  const onSubmit = async () => {
    setBoolean(true);
    const downloadUrl = await imageTreat(image);
    console.log(downloadUrl);

    const nation = {
      score: score,
      message: message,
      image: downloadUrl,
      name: name,
    } as Nation;
    await addItem(nation);
    setBoolean(false);
    setName("");
    setImage("");
    setMessage("");
    setScore(5);
    alert("追加されました");
    navigation.navigate("Main");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="position"
      contentContainerStyle={{ flex: 1 }}
    >
      <Continer>
        <ActivityIndicator size={70} animating={boolean} />
        <Cotent>
          <TouchableOpacity onPress={pickImage}>
            <Poster source={require("../image/camera.png")}>
              {!!image && <ImageOnly source={{ uri: image }} />}
            </Poster>
          </TouchableOpacity>
        </Cotent>

        <Input
          returnKeyType="done"
          style={{ borderWidth: 2 }}
          // multiline={true}
          value={message}
          onChangeText={(value) => setMessage(value)}
          placeholder="コメントをお書きください"
        />
        <InputName
          returnKeyType="done"
          style={{ borderWidth: 2 }}
          // multiline={true}
          value={name}
          onChangeText={(value) => setName(value)}
          placeholder="場所"
        />
        <StarCotent>
          <Starcount score={score} onChangeScore={(value) => setScore(value)} />
        </StarCotent>
        <Touch onPress={onSubmit}>
          <Text>追加する</Text>
        </Touch>
      </Continer>
    </KeyboardAvoidingView>
  );
};

// ===style===
const Continer = styled.SafeAreaView`
  background-color: white;
  width: 100%;
  height: 100%;
  position: relative;
`;

const Input = styled.TextInput`
  color: #59595e;
  font-size: 15px;
  padding: 20px;
  width: 90%;
  border-radius: 10px;
  box-shadow: 5px 5px 5px black;
  margin: 20px auto;
`;
const InputName = styled.TextInput`
  color: #59595e;
  font-size: 15px;
  padding: 20px;
  width: 200px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px black;
  position: absolute;
  bottom: 150px;
  right: 70px;
`;
const Touch = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 50px;
  right: 70px;
  width: 200px;
  padding: 20px;
  border: solid 1px black;
  border-radius: 10px;
  border-radius: 10px;
  box-shadow: 5px 5px 5px black;
`;
const TextLg = styled.Text`
  color: #59595e;
  font-size: 30px;
  margin: 5px;
  border: solid 1px black;
  border-radius: 10px;
  padding: 10px;
  width: 90%;
  box-shadow: 10px 10px 10px black;
`;
const Gradient = styled(LinearGradient)`
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Cotent = styled.View`
  width: 100%;
  height: 200px;
  background-color: #008000;
  box-shadow: 0px 2px 1px black;
  margin: 0 0 10px 0;
`;

const StarCotent = styled.View`
  margin-left: 30px;
  width: 50px;
`;

const Poster = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

const ImageOnly = styled.Image`
  width: 100%;
  height: 100%;
`;

export default CreateScreen;
