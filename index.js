
function jukeboxC() {
	this.song = "";
	this.isPlaying = false;
	// this.play = function () {
	// 	song.play();
	
this.play = function() {
	song.play();
	this.isPlaying = true;


}

this.pause = function(){
		song.pause();
		this.isPlaying = false;

}

this.stopCurrentSong = function() {
	song.pause();
	this.isPlaying = false;
	song.currentTime = 0;
}

	

}


var jukebox1=new jukeboxC();

var song = new Audio ("audio/SW.mp3");

function playSong(){
	song.play();

}

function stopSong() {
	song.pause();
	song.stopCurrentSong(); // need to make this function
}

function nextSong(){
	song.next();
}

