import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screen
import MainScreen from "../Screens/MainScreen";
import DetailScreen from "../Screens/DetailScreen";
import { RootStackParamList } from "../types/navigation";
import CreateScreen from "../Screens/CreateScreen";

const Stack = createStackNavigator<RootStackParamList>();
const RootStack = createStackNavigator<RootStackParamList>();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};
