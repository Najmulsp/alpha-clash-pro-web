function hideElementById(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('hidden');
}


function showElementById(elementId){
    const element =document.getElementById(elementId);
    element.classList.remove('hidden');
}
//    set a background color function
function setBackgroundColorById(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('bg-amber-400');
}

//    remove a background color function
function removeBackgroundColorById(elementId){
    const element =document.getElementById(elementId);
    element.classList.remove('bg-amber-400');
}

function getElementTextById(elementId){
    const element =document.getElementById(elementId);
    const text = element.innerText;
}
function getRandomAlphabet(){
    // create and get an alphabet array.
    const alphabetString ='abcdefghijklmnopqrstuvwxyz';
    const alphabets =alphabetString.split('');
    // console.log(alphabets);

    // get a random index between 0-25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    // console.log(index);

    const alphabet = alphabets[index];
    return alphabet;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText=value;
}
