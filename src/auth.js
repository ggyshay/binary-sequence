import * as firebase from "firebase/app";
import "firebase/auth";

export const auth = (function () {
  const firebaseConfig = {
    apiKey: "AIzaSyAQ5r3sn-cYHrbmueqeqcp9__iNgHxD0K0",
    authDomain: "binary-sequence-eaaa3.firebaseapp.com",
    databaseURL: "https://binary-sequence-eaaa3.firebaseio.com",
    projectId: "binary-sequence-eaaa3",
    storageBucket: "binary-sequence-eaaa3.appspot.com",
    messagingSenderId: "823465489065",
    appId: "1:823465489065:web:19434137faacf8685aefb8",
  };
  firebase.initializeApp(firebaseConfig);
  return (email, password) =>
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {
        console.log(error);
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
})();
