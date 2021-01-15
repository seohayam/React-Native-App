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
    <View>
      <Text>GOTODETIl</Text>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ margin: 10 }}
            onPress={() => onPress(item)}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: 100, height: 100 }}
            />
            {/* <Text>{item.image}</Text> */}
            <Text>{item.name}</Text>
            <Text>{item.message}</Text>
          </TouchableOpacity>
        )}
      />
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

export default MainScreen;
