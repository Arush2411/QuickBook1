var firebaseConfig = {
  apiKey: "AIzaSyCO_HHBSPvXdXzM-7gPisVcW4tC_-QFGiE",
  authDomain: "quickbook-e8496.firebaseapp.com",
  databaseURL: "https://quickbook-e8496-default-rtdb.firebaseio.com",
  projectId: "quickbook-e8496",
  storageBucket: "quickbook-e8496.appspot.com",
  messagingSenderId: "975250100748",
  appId: "1:975250100748:web:95f56a3b11b50dc6fd9429",
  measurementId: "G-05GM4H0TS5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
  name:user_name,
  message:msg,
  like:0
 });

document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = "";
 snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
   childData = childSnapshot.val();
   if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
  
  
  function logout()
    {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
    }