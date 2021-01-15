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

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Detail">;
  route: RouteProp<RootStackParamList, "Detail">;
};

const DetailScreen: React.FC<Props> = ({ navigation, route }: Props) => {
  const { item } = route.params;

  return (
    <View>
      <Image source={{ uri: item.image }} style={{ width: 400, height: 300 }} />
      <Text>{item.name}</Text>
      <Text>{item.message}</Text>
      <Text>{item.score}</Text>
      <View>
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
      </View>
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

export default DetailScreen;
