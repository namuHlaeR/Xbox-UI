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


// TESTING AREA

box0.addEventListener("mouseenter", function showOverlay(e){
    // Opens game name when mouseenter target
    e = e.target;
    let text = e.children[0];
    if(e.event, true){
    text.classList.add('showUp');
    text.style.opacity = .7;
    }
    else{
    text.style.opacity = 0;
    }
});


function overlay(e){

};
// Event listeners

// Functions
overlay(box0);







/*
box0.addEventListener("mouseenter", function showOverlay(e){
    // Opens game name when mouseenter target
    e = e.target;
    let text = e.children[0];
    text.style.opacity = .7;
    console.log('hey')    
});

function showBlock(e){
    e.children[0].target.style.opacity = 1
};
function showSmtn(e){
    const textTest = e.children[0];
    textTest.classList.toggle('show');
    if(textTest.classList == 'show'){
        textTest.classList.toggle('show', false);
    }
    else{
    textTest.classList.remove('show');
    }
function overlayText(text){
    if(text.classList.conatins !== 'show'){
        text.classList.toggle('show');
    }
}
    //text0.classList.add('show');
    //e.classList.add('text');
    /*if(e.classList != '.show'){
        e.classList.add('.show');
    }
    else{
        e.classList.remove('show');
    }
*/