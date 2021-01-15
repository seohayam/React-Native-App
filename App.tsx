import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

// ========firebase=====
import { getFirebaseItems } from "./src/lib/firebase";
// ========type=========
import Shop from "./src/types/nation";
// ========Navigations==
import { TopNavigator } from "./src/Navigations/TopNavigator";
// =======Context=======
import { UserContext } from "./src/contexts/UserContext";
import { User } from "./src/types/user";

// ====本文＝＝＝
export default function App() {
  const [user, setUser] = useState<User>();

  return (
    // value = グローバルで使える為の物
    <UserContext.Provider value={{ user, setUser }}>
      <TopNavigator />
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
