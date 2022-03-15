export const gameStart = function(){
    document.getElementById("page2").classList.add("hide");
    document.getElementById("startGame").addEventListener("click", function(e){
        e.preventDefault();
        document.getElementById("page1").classList.add("hide");
        document.getElementById("page2").classList.remove("hide");
    });
};
