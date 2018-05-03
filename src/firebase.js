import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCXuwSLr3Qz4BXioH5HMnO2FPUhod-ouSA",
    authDomain: "crud-226d7.firebaseapp.com",
    databaseURL: "https://crud-226d7.firebaseio.com",
    projectId: "crud-226d7",
    storageBucket: "crud-226d7.appspot.com",
    messagingSenderId: "436219152612"
  };

  firebase.initializeApp(config);

  export default firebase;