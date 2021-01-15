import React, { useState, useEffect } from "react";
import { Button, Image, View, Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";

const getPermission = async () => {
  if (Constants.platform?.ios) {
    const { status } = await ImagePicker.getCameraPermissionsAsync();

    if (status !== "granted") {
      alert("許可がいつようです！");
    }
  }
};

export const imagePicker = async () => {
  await getPermission();
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: false,
  });

  if (!result.cancelled) {
    return result.uri;
  }
};
