import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
  onChangeScore: (value: number) => void;
  score: number;
};

const Starcount: React.FC<Props> = ({ onChangeScore, score }: Props) => {
  const stars = [1, 2, 3, 4, 5].map((starCount) => {
    return (
      <TouchableOpacity
        onPress={() => onChangeScore(starCount)}
        key={starCount.toString()}
      >
        <FontAwesome
          name={score >= starCount ? "star" : "star-o"}
          size={24}
          color="black"
        />
      </TouchableOpacity>
    );
  });
  return <View>{stars}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Starcount;
