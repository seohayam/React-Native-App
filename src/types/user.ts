// import * as firebase from "firebase";

export type User = {
  id?: string;
  name: string;
  //   createdAt: firebase.firestore.Timestamp;
  //   updatedAt: firebase.firestore.Timestamp;
};

// ユーザー初期値定義
export const initialUser: User = {
  name: "",
  //   createdAt: firebase.firestore.Timestamp.now(),
  //   updatedAt: firebase.firestore.Timestamp.now(),
};
