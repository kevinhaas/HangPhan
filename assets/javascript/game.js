// HangPhan 
// ©Kevin Haas 2016


var guesses = 10;

var songs = ["tweezer","roggae","fluffhead","llama"];
var song = songs[Math.floor(Math.random() * songs.length)];

var blankSpace = [];
	for (var i = 0; i < song.length; i++){
		blankSpace[i] = "_";
	}

document.getElementById("guesses").innerHTML = "New text!";
document.getElementById("blankSpace").innerHTML = blankSpace;
	

		
