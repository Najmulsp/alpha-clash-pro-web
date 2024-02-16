/*function play(){
// step-1: after click the button the home screen will be hidden by adding classList hidden.
const homeSection =document.getElementById('home-screen');
homeSection.classList.add('hidden');

// step-2: show the playground section  by adding remove classList hidden.
const playgroundSection =document.getElementById('play-ground');
playgroundSection.classList.remove('hidden');
}*/

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
}

