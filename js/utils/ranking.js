import { ranking } from "./data/ranking.js";

export const rankingContainer = function() {
    loadRanking();
}

const loadRanking = function() {
    const rankingContainer = document.getElementById("rankingList");

    ranking.forEach(function(score, index) {
        const newRank = document.createElement("span");
        const newRankTitle = document.createElement("span");
        const newRankAttempts = document.createElement("span");
        const newRankScore = document.createElement("span");

        newRank.classList.add("ranking-item");
        newRankTitle.classList.add("ranking-item-title");
        newRankAttempts.classList.add("ranking-item-attempts");
        newRankScore.classList.add("ranking-item-score");

        newRankTitle.textContent = score.name;
        newRankAttempts.textContent = score.attempts;
        newRankScore.textContent = score.score;

        newRank.appendChild(newRankTitle, newRankAttempts, newRankScore);

        rankingContainer.appendChild(newRank);
    });
}