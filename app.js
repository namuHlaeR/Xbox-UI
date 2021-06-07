// DOM component selectors
let prevScrollpos = window.pageYOffset;

    // Utilities selectors
const utilBox1 = document.querySelector('.extra-util');

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
fillText(box0);
box1.addEventListener("mouseover", overlayOn);
box1.addEventListener('mouseout', overlayOff);
fillText(box1);
box2.addEventListener("mouseover", overlayOn);
box2.addEventListener('mouseout', overlayOff);
fillText(box2);
box3.addEventListener("mouseover", overlayOn);
box3.addEventListener('mouseout', overlayOff);
fillText(box3);
box4.addEventListener("mouseover", overlayOn);
box4.addEventListener('mouseout', overlayOff);
fillText(box4);
box5.addEventListener("mouseover", overlayOn);
box5.addEventListener('mouseout', overlayOff);
fillText(box5);
box6.addEventListener("mouseover", overlayOn);
box6.addEventListener('mouseout', overlayOff);
fillText(box6);
fillText(box7);
box8.addEventListener("mouseover", overlayOn);
box8.addEventListener('mouseout', overlayOff);
fillText(box8);
box9.addEventListener("mouseover", overlayOn);
box9.addEventListener('mouseout', overlayOff);
fillText(box9);
box10.addEventListener("mouseover", overlayOn);
box10.addEventListener('mouseout', overlayOff);
fillText(box10);
box11.addEventListener("mouseover", overlayOn);
box11.addEventListener('mouseout', overlayOff);
fillText(box11);


// Functions
    // Shows box overlay
function overlayOn(e){
    // Opens game name when mouseenter target
    text = e.target.children[0];
    {
        // Animation down => up
        tl.fromTo(
            text, 
            .1, 
            {y: 200}, 
            {y: 0, opacity: .7, ease: BackOut.none});
    }
    text.style.display = 'block';
};
    // Hides box overlay
function overlayOff(e){
    // Closes game name when mouseenter target
    let text = e.target.children[0];
    // Check for event
    if(e.event = 'mouseenter'){
        // Animation up => down 
        tl.fromTo(
            text, 
            .6, 
            {y: 0}, 
            {y: 200,opacity: 0, ease: BackOut.none});
    }
};
    // Returns title 
function getTitle(e){
    text = e.children[0];
    return text.title;
};
    // Adds title to OVERLAY
function fillText(e){
    a = e.children[0];
    a.innerText = getTitle(e);
};
// Hide small util bar 
window.onscroll = function hideBox() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      utilBox1.style.display = "flex";
    } 
    else {
      utilBox1.style.display = "none";
    }
    prevScrollpos = currentScrollPos;
  }
  

// Animations


// TESTING AREA




/*
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}



//console.log(boxText.innerHTML = 'carrot');
//boxText.innerHTML = 'carrot'



// fillText(box0);




// Just old snipets and stuff //
/*
function getTitle(e){
    text = e.children[0];
    text.innerText = getTitle(e);
    text.return.title;
}
e = e.target;
    boxText.innerHTML = 'Carrots';
    console.log(getValue(box0));

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