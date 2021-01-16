import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useContext } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";
import styled from "styled-components/native";
// firebase
import { signIn } from "../lib/firebase";
// Context
import { UserContext } from "../contexts/UserContext";
import { LinearGradient } from "expo-linear-gradient";
import { Dimensions } from "react-native";

// ===style===
// const Continer = styled.View``;
// const TextLg = styled.Text``;
// const Textmd = styled.Text``;
// const TextSm = styled.Text``;

const Continer = styled.View`
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextLg = styled.Text`
  color: #59595e;
  font-size: 10px;
  margin: 20px;
  position: absolute;
  bottom: 50px;
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
// ====本文====

const AuthScreen: React.FC = () => {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await signIn();
      setUser(user);
    };
    fetchUser();
  }, []);

  return (
    <>
      <Poster source={require("../image/top.png")}>
        <Continer>
          {/* <Gradient locations={[0, 0.2, 0.6, 0.9]} colors={["#000000"]}> */}
          <StatusBar translucent backgroundColor="transparent" />
          <ActivityIndicator
            style={{ position: "absolute", bottom: 100 }}
            size="large"
          />
          <TextLg>ただいまログイン中...</TextLg>
          {/* </Gradient> */}
        </Continer>
      </Poster>
    </>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

export default AuthScreen;
