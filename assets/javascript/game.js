// One-word movie titles to guess
var movieTitles = ['salt', 'argo', 'thor', 'halloween', 'jumanji', 'cinderella', 'gravity', 'titanic'];

// all 26 letters in the alphabet for random input
var alphabetArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// shows the number of wins
var winCount = 0;

// shows the number of losses
var lossCount = 0;

// drives the win counter
var rightGuessCounter = 0;

// shows the number of attempts left to input more letters to guess a one-word movie title
var guessesRemaining = 10;

// placeholder for the chosen one-word movie title
var randomTitle = "";

// placeholders for letters in the one-word movie title
var lettersInTitle = [];

// number of blanks in the word 
var numBlanks = 0;

// placeholder for blanks and letter with successful hits 
var blanksAndHits = [];

// placeholder for letters with no hits 
var wrongLetters = [];

// Below are functions for the one-word movie title game
function reset(){
    randomTitle = movieTitles[Math.floor(Math.random() * movieTitles.length)];
    lettersInTitle = randomTitle.split('');     
    numBlanks = lettersInTitle.length;

    letterGuessed = 0;
    rightGuessCounter = 0;
    guessesRemaining: 10;
    wrongLetters = [];
    blanksAndHits = [];
    alphabetArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    test=false;
    startGame();
}

function startGame(){
    randomTitle = movieTitles[Math.floor(Math.random() * movieTitles.length)];
    lettersInTitle = randomTitle.split('');     
    numBlanks = lettersInTitle.length;

    rightGuessCounter = 0;
    guessesRemaining = 10;
    wrongLetters = [];
    blanksAndHits = [];    
    alphabetArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    // holds the number of underscores that match a one-word movie title
	for(var i = 0; i< numBlanks; i++){
        blanksAndHits[i] = "_";    
        document.querySelector('#titleToGuess').innerText = blanksAndHits;
    }

    document.querySelector('#titleToGuess').innerText = blanksAndHits.join(' ');
    document.querySelector('#numGuessesLeft').innerText = guessesRemaining;
    document.querySelector('#winCounter').innerText = winCount;
    document.querySelector('#lossCounter').innerText = lossCount;
    document.querySelector('#wrongGuesses').innerText = wrongLetters;

    console.log(randomTitle);
    console.log(lettersInTitle);
    console.log(numBlanks);
    console.log(blanksAndHits);
}

// To display correct guessed letters and wrong letters in their corresponding divs and also decreases the count of remaining guesses accordingly   
function compareLetters (userKey){
    if(randomTitle.indexOf(userKey) > -1){
        for(var i = 0; i < numBlanks; i++){
            if(lettersInTitle[i] === userKey){
                rightGuessCounter++;
                blanksAndHits[i] = userKey;
                document.querySelector('#titleToGuess').innerText = blanksAndHits.join(' ');
            }
        }

        console.log(blanksAndHits);
    }
    else{
        wrongLetters.push(userKey);
        guessesRemaining--;
        
        document.querySelector('#numGuessesLeft').innerText = guessesRemaining;
        document.querySelector('#wrongGuesses').innerText = wrongLetters;
        
        console.log('Wrong letters = ' + wrongLetters);
        console.log('Guesses remaining are ' + guessesRemaining);
    }
}

// To display the counts of wins and losses
function winLose(){
    if(rightGuessCounter === numBlanks){
        winCount++;

        document.querySelector('#winCounter').innerText = winCount;
        reset();
    }
    else if(guessesRemaining === 0){
        lossCount++;

        document.querySelector('#lossCounter').innerText = lossCount;
        reset();
    }
}

// Initiates the code
startGame();

document.onkeyup = function(event){
    test = true;
    var letterGuessed = event.key;
    for(var i = 0; i < alphabetArray.length; i++){
        if(letterGuessed === alphabetArray[i] && test === true){
            var spliceAlphabetArray = alphabetArray.splice(i,1);
            
            console.log('Double word is = ' + alphabetArray[i]);
            console.log('Splice word is = ' + spliceAlphabetArray);

            compareLetters(letterGuessed);
            winLose();
        }
    }
}


