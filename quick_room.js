 

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

  function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
        Room_names = childKey;

   //Start code

   console.log("Room Name - " + Room_names);
   row = "<div class = 'room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
   document.getElementById("output").innerHTML += row;

   //End code

   });});}
getData();

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
 purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location.replace = "quick_page.html";
}

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "quick_page.html"
}

function logout()
    {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
    }

    user_name = localStorage.getItem("user_name");
document.getElementById("user-name").innerHTML = "Welcome " + user_name + "!";