const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDdH-wug_QYRUZ9cQWmq7JAlM4arbBGc-g",
    authDomain: "internet-programming-844f8.firebaseapp.com",
    databaseURL: "https://internet-programming-844f8-default-rtdb.firebaseio.com",
    projectId: "internet-programming-844f8",
    storageBucket: "internet-programming-844f8.appspot.com",
    messagingSenderId: "969473386558",
    appId: "1:969473386558:web:34dbdc525f83140893496f"
})
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const signUp = () => {
  const email = document.getElementById('regname').value.trim()
  const password = document.getElementById('regpass').value
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    alert('Registration Successful!')
    location.href = "http://127.0.0.1:5500/index.html"
    // ...
  })
  .catch((error) => {
    console.log(error.message)
  });
}

const logIn = () => {
    const email = document.getElementById('logname').value.trim()
    const password = document.getElementById('logpass').value
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    location.href = "http://127.0.0.1:5500/planets_page.html"
    var user = userCredential.user;
    console.log('login in success')
    // ...
  })
  .catch((error) => {
    console.log(error.message)
  });
}