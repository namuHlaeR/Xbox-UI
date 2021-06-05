// DOM component selectors
    // Utilities selectors
const boxText = document.querySelector('text');

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
    // Animation timeline
const tl = new TimelineMax();



// Event listeners
box0.addEventListener("mouseover", overlayOn);
box0.addEventListener('mouseout', overlayOff);
box1.addEventListener("mouseover", overlayOn);
box1.addEventListener('mouseout', overlayOff);
box2.addEventListener("mouseover", overlayOn);
box2.addEventListener('mouseout', overlayOff);
box3.addEventListener("mouseover", overlayOn);
box3.addEventListener('mouseout', overlayOff);
box4.addEventListener("mouseover", overlayOn);
box4.addEventListener('mouseout', overlayOff);
box5.addEventListener("mouseover", overlayOn);
box5.addEventListener('mouseout', overlayOff);
box6.addEventListener("mouseover", overlayOn);
box6.addEventListener('mouseout', overlayOff);
box8.addEventListener("mouseover", overlayOn);
box8.addEventListener('mouseout', overlayOff);
box9.addEventListener("mouseover", overlayOn);
box9.addEventListener('mouseout', overlayOff);
box10.addEventListener("mouseover", overlayOn);
box10.addEventListener('mouseout', overlayOff);


// Functions
function overlayOn(e){
    // Opens game name when mouseenter target
    e = e.target;
    let text = e.children[0];
    {
        // Animation down => up
        tl.fromTo(
            text, 
            .1, 
            {y: 200, opacity: 0}, 
            {y: 0, opacity: .7 , linear: BackOut.none});
    }
};
function overlayOff(e){
    // Closes game name when mouseenter target
    e = e.target;
    let text = e.children[0];
    // Check for event
    if(e.event = 'mouseenter'){
        // Animation up => down 
        tl.fromTo(
            text, 
            .2, 
            {y: 0, opacity: 0}, 
            {y: 200, opacity: 0, linear: BackOut.none});
        //text.classList.remove('trsp');
    }
};

// Animations


// TESTING AREA



// Just old snipets and stuff //
/*

const tl = new TimelineMax();

e.fromTo(
    text, 
    1, 
    {height: '0%'}, 
    {height: '80%', ease: Power2.easeInOut}
    )

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