import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";

// ナビゲーション
import { NavigationContainer } from "@react-navigation/native";
// ナビゲーター
import { BottomTabNavigator } from "../Navigations/BottomTabNavigator";
// SCREAN
import AuthScreen from "../Screens/AuthScreen";
// コンテキスト
import { UserContext } from "../contexts/UserContext";

export const TopNavigator = () => {
  const { user } = useContext(UserContext);
  // console.log(user);
  // const user = null;

  return (
    <NavigationContainer>
      {!user ? <AuthScreen /> : <BottomTabNavigator />}
    </NavigationContainer>
  );
};
