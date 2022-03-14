const gridDisplay = document.querySelector('.game-grid');
const keyboard = document.querySelector('.keyboard-container');
const messageContainer = document.querySelector('.message-container');

const secretWord = "casco";
let thisRow = 0;
let thisColumn = 0;



const keyboardKeys = [
    {
        key: 'Q',
        keyCode: 81,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
        key: 'W',
        keyCode: 87,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
        key: 'E',
        keyCode: 69,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
        key: 'R',
        keyCode: 82,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
        key: 'T',
        keyCode: 84,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
        key: 'Y',
        keyCode: 89,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
        key: 'U',
        keyCode: 85,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
        key: 'I',
        keyCode: 73,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
        key: 'O',
        keyCode: 79,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
        key: 'P',
        keyCode: 80,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
        key: 'A',
        keyCode: 65,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
        key: 'S',
        keyCode: 83,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
        key: 'D',
        keyCode: 68,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
        key: 'F',
        keyCode: 70,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
        key: 'G',
        keyCode: 71,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
        key: 'H',
        keyCode: 72,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
        key: 'J',
        keyCode: 74,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
        key: 'K',
        keyCode: 75,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
        key: 'L',
        keyCode: 76,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
        key: 'Z',
        keyCode: 90,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
        key: 'X',
        keyCode: 88,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
        key: 'C',
        keyCode: 67,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
        key: 'V',
        keyCode: 86,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
        key: 'B',
        keyCode: 66,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
        key: 'N',
        keyCode: 78,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
        key: 'M',
        keyCode: 77,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    },
    {
        key: 'Submit',
        keyCode: 13,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    {
        key: 'Delete',
        keyCode: 46,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
];

const rowAttempts = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
];

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
        console.log('check row' + checkMyRow());
        console.log(rowAttempts);
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

const checkMyRow = function() {
    const myAttempt = rowAttempts[thisRow].join('').toLocaleLowerCase();
    if (thisColumn === 5) {
        colorCells();
        if (myAttempt === secretWord) {
            displayMessage('You win!');
            return;
        } else if (myAttempt !== secretWord && thisRow < 5) {
            thisRow++;
            thisColumn = 0
            displayMessage('Try again!');
            return;
        } else if (myAttempt !== secretWord && thisRow >= 5) {
            displayMessage('Game Over!');
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
    console.log(key);
    key.classList.add(color);
}

const colorCells = function() {
    const cells = document.getElementById('row-' + thisRow).childNodes;

    cells.forEach((cell, index) => {
        const cellAttribute = cell.getAttribute('data').toLocaleLowerCase()
        const cellAttributeKeyboard = cell.getAttribute('data');
        console.log(cellAttribute);
        
        setTimeout(function(){
            cell.classList.add('turn');
            if (cellAttribute === secretWord[index]) {
                cell.classList.add('correct-position');
                colorKeyboard(cellAttributeKeyboard, 'correct-position');
                secretWord = secretWord.replace(attempt[index], '');
            } else if (secretWord.includes(cellAttribute)) {
                cell.classList.add('wrong-position');
                colorKeyboard(cellAttributeKeyboard, 'wrong-position');
                secretWord = secretWord.replace(attempt[index], '');
            } else {
                cell.classList.add('wrong-letter');
                colorKeyboard(cellAttributeKeyboard, 'wrong-letter');
                secretWord = secretWord.replace(attempt[index], '');
            }
        }, index * 100);
    });
}