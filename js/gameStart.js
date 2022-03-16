import { getUserName } from "./utils/getUsername.js"

export const gameStart = function(){
    document.getElementById("page2").classList.add("hide");
    document.getElementById("page3").classList.add("hide");

    const userName = getUserName("get");
    console.log(userName);
};
