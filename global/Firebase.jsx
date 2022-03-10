import firebase from "firebase";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCRwUVy-22HVLVp4fagG7CKz1ZLj89YFH8",
    authDomain: "reloaded-fe7ca.firebaseapp.com",
    projectId: "reloaded-fe7ca",
    storageBucket: "reloaded-fe7ca.appspot.com",
    messagingSenderId: "721738670308",
    appId: "1:721738670308:web:bf7df28e78184c9ce98cf1",
  });
} else {
  firebase.app(); // if already initialized, use that one
}

const db = firebase.firestore();

const notificationRef = () => {
  return db.collection("notification").get();
};

const getNofificationRefByUsername = (username) => {
  return db.collection("notification").where("username", "==", username).get();
};

const appointmentRef = () => {
  return db.collection("appointment");
};

export { notificationRef, getNofificationRefByUsername, appointmentRef };

export { db };
