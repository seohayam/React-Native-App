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
import { max, Value } from "react-native-reanimated";
import Starcount from "../component/Starcount";
import { TextInput } from "react-native-gesture-handler";
import styled from "styled-components/native";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Detail">;
  route: RouteProp<RootStackParamList, "Detail">;
};

const SearchScreen: React.FC<Props> = ({ navigation, route }: Props) => {
  const [keyword, setKeyWord] = useState<string>("");

  return (
    <>
      <Poster source={require("../image/search.png")}>
        <View style={{ marginTop: 50 }}>
          <Input
            returnKeyType="done"
            onChangeText={(value) => setKeyWord(value)}
            value={keyword}
            placeholder="キーワードを入れてね！"
          />
          <Text style={{ textAlign: "center", margin: 20, fontSize: 17 }}>
            {!!keyword ? "現在使用出来ない状況です。" : ""}
          </Text>
        </View>
      </Poster>
    </>
  );
};

const Input = styled.TextInput`
  color: #59595e;
  font-size: 15px;
  padding: 20px;
  width: 90%;
  border: solid 1px black;
  border-radius: 10px;
  box-shadow: 5px 5px 5px black;
  margin: 20px auto;
`;

const Poster = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export default SearchScreen;
