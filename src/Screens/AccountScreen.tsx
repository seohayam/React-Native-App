import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { giveName } from "../lib/firebase";
// context
import { UserContext } from "../contexts/UserContext";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

const AccountScreen: React.FC = () => {
  const { user, setUser } = useContext(UserContext);
  const [givenName, setGivenName] = useState<String>();

  const onPress = async () => {
    const userInfo = await giveName(givenName);
    setGivenName(userInfo?.name);
    // マージする
    setUser({ ...user, name: userInfo?.name, id: userInfo?.id });
    alert("登録完了");
  };

  return (
    <Continer>
      <Poster source={require("../image/account.png")}>
        {/* <Text>あなたのなめは{givenName}</Text> */}
        <Input
          returnKeyType="done"
          placeholder={"ニックネーム"}
          onChangeText={(value) => setGivenName(value)}
        />
        <Touch style={{ borderWidth: 2 }} onPress={() => onPress()}>
          <TextLg>登録する</TextLg>
        </Touch>
      </Poster>
    </Continer>
  );
};

// ===style===

const Continer = styled.SafeAreaView`
  height: 100%;
  position: relative;
`;

const Touch = styled.TouchableWithoutFeedback``;

const Input = styled.TextInput`
  border: solid 1px black;
  border-radius: 10px;
  padding: 10px;
  width: 80%;
  margin: 100px auto;
  box-shadow: 10px 20px 5px black;
`;

const TextLg = styled.Text`
  position: absolute;
  bottom: 200px;
  left: 50px;
  border: solid 1px black;
  border-radius: 10px;
  padding: 10px;
  width: 30%;
  text-align: center;
  margin: 100px auto;
  box-shadow: 10px 10px 5px black;
`;
const Gradient = styled(LinearGradient)`
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Poster = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export default AccountScreen;
