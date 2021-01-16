import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Button, FlatList, StyleSheet, Text, View, Image } from "react-native";
// navigation
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import { RouteProp } from "@react-navigation/native";
import Nation from "../types/nation";
// ICON
import { FontAwesome } from "@expo/vector-icons";
import { max } from "react-native-reanimated";
import Starcount from "../component/Starcount";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Detail">;
  route: RouteProp<RootStackParamList, "Detail">;
};

const DetailScreen: React.FC<Props> = ({ navigation, route }: Props) => {
  const { item } = route.params;

  return (
    <View>
      <Image source={{ uri: item.image }} style={{ width: 400, height: 300 }} />
      <View style={{ marginTop: 50, marginLeft: 20 }}>
        <TextLg>場所：{item.name}</TextLg>
        <Continer>
          <Text style={{ fontSize: 30 }}>おすすめ度：</Text>
          <FontAwesome
            name={item.score >= 1 ? "star" : "star-o"}
            size={24}
            color="black"
          />
          <FontAwesome
            name={item.score >= 2 ? "star" : "star-o"}
            size={24}
            color="black"
          />
          <FontAwesome
            name={item.score >= 3 ? "star" : "star-o"}
            size={24}
            color="black"
          />
          <FontAwesome
            name={item.score >= 4 ? "star" : "star-o"}
            size={24}
            color="black"
          />
          <FontAwesome
            name={item.score >= 5 ? "star" : "star-o"}
            size={24}
            color="black"
          />
        </Continer>
        <TextOnly>コメント：{item.message}</TextOnly>
      </View>
    </View>
  );
};

// ===style===
const Continer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px;
  color: #59595e;
  font-size: 30px;
  border: solid 1px black;
  border-radius: 10px;
  padding: 10px;
  width: 90%;
  box-shadow: 5px 5px 5px black;
`;

const TextOnly = styled.Text`
  color: #59595e;
  font-size: 30px;
  margin: 5px;
  padding: 10px;
  width: 90%;
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
const Poster = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export default DetailScreen;
