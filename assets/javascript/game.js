// HangPhan 
// ©Kevin Haas 2016

var songs = ["2001","tweezer","roggae","fluffhead","llama",
"axilla","brother","bug","cavern","carini","cities",
"contact","dirt","driver","esther","farmhouse","foam",
"free","fuego","ghost","glide","grind","gumbo","guyute",
"harpua","icculus","joy","julius","kung","lifeboy","light",
"maze","piper","plasma","possum","reba","rift","sand","sanity",
"shafty","stash","steam","steep","taste","tela","timber","tube",
"walfredo","waves","wislon","wombat","langeudoc","yamar","yem",
"lol555lol","trey","mike","page","sloth","lizards","forbin","gamehendge",
"mockingbird","rutherford","multibeast","nicu","golgi","mound",
"alaska","antelope","bliss","catapult","corinna"];
var song = (songs[Math.floor(Math.random() * songs.length)]);
var blankSpace = [];
var hiddenLetter = [];
var letterCount = 0;
var incorrectLetter = [];
var correctLetter = [];
var wins = 0;
var losses = 0;
var guessesRemain = 10;

var gameOver = false;

var timeoutID = 1;

//  renders blank spaces on the game board equal to the length of the selected word
	function renderBlanks() {
        blankSpace = []
        song = songs[Math.floor(Math.random() * songs.length)];
        hiddenLetter = song.split("");
        letterCount = song.length;
		for (var i = 0; i < song.length; i++) {
		blankSpace[i] = "_";
        renderToGameBoard();
		}
    }    
//  checks keyboard input for a correct match and renders to board

    function delayedWindow() {
        id = window.setTimeout ("renderToGameBoard", 5000);
    }
    
    function correctAlert() {
        renderToGameBoard();
    }

    function mainGameLoop(playerInput) {
        var isLetterInWord = false;
        
// checks to see if a keypress is already a current incorrect guess           
       if (playerInput != incorrectLetter[0] && playerInput != incorrectLetter[1] && playerInput != incorrectLetter[2] && playerInput != incorrectLetter[3] && playerInput != incorrectLetter[4] && playerInput != incorrectLetter[5] && playerInput != incorrectLetter[6] && playerInput != incorrectLetter[7] && playerInput != incorrectLetter[8] && playerInput != incorrectLetter[9] && playerInput != incorrectLetter[10]) {
        guessesRemain--
       }
     
     
       if (playerInput == correctLetter[0] || playerInput == correctLetter[1] || playerInput == correctLetter[2] || playerInput == correctLetter[3] || playerInput == correctLetter[4] || playerInput == correctLetter[5] || playerInput == correctLetter[6] || playerInput == correctLetter[7] || playerInput == correctLetter[8] || playerInput == correctLetter[9] || playerInput == correctLetter[10]) {
           guessesRemain++
           }
       
       
  
       
   
        for (var i=0; i < letterCount; i++) {
            if (song[i] == playerInput) {
                isLetterInWord = true;
                song[i].toString() === blankSpace[i];
                
                
            }
        }
//  checks if you got the word and then adds a win
        if (isLetterInWord) {
            for (var i=0; i < letterCount; i++) {
                if (song[i] == playerInput) {
                    blankSpace[i] = playerInput;
                    correctLetter = blankSpace;
                    


        //             if (blankSpace = playerInput) {
            
        // guessesRemain--
        // renderToGameBoard();
        // console.log(isLetterInWord);
        
                    if (guessesRemain == 0) {
                        incorrectLetter = [];
                        correctLetter= [];
                        renderToGameBoard();
                        losses++;
                        guessesRemain = 10
                        document.getElementById("incorrectSound").play();
                        renderBlanks();
                        if (losses == 3) {
                             gameOver = true;
                             youLose();
    
                         }
                      }
                        
                    if (blankSpace.toString() === hiddenLetter.toString()) {
                        correctLetter = [];
                        wins++;
                        popUp();
                        incorrectLetter = [];
                        guessesRemain = 10
                        renderBlanks();
                        // renderToGameBoard();
                        if (wins == 3) {
                            youWin();
                        }
                        
                    }
                }
            }
        }
        
//  adds a loss if you didn't get the word in the set amount of (guessesRemain)
        
        
        else {
            incorrectLetter.push(playerInput);
            if (gameOver == false && wins < 3) {
                document.getElementById("incorrectLetterText").innerHTML = "It's not these"
            }
            incorrectLetter = incorrectLetter.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
                });
                
                
                
                // if (incorrectLetter == playerInput) {
                //     guessesRemain++
                // }
            // document.getElementById("guesses").innerHTML = "Guesses Remaining - " + guessesRemain;
            // document.getElementById("incorrectLetter").innerHTML = incorrectLetter;
            console.log(guessesRemain);
            
                       if (guessesRemain == 0) {
                        incorrectLetter = [];
                        correctLetter= [];
                        renderToGameBoard();
                        losses++;
                        guessesRemain = 10
                        document.getElementById("incorrectSound").play();
                        renderBlanks();
                        if (losses == 3) {
                             gameOver = true;
                             youLose();
    
                         }
                      }

        }
        
        console.log(isLetterInWord);
    }
    
