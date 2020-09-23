// Select items from the DOM
const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownBtn = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;

// Set Date Input Min with Today's Date
const today = new Date().toISOString().slice(0, 10);
dateEl.setAttribute('min', today);

// Popluate Countdown / Complete UI
function updateDOM() {
    const now = new Date().getTime();
    const distance = countdownValue - now;
    console.log('distance is', distance);
}

// Take Values from Form Input
function updateCountdown(e) {
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
    console.log(countdownDate, countdownTitle);
    // Get number version of current Date, updateDOM
    countdownValue = new Date(countdownDate).getTime();
    console.log('countdown value:', countdownValue);
    updateDOM();
}

//Event Listeners
countdownForm.addEventListener('submit', updateCountdown);
