import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0Tn75fPotov6ZzLPqaOhoW5dF3MwkpTE",
  authDomain: "binary-sequence-db.firebaseapp.com",
  databaseURL: "https://binary-sequence-db.firebaseio.com",
  projectId: "binary-sequence-db",
  storageBucket: "binary-sequence-db.appspot.com",
  messagingSenderId: "811701963619",
  appId: "1:811701963619:web:727c69305900b2c73d2156",
  // apiKey: "AIzaSyAQ5r3sn-cYHrbmueqeqcp9__iNgHxD0K0",
  // authDomain: "binary-sequence-eaaa3.firebaseapp.com",
  // databaseURL: "https://binary-sequence-eaaa3.firebaseio.com",
  // projectId: "binary-sequence-eaaa3",
  // storageBucket: "binary-sequence-eaaa3.appspot.com",
  // messagingSenderId: "823465489065",
  // appId: "1:823465489065:web:19434137faacf8685aefb8",
};
firebase.initializeApp(firebaseConfig);

export const auth = (function () {
  return async (email, password, token) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
      return false;
    }

    const db = firebase.firestore();
    const querySnapshot = await db
      .collection("users")
      .where("email", "==", email)
      .get();
    let userDoc;
    querySnapshot.forEach(function (doc) {
      userDoc = doc;
    });
    const user = userDoc.data();

    if (!user.binary_token) {
      await userDoc.ref.set({
        email,
        binary_token: token,
      });
      return true;
    } else {
      if (user.binary_token === token) {
        return true;
      } else {
        return false;
      }
    }
  };
})();
