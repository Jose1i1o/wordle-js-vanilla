import { rowAttempts } from "./data/grid.js"
import { upliftingMessages } from "./data/uplifting.js"
import { endContainer } from "./endGame.js";
import { secretWordList } from "./data/words.js";
import { keyboardKeys } from "./data/keys.js";

const gridDisplay = document.querySelector('.game-grid');
const keyboard = document.querySelector('.keyboard-container');
const messageContainer = document.querySelector('.message-container');

let secretWord = secretWordList[Math.ceil(Math.random() * secretWordList.length)].toLocaleLowerCase();
console.log(secretWord);
let thisRow = 0;
let thisColumn = 0;

rowAttempts.forEach((rowAttempt, rowAttemptIndex) => {
    const row = document.createElement('div');
    row.setAttribute('id', 'row-' + rowAttemptIndex);
    rowAttempt.forEach((attempt, attemptIndex) => {
        const cell = document .createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('id', 'rowAttempt-' + rowAttemptIndex + '-attempt-' + attemptIndex);
        row.append(cell);
    });

    gridDisplay.appendChild(row);
});

keyboardKeys.forEach(key => {
    const keyElement = document.createElement('button');
    keyElement.classList.add('keyboard-key');
    keyElement.textContent = key.key;
    keyElement.setAttribute('id', key.key);
    keyElement.setAttribute('data-key', key.keyCode);
    keyElement.setAttribute('data-key-audio', key.audio);
    keyElement.addEventListener('click', () => handleClick(
        keyElement.getAttribute('id'),
        keyElement.getAttribute('data-key'),
        keyElement.getAttribute('data-key-audio')
    ));
    keyboard.appendChild(keyElement);
}
);

const handleClick = function(key) {
    const keyAudio = document.getElementById(key).getAttribute('data-key-audio');
    const audio = new Audio(keyAudio);
    audio.play();
    if (key === 'Delete') {
        deleteLetter();
        return;
    }
    if (key === 'Submit') {
        checkMyRow();
        return;
    }
    addLetter(key);
};

const addLetter = function(key) {
    if (thisRow < 6 && thisColumn < 5) {
        const cell = document.getElementById('rowAttempt-' + thisRow + '-attempt-' + thisColumn);
        cell.textContent = key;
        rowAttempts[thisRow][thisColumn] = key;
        cell.setAttribute('data', key);
        thisColumn++;
    }
}

const deleteLetter = function() {
    if (thisColumn > 0) {
        thisColumn--;
        const cell = document.getElementById('rowAttempt-' + thisRow + '-attempt-' + thisColumn);
        cell.textContent = '';
        rowAttempts[thisRow][thisColumn] = '';
        cell.setAttribute('data', '');
    }
}

export const getScore = function () {
    const timer = document.getElementById("timer").innerHTML;
    const score = parseInt(timer.split(" ")[1]);
    const attemptNumber = (rowAttempts.length - 1)/5;
    const result = score / attemptNumber;
    return result;
}

const checkMyRow = function() {
    const myAttempt = rowAttempts[thisRow].join('').toLocaleLowerCase();
    if (thisColumn === 5) {
        colorCells();
        if (myAttempt === secretWord) {
            setTimeout(() => {
                endContainer();
            }, 3000);
            return;
        } else if (myAttempt !== secretWord && thisRow < 5) {
            thisRow++;
            thisColumn = 0
            displayMessage(upliftingMessages[Math.ceil(Math.random() * upliftingMessages.length)]);
            return;
        } else if (myAttempt !== secretWord && thisRow >= 5) {
                displayMessage(`You lost! The word was ${secretWord}`);
            return;
        }
    }
}

const displayMessage = function(message) {
    const messageText = document.createElement('div');
    messageText.textContent = message;
    messageText.classList.add('show-message');
    messageContainer.appendChild(messageText);
    setTimeout(() => {
        messageContainer.removeChild(messageText);
    }, 3000);
}

const colorKeyboard = function(id, color) {
    const key = document.getElementById(id);
    key.classList.add(color);
}

const colorCells = function() {
    const cells = document.getElementById('row-' + thisRow).childNodes;

    cells.forEach((cell, index) => {
        const cellAttribute = cell.getAttribute('data').toLocaleLowerCase();
        const cellAttributeKeyboard = cell.getAttribute('data');
        
        setTimeout(function(){
            cell.classList.add('turn');
            if (cellAttribute === secretWord[index]) {
                cell.classList.add('correct-position');
                colorKeyboard(cellAttributeKeyboard, 'correct-position');
            } else if (secretWord.includes(cellAttribute)) {
                cell.classList.add('wrong-position');
                colorKeyboard(cellAttributeKeyboard, 'wrong-position');
            } else {
                cell.classList.add('wrong-letter');
                colorKeyboard(cellAttributeKeyboard, 'wrong-letter');
            }
        }, index * 100);
    });
}