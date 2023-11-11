var firebaseConfig = {
    apiKey: "AIzaSyCefGLPxLIXe_z2EwAyhLRlVizaSeYXMGw",
    authDomain: "wechat-b888a.firebaseapp.com",
    databaseURL: "https://wechat-b888a-default-rtdb.firebaseio.com",
    projectId: "wechat-b888a",
    storageBucket: "wechat-b888a.appspot.com",
    messagingSenderId: "287018980880",
    appId: "1:287018980880:web:a743b27c41c8a16f381c95"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("WC_name");
document.getElementById("user_name").innerHTML = user_name + "!";

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "WeChat_Page.html";
}
function getData() {
        firebase.database().ref("/").on('value', function (snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {childKey = childSnapshot.key;
                Room_names = childKey;
            //Start code
            console.log("Room Name: " + Room_names);
            row = "<div class = 'room_name' id = " + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "<br><br><hr>" + "</div>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}

getData();
function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "WeChat_Page.html"
}

function logout() {
    localStorage.removeItem("WC_name");
    localStorage.removeItem("WC_password");
    localStorage.removeItem("room_name");
    window.location = "WeChat_Login.html";
}