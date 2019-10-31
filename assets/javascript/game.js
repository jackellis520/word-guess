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


// Below are my attempts to either play a video(movie trailer) or replace main image with movie poster image when a word is guessed correctly.
// I haven't figured out how to set the if/else statement that if chosenTitle == 'salt' or another movie title, replace main image
// with corresponding movie poster or movie trailer.  

// Replace image with video corresponding to word/movie title succesfully guessed
    // var video = document.createElement("iframe");
    // elem.setAttribute("src", "https://www.imdb.com/videoembed/vi1236141849");
    // elem.setAttribute("height", "350");
    // elem.setAttribute("width", "250");
    // elem.setAttribute("frameborder", "0");
    // elem.setAttribute("allow", "autoplay; encrypted-media");
    // elem.src = "https://www.imdb.com/videoembed/vi1236141849";    
    //     // if('#titleToGuess' == "salt"){
    // document.getElementById("img").appendChild(video);         
    // // }

// Replace starting image with movie poster image corresponding to word/movie title succesfully guessed    
    // var poster = document.createElement("img");
    // elem.setAttribute("src", "https://m.media-amazon.com/images/M/MV5BMjIyODA2NDg4NV5BMl5BanBnXkFtZTcwMjg4NDAwMw@@._V1_SY1000_CR0,0,672,1000_AL_.jpg");
    // elem.setAttribute("alt", "Salt");
    // elem.src = "https://m.media-amazon.com/images/M/MV5BMjIyODA2NDg4NV5BMl5BanBnXkFtZTcwMjg4NDAwMw@@._V1_SY1000_CR0,0,672,1000_AL_.jpg";    
    //     // if('#titleToGuess' == "salt"){
    // document.getElementById("img").appendChild(poster); 

// more attempts...    
    // function image(thisImg) {
    //     var img = document.createElement("img");
    //     img.src = "assets\images\Salt-MoviePoster.jpg";
    //     document.getElementById('filmDiv').appendChild(img);
    // }
    // if (movieTitles.length == 'salt') {
    //     image("assets\images\Salt-MoviePoster.jpg");
    // // } else {
    // //     image("http://fanboygaming.com/wp-content/uploads/2012/10/movie2.jpg");
    // }
