var firebaseConfig = {
      apiKey: "AIzaSyBoVfyN76WBtRl3pGJIiOE2VsxRhxraGiE",
      authDomain: "test-project-45391.firebaseapp.com",
      databaseURL: "https://test-project-45391-default-rtdb.firebaseio.com",
      projectId: "test-project-45391",
      storageBucket: "test-project-45391.appspot.com",
      messagingSenderId: "112017589272",
      appId: "1:112017589272:web:da6914c147b0337e6faf6d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("User_ID");
document.getElementById("User_name").innerHTML="Welcome " + user_name + "!" ; 

 function addRoom()
{
      Room_names = document.getElementById("Room_name").value;
      firebase.database().ref ("/").child(Room_names).update
({
      pourpose : "adding room name "
}) ; 

localStorage.setItem("room_names " , Room_names) ; 
window.location = "#";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

row= "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
document.getElementById("output").innerHTML += row ;
      //End code
      });});}
getData();

function redirectToRoomName (name)
{

console.log(name);
localStorage.setItem ("room_names" , Room_names);
window.location = "#" ; 

}