function addUser() {
    user_name = document.getElementById("WC_name").value;
    password = document.getElementById("WC_password").value;
    localStorage.setItem("WC_name", user_name);
    localStorage.setItem("WC_password", password);
    window.location = "WeChat_Room.html";
}