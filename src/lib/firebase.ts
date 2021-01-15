// types
import Shop from "../types/nation";
import { initialUser, User } from "../types/user";
// Constants（今は使用していない）
// import Constants from "expo-constants";

// firebase
import * as firebase from "firebase";

// Optionally import the services that you want to use
import "firebase/auth";
//import "firebase/database";
import "firebase/firestore";
import Nation from "../types/nation";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
if (!firebase.apps.length) {
  const firebaseConfig = {};

  // 初期化
  firebase.initializeApp(firebaseConfig);
  //   firebase.initializeApp(Constants.manifest.extra.firebase);
}

// データ取得
export const getFirebaseItems = async () => {
  const snapShot = await firebase.firestore().collection("nations").get();
  // GETの時に使う
  const itemsShop = snapShot.docs.map((doc) => doc.data() as Nation);
  //   console.log(itemsShop);
  return itemsShop;
};
// 新規データ追加
export const addItem = (nation: Nation) => {
  const reference = firebase.firestore().collection("nations").add(nation);
};

// 画像処理
export const imageTreat = async (imageUrl: string) => {
  const path = imageUrl;
  const fetchUri = await fetch(path);
  const blobUri = await fetchUri.blob();
  const ref = firebase.storage().ref().child(path);

  let downLoadUrl = "";
  try {
    await ref.put(blobUri);
    downLoadUrl = await ref.getDownloadURL();
  } catch (error) {
    console.log(error);
  }
  return downLoadUrl;
};

// ユーザー情報
export const signIn = async () => {
  const userInfo = await firebase.auth().signInAnonymously();
  //   ユーザーIDを確認
  const { uid } = userInfo.user;
  //   そのIDのuser Colection に以下を格納　➀　or ➁　を格納
  const userDoc = await firebase.firestore().collection("users").doc(uid).get();

  if (!userDoc.exists) {
    //   ➀初ログインの場合　＝　initialUser を firebase にセットする　→　その情報を返す
    await firebase.firestore().collection("users").doc(uid).set(initialUser);
    //   .set("初ログイン初期値");
    return {
      ...initialUser,
      id: uid,
      //   ...初ログイン初期値,id:uid
    } as User;
  } else {
    // ➁既にログインした事がある場合　＝　user 情報を返す
    return {
      id: uid,
      ...userDoc.data(),
    } as User;
  }
};
// ユーザーの名前登録
export const giveName = async (givenName: string) => {
  const userInfo = await firebase.auth().signInAnonymously();
  //   ユーザーIDを確認
  const { uid } = userInfo.user;
  //   そのIDのuser Colection に以下を格納　➀　or ➁　を格納
  const userDoc = await firebase.firestore().collection("users").doc(uid).get();

  if (userDoc.exists) {
    await firebase
      .firestore()
      .collection("users")
      .doc(uid)
      .set({ name: givenName });
    return { ...userDoc.data(), id: uid } as User;
  }
};

// ＝＝＝＝＝＝＝＝＝＝＝＝＝CRUDメモ＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

// CRUDの時使う
// const reference = firebase.firestore().collection("shops");
// const reference1 = firebase
// .firestore()
// .collection("shops")
// .doc("S55wBFDihb5e4jMu5HLV");
// add doc指定なし
// reference.add({ name: "そば", place: "中国" });
// update　doc指定あり
// reference1.update({ name: "BBQスタジオ" });
// delete　doc指定あり
// reference1.delete();
