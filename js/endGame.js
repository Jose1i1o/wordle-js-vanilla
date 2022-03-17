import { getScore } from "./app.js";

export const endGame = function() {
    document.getElementById("page2").classList.add("hide");
    document.getElementById("page3").classList.remove("hide");
    const score = getScore();
    const rankingContainer = document.getElementById("rankingList");
    const newRank = document.createElement("span");
    const newRankTitle = document.createElement("span");
    const newRankAttempts = document.createElement("span");
    const newRankScore = document.createElement("span");

    newRank.classList.add("ranking-item");
    newRankTitle.classList.add("ranking-item-title");
    newRankAttempts.classList.add("ranking-item-attempts");
    newRankScore.classList.add("ranking-item-score");

    newRankTitle.textContent = name;
    newRankAttempts.textContent = attempts;
    newRankScore.textContent = score;

    newRank.appendChild(newRankTitle, newRankAttempts, newRankScore);

    rankingContainer.appendChild(newRank);
};