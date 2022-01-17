import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCu7j7zj_LTt7oWmRBLeFo6GkRl9Y6sx14",
  authDomain: "fir-project-b31b1.firebaseapp.com",
  projectId: "fir-project-b31b1",
  storageBucket: "fir-project-b31b1.appspot.com",
  messagingSenderId: "1017054463022",
  appId: "1:1017054463022:web:1f038fd06bfdbf12fc4bbf",
};

firebase.initializeApp(config);

export default firebase.firestore();
