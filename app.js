// DOM component selectors
    // Utilities selectors
const boxText = document.querySelector('.game-text');
    // Box selectors
const box0 = document.querySelector('.box0');
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');
const box6 = document.querySelector('.box6');
const box7 = document.querySelector('.box7');
const box8 = document.querySelector('.box8');
const box9 = document.querySelector('.box9');
const box10 = document.querySelector('.box10');
const box11 = document.querySelector('.box11');
const text0 = document.querySelector('.text');


// TESTING AREA

overlayText(box1);
overlayText(box2);

// Event listeners
box0.addEventListener('mouseover', overlayText);

// Functions
function overlayText(){
    text0.classList.add('show');
    //e.classList.add('text')
};
