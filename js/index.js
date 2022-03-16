import { gameStart } from "./gameStart.js";
import { getUserName } from "./utils/getUsername.js";
import "./app.js";


window.onload = function() {
    gameStart();
}

const handleStart = function() {
    e.preventDefault();

    let userName = document.getElementById("userName").value;
    getUserName("set", userName);

    gameStart();
}

document.getElementById("userNameForm")
.addEventListener("submit", handleStart);



