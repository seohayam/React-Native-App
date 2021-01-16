import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
// Screen
import DetailScreen from "./DetailScreen";
// navigation
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
// firebase
import { getFirebaseItems } from "../lib/firebase";
// type
import Nation from "../types/nation";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};

const MainScreen: React.FC<Props> = ({ navigation }: Props) => {
  const [items, setItems] = useState<Nation[]>([]);

  useEffect(() => {
    const getItems = async () => {
      const items = await getFirebaseItems();
      setItems(items);
    };
    getItems();
  }, []);

  // 移動
  const onPress = (item: Nation) => {
    navigation.navigate("Detail", { item });
  };

  return (
    <Continer>
      <Map
        data={items}
        renderItem={({ item }) => (
          <Touch style={{ margin: 10 }} onPress={() => onPress(item)}>
            <Poster source={{ uri: item.image }} />
            {/* <Text>{item.image}</Text> */}
            {/* <Text>{item.name}</Text>
            <Text>{item.message}</Text> */}
          </Touch>
        )}
      />
    </Continer>
  );
};

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
  top: 50px;
`;
const Gradient = styled(LinearGradient)`
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Poster = styled.Image`
  width: 90%;
  height: 300px;
  border-radius: 30px;
  margin: 10px auto;
`;
const Map = styled.FlatList`
  width: 100%;
`;

const Touch = styled.TouchableOpacity`
  width: 100%;
  margin: 0;
  padding: 0;
`;

// height: 100%;
export default MainScreen;
