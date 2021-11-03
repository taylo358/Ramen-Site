//Show Menu when hamburger menu icon is clicked//
function showMenu(){
    document.getElementById("sideMenu").className='col-md-6 left menuShow';
    document.getElementById("menuIcon").innerHTML="X";
}

//if menu is showing then hide it when the X is clicked
function hideMenu(){
    document.getElementById("sideMenu").className='col-md-6 left menuHide';
    document.getElementById("menuIcon").innerHTML="Menu";
}

function displayMenu(){
if(document.getElementById("menuIcon").innerHTML=="Menu"){
    showMenu();
    disableScroll();
} else if(document.getElementById("menuIcon").innerHTML=="X"){
    hideMenu();
    enableScroll();
}else{
    location.reload();
}
}

//Disable Scroll while side menu is showing//
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable Scroll
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable Scroll
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

//Scroll Button//
function scrollPage(){
    window.scrollBy(0,-100);
}
