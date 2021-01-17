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
import { max, onChange, Value } from "react-native-reanimated";
import Starcount from "../component/Starcount";
import { TextInput } from "react-native-gesture-handler";
import styled from "styled-components/native";
// algolia
import { seachAlgoila } from "../lib/algolia";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Detail">;
  route: RouteProp<RootStackParamList, "Detail">;
};

const SearchScreen: React.FC<Props> = ({ navigation, route }: Props) => {
  const [keyword, setKeyWord] = useState<string>("");
  const [items, setItems] = useState<Nation[]>([]);

  // 検索されたら
  const onChangeSearch = async (text: string) => {
    if (!text) {
      return;
    } else {
      // 結果によって表示を変える
      const results = await seachAlgoila(text);

      if (results.hits.length > 0) {
        // hitsの中に値が入っている（返した時も配列になっている）
        const Items = results.hits.map((hit) => {
          return (hit as unknown) as Nation;
        });

        setItems(Items);
      } else {
        setItems([]);
      }
    }
  };

  // 詳細画面へ
  const goDetail = (item: Nation) => {
    navigation.navigate("Detail", { item });
  };

  return (
    <>
      <Poster source={require("../image/search.png")}>
        <View style={{ marginTop: 50 }}>
          <Input
            returnKeyType="done"
            onChangeText={(text) => onChangeSearch(text)}
            // value={keyword}
            placeholder="キーワードを入れてね！"
          />

          <FlatList
            data={items}
            renderItem={({ item }) => (
              // itemを引数として渡すときは関数内のみで良い
              <TouchableOpacity
                style={{
                  flex: 1,
                  alignItems: "center",
                  width: 150,
                  height: 120,
                }}
                onPress={() => goDetail(item)}
              >
                <Img
                  source={{ uri: item.image }}
                  style={{ width: 100, height: 100 }}
                />
                <Text style={{ margin: 5 }}>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.name}
          />
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

const Img = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

const Poster = styled.ImageBackground`
  width: 100%;
  height: 100%;
`;

export default SearchScreen;
