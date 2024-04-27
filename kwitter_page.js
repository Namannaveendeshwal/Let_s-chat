//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBzdkFL1GAeCGQEMWzyrW4d34Ckpw96kQU",
      authDomain: "kwitter-d05d8.firebaseapp.com",
      databaseURL: "https://kwitter-d05d8-default-rtdb.firebaseio.com",
      projectId: "kwitter-d05d8",
      storageBucket: "kwitter-d05d8.appspot.com",
      messagingSenderId: "228727930451",
      appId: "1:228727930451:web:a96708c078cc0335cb10a6"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
      msg = document.getElementById("msg").value ="";
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value ="";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       windows.location = "Index.html";
}