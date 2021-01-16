import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screen
import MainScreen from "../Screens/MainScreen";
import DetailScreen from "../Screens/DetailScreen";
import { RootStackParamList } from "../types/navigation";
import CreateScreen from "../Screens/CreateScreen";
import { color } from "react-native-reanimated";
import { View } from "react-native";

const Stack = createStackNavigator<RootStackParamList>();
const RootStack = createStackNavigator<RootStackParamList>();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerTitle: "Where are you going ?",

          headerBackground: () => (
            <View style={{ backgroundColor: "#80D0C7", height: 64 }}></View>
          ),
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerTitle: "詳細",

          headerBackground: () => (
            <View style={{ backgroundColor: "#80D0C7", height: 64 }}></View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
