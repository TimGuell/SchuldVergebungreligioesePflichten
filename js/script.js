"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
	}
};

// Define the notifications used in the game
let notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {

};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {

};

// Define the Characters
const characters = {
	"a": {
		"Name": "Aylin",
		"Color": "#5bcaff",
		"Face": "dorothea.png"
	}
	,
	"p": {
		"Name": "Patient 1",
		"Color": "#5bcaff",
		"Face": "pauline.png"
	}
	,
	"f": {
		"Name": "Finn",
		"Color": "#5bcaff",
		"Face": "dorothea.png"
	}
	,
	"m": {
		"Name": "Melina",
		"Color": "#5bcaff",
		"Face": "dorothea.png"
	}
};

let script = {
	// The game starts here.
	"Start": [
	
	"m Wie geht es ihnen heute?"
	, "p Schlecht... meine Diagonse war nicht gut... und langsam beschäftige ich mich mit meinem bisherigen Leben. Was ich erlebt habe, was ich getan habe. Vor allem unausgesprochene Dinge beschäftigen mich."
	, "m Welche unausgesprochenen Dinge?"
	, "p Ich rede von Schuld und Vergebung"
	
	// Scenenwechsel
	
	, "p Wie kann ich jetzt noch am Ende meines Lebens Vergebung erfahren?"
	
	// Scenenwechsel
	
	// Scenenwechsel
	
	, "m Und schon wieder begegnet mir heute das Thema der Schuld und der Vergebung. So schnell kann das also gehen... wie könnte ich mit so etwas nur umgehen...? Vielleicht sollte ich Antwort auf meine Frage in den Religionen suchen... die beschäftigen sich doch mit solchen Dingen."
	, "f So wie wir barmherzig sind und vergeben, so vergibt uns auch Gott und noch mehr. Klar, wir sind Menschen und sind nicht immer perfekt, aber dafür ist Gottes Barmherzigkeit grenzenlos. Wenn es uns wirklich leidtut, dann erfahren wir auch wirkliche Vergebung. Deswegen ist auch das Kreuz für uns ein so wichtiges Symbol, da Jesus durch seine Leben und seinen Tod alle Schuld der ganzen Welt auf sich genommen hat, zur Vergebung unserer Sünden."
	, "a Gott gibt Gebote, wenn wir uns nicht daran halten, dann versündigen wir uns. Gott allein kann uns Vergebung schenken. Wenn wir bereuen, wenn wir unser Leben ändern, dann wird Gott den Menschen vergeben."
	, "m Ganz wichtig in unserem Glauben ist der Bund, den Gott mit Mose und den Israeliten geschlossen hat. Wenn wir ungerecht waren, dürfen wir zumindest hoffen, dass Gott sein Bündnis mit dem Volk Israel niemals aufgeben will, solange wir uns immer wieder unserer Schuld bewusst werden. Er hat also gar nicht den Anspruch, dass wir perfekt sind, nur dass wir umkehrbereit werden, wenn wir uns falsch verhalten haben.",
	
	// Scenenwechsel
	
	"end"
	]
};