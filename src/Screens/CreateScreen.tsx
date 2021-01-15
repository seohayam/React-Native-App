import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, View, Image } from "react-native";
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

const CreateScreen: React.FC = () => {
  const [score, setScore] = useState<number>(3);
  const [message, setMessage] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [name, setName] = useState<string>("");

  const pickImage = async () => {
    const uri = await imagePicker();
    setImage(uri);
    // console.log(uri);
  };

  const onSubmit = async () => {
    const downloadUrl = await imageTreat(image);
    console.log(downloadUrl);

    const nation = {
      score: score,
      message: message,
      image: downloadUrl,
      name: name,
    } as Nation;
    await addItem(nation);
    alert("追加されました");
  };

  return (
    <View>
      <Starcount score={score} onChangeScore={(value) => setScore(value)} />
      <TextInput
        returnKeyType="done"
        style={{ borderWidth: 2 }}
        // multiline={true}
        onChangeText={(value) => setMessage(value)}
      />
      <TouchableOpacity onPress={pickImage}>
        <FontAwesome name="camera" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onSubmit}>
        <Text>追加する</Text>
      </TouchableOpacity>
      {!!image && (
        <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CreateScreen;
