import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

type Props = {
  onChangeScore: (value: number) => void;
  score: number;
};

const Starcount: React.FC<Props> = ({ onChangeScore, score }: Props) => {
  const stars = [1, 2, 3, 4, 5].map((starCount) => {
    return (
      <Touch
        onPress={() => onChangeScore(starCount)}
        key={starCount.toString()}
      >
        <FontAwesome
          name={score >= starCount ? "star" : "star-o"}
          size={30}
          color="black"
        />
      </Touch>
    );
  });
  return <View>{stars}</View>;
};

const Touch = styled.TouchableOpacity`
  margin: 5px;
`;

export default Starcount;