//  executes when the game is started and clears or renders the board with the correct information for a new round or new game
    function renderToGameBoard(playerInput) {
        if (gameOver == false && wins < 3) {
            document.getElementById("backgroundMusic").play();
			document.getElementById("playing").innerHTML = "Phish Hangman";
			document.getElementById("begin").innerHTML = "Press any letter...";
            document.getElementById("incorrectLetter").innerHTML = incorrectLetter;
            document.getElementById("wins").innerHTML = "Wins: " + wins;
            document.getElementById("losses").innerHTML = "Losses: " + losses;
            document.getElementById("guesses").innerHTML = "Guesses Remaining - " + guessesRemain;
            document.getElementById("blankSpace").innerHTML = blankSpace.join("");
        }
        
        
        console.log(song);
        console.log(hiddenLetter);
        console.log(letterCount);
        console.log(blankSpace);
    }
        
    function popUp(playerInput) {
        
        if (blankSpace.toString() == hiddenLetter.toString()) {
            document.getElementById("flavorText").innerHTML = "Nice";
            document.getElementById("correctAnswerScreen").innerHTML = "It was: " + blankSpace.join("");
            document.getElementById("correctSound").play();
           
           
        console.log(song);
        console.log(hiddenLetter);
        console.log(letterCount);
        console.log(blankSpace);
    }
   }

    
    function youWin () {
        if (wins == 3) {
            document.getElementById("gameWonScreen").innerHTML = "You Win";
            document.getElementById("playing").innerHTML = "";
			document.getElementById("begin").innerHTML = "";
            document.getElementById("flavorText").innerHTML = "";
            document.getElementById("correctAnswerScreen").innerHTML = "";
            document.getElementById("incorrectLetterText").innerHTML = "";
            document.getElementById("incorrectLetter").innerHTML = "";
            document.getElementById("wins").innerHTML = "";
            document.getElementById("losses").innerHTML = "";
            document.getElementById("guesses").innerHTML = "";
			document.getElementById("blankSpace").innerHTML = "";
            }
        }
 
    function youLose() {
        if (gameOver == true) {
            document.getElementById("backgroundMusic").pause();
            document.getElementById("loseSound").play();
            document.getElementById("gameOverDiv").innerHTML = "Game Over";
            document.getElementById("playing").innerHTML = "";
			document.getElementById("begin").innerHTML = "";
            document.getElementById("flavorText").innerHTML = "";
            document.getElementById("correctAnswerScreen").innerHTML = "";
            document.getElementById("incorrectLetterText").innerHTML = "";
            document.getElementById("incorrectLetter").innerHTML = "";
            document.getElementById("wins").innerHTML = ""
            document.getElementById("losses").innerHTML = "" 
            document.getElementById("guesses").innerHTML = "";
			document.getElementById("blankSpace").innerHTML = "";
            }
        }
    
    function restartGame() {
        mainGameLoop();
    }
    
  
document.onkeyup = function (playerInput) {
    var guess = String.fromCharCode(playerInput.keyCode).toLowerCase();
        if (playerInput.keyCode < 48 || playerInput.keyCode > 90) {
         return false;
        
       }

    mainGameLoop(guess);
    renderToGameBoard(guess);
    console.log(guess);
  }

renderBlanks();
