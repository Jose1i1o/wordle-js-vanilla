import { getScore } from "./gameLogic.js";
import { ranking } from "./data/ranking.js";
import { getUserName } from "./utils/getUsername.js";

export const endContainer = function() {
    messageText();
    rankingContainer();
}

const messageText = function() {
    const score = getScore();
    const userName = getUserName("get");
    const message = document.getElementById("messageEnd");
    if (score === 0) {
        message.textContent = `${userName}, you lost!`;
    }
    if (score > 0) {
        message.textContent = `Congratulations, ${userName}! Your score is ${score}`;
    }

    const messageText = document.createElement('div');
    messageText.classList.add("messageEnd");
    messageText.textContent = message.textContent;
}

const rankingContainer = function() {
    document.getElementById("page2").classList.add("hide");
    document.getElementById("page3").classList.remove("hide");
    const score = getScore();
    const userName = getUserName("get");
    const userScore = {
        name: userName,
        score: score
    }
    ranking.push(userScore);
    ranking.sort((a, b) => b.score - a.score);
    ranking.reverse();

    console.log(ranking);
    const rankingContainer = document.getElementById("rankingList");
    
    for (let i = 0; i < ranking.length; i++) {
        const rankingItem = document.createElement("li");
        rankingItem.classList.add("playerScore");
        rankingItem.textContent = `${i + 1}. ${ranking[i].name} - ${ranking[i].score}`;
        rankingContainer.appendChild(rankingItem);
    }
}