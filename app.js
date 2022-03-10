const gridDisplay = document.querySelector('.game-grid');
const keyboard = document.querySelector('.keyboard-container');

const keyboardKeys = [
    {
        key: 'Q',
        keyCode: 81,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    {
        key: 'W',
        keyCode: 87,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    {
        key: 'E',
        keyCode: 69,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    {
        key: 'A',
        keyCode: 65,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    {
        key: 'S',
        keyCode: 83,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    {
        key: 'D',
        keyCode: 68,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    {
        key: 'Z',
        keyCode: 90,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    {
        key: 'X',
        keyCode: 88,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    {
        key: 'C',
        keyCode: 67,
        audio: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    },
    {
        key: 'Enter',
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
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', ''],
    ['', '', '', '', '', '']
];

rowAttempts.forEach((rowAttempt, rowAttemptIndex) => {
    const row = document.createElement('div');
    row.setAttribute('id', 'row-' + rowAttempt);
    rowAttempt.forEach((attempt, attemptIndex) => {
        const cell = document .createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('id', 'rowAttempt-' + rowAttemptIndex + '-attempt-' + attemptIndex);
        row.append(cell);
    });

    gridDisplay.appendChild(row);
});


const handleClick = (e) => {
    console.log('clicked');
};

keyboardKeys.forEach(key => {
    const keyElement = document.createElement('button');
    keyElement.classList.add('keyboard-key');
    keyElement.textContent = key.key;
    keyElement.setAttribute('id', key.key);
    keyElement.setAttribute('data-key', key.keyCode);
    keyElement.setAttribute('data-key-audio', key.audio);
    keyElement.addEventListener('click', handleClick);
    keyboard.appendChild(keyElement);
}
);