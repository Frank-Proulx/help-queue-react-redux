import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";

function App(){
  return ( 
    <React.Fragment>
      <Header />
      <TicketControl />
    </React.Fragment>
  );
}

export default App;

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBInnpYE_gATsCjUfxnzowiKbnyooGw3D8",
//   authDomain: "redux-help-queue-6b698.firebaseapp.com",
//   projectId: "redux-help-queue-6b698",
//   storageBucket: "redux-help-queue-6b698.appspot.com",
//   messagingSenderId: "245314676614",
//   appId: "1:245314676614:web:f3ad66fa26765dd9782e07"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);