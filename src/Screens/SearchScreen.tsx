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

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Detail">;
  route: RouteProp<RootStackParamList, "Detail">;
};

const SearchScreen: React.FC<Props> = ({ navigation, route }: Props) => {
  const [keyword, setKeyWord] = useState<string>("");

  return (
    <View>
      <Text>SearchScreen</Text>
      <TextInput
        style={{ borderWidth: 2 }}
        onChangeText={(value) => setKeyWord(value)}
        value={keyword}
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

export default SearchScreen;
