import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { giveName } from "../lib/firebase";
// context
import { UserContext } from "../contexts/UserContext";

const AccountScreen: React.FC = () => {
  const { user, setUser } = useContext(UserContext);
  const [givenName, setGivenName] = useState<String>();

  const onPress = async () => {
    const userInfo = await giveName(givenName);
    setGivenName(userInfo?.name);
    // マージする
    setUser({ ...user, name: userInfo?.name, id: userInfo?.id });
    alert("登録完了");
  };

  return (
    <SafeAreaView>
      <Text>あなたのなめは{givenName}</Text>
      <TextInput
        returnKeyType="done"
        placeholder={user?.name}
        style={{ borderWidth: 10 }}
        onChangeText={(value) => setGivenName(value)}
      />
      <TouchableWithoutFeedback
        style={{ borderWidth: 2 }}
        onPress={() => onPress()}
      >
        <Text>登録する</Text>
      </TouchableWithoutFeedback>
    </SafeAreaView>
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

export default AccountScreen;
