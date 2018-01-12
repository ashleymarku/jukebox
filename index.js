
function jukeboxC() {
	this.song = "";
	this.isPlaying = false;
	// this.play = function () {
	// 	song.play();
	
this.play = function() {
	song.play();
	this.isPlaying = true;


}

// this.pauseCurrentSong = function(){
// 		song.pause();
// 		this.isPlaying = false;

// }

// this.stopCurrentSong = function() {
// 	song.pause();
// 	this.isPlaying = false;
// 	song.currentTime = 0;
// }

	

}


var jukebox1=new jukeboxC();

var song1 = new Audio ("audio/HP.mp3");
var song2 = new Audio ("audio/SW.mp3");
var song3 = new Audio ("audio/HP.mp3");

var songList = [];
songList.push(song1,song2,song3);

var	currentSongIndex = 0;
var song = songList[currentSongIndex];



function playSong(){
	song.play();

}

function pauseSong() {
	song.pause();
}

function stopSong() {
	song.pause();
	song.currentTime = 0;
	// song.stopCurrentSong(); // need to make this function
}

function nextSong(){
	song.pause();
	if (currentSongIndex === songList.length-1 ){
		currentSongIndex = 0;
	}else {
		currentSongIndex +=1;
		console.log(currentSongIndex);
	}
	song = new Audio("audio/" + song[currentSongIndex] + ".mp3" );
	console.log(song[currentSongIndex]);
	song.play();
	this.isPlaying = true;
}