/*function play(){
// step-1: after click the button the home screen will be hidden by adding classList hidden.
const homeSection =document.getElementById('home-screen');
homeSection.classList.add('hidden');

// step-2: show the playground section  by adding remove classList hidden.
const playgroundSection =document.getElementById('play-ground');
playgroundSection.classList.remove('hidden');
}*/

function handleKeyboardButtonPress(event){
    const playerPressed =event.key;
    console.log('player pressed: ',playerPressed);

    // get the expected to press.
    const currentAlphabet =document.getElementById('current-alphabet');
    const targetedAlphabet =currentAlphabet.innerText;
    const expectedAlphabet =targetedAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // check if matched or not
    if(playerPressed == expectedAlphabet){
        console.log('you got a point');
        // score update
            // step-1: get the current score 
            const pointScore =document.getElementById('point-score');
            const stringPointScore =pointScore.innerText;
            const numberPointScore =parseInt(stringPointScore);
            

            // step-2: increase the score by 1
            const updatedScore =numberPointScore + 1;

            // step-3: show the updated score
            pointScore.innerText= updatedScore;
            
        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
        return updatedScore;
    }
    else{
        console.log('you lost you life');
        // step-1: get the current life number 
        const lifeScore =document.getElementById('life-score');
        const stringLifeScore =lifeScore.innerText;
        const numberLifeScore =parseInt(stringLifeScore);
        // step-2: reduce the life count 
        const updatedLifeScore =numberLifeScore - 1;
        // step-3: display the updated life count 
        lifeScore.innerText =updatedLifeScore;

        // if life 0 then game over
        if(updatedLifeScore == 0){
           gameover()
         
        }
        // show final score with the game over
        const gameScore =document.getElementById('game-score');
        console.log('14 ke paici');
       gameScore.innerText = updatedScore;
        
    }
}
document.addEventListener('keyup',handleKeyboardButtonPress)


function continueGame(){
    // step-3: generate a random alphabet.
   const alphabet= getRandomAlphabet();
   console.log('your random alphabet is: ',alphabet);
    
   //show the randomly generated alphabet to the screen.
   const currentAlphabet=document.getElementById('current-alphabet');
   currentAlphabet.innerText =alphabet;
   

//    set a background color
setBackgroundColorById(alphabet);

}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}

function gameover(){
    hideElementById('play-ground');
    showElementById('final-score');

    
}
function playAgain(){
    hideElementById('final-score');
    showElementById('home-screen');
    
}


    //  const gameScore =document.getElementById('game-score');
    //  console.log('14 ke paici');
    //  const gameScoreText =gameScore.innerText;
    //  gameScoreText =updatedScore;