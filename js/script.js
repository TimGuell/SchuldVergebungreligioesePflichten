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
"scene1": "patient.png",
"scene2": "scene2.jpg",
"scene3": "scene1.jpg",
"scene4": "scene2.jpg"

};

// Define the Characters
const characters = {
	"a": {
		"Name": "Aylin",
		"Color": "#5bcaff",
		"Face": "aylin_erzählend.png"
	}
	,
	"p": {
		"Name": "Patient",
		"Color": "#5bcaff"
	}
	,
	"f": {
		"Name": "Finn",
		"Color": "#5bcaff",
		"Face": "finn_erzählend.png"
	}
	,
	"m": {
		"Name": "Melina",
		"Color": "#5bcaff",
		"Face": "melina_erzählend.png"
	}
	,
	"e": {
		"Name": "Erzähler",
		"Color": "#5bcaff"
	}
};

let script = {
	// The game starts here.
	"Start": [
	
	
	"e Du machst ein Praktikum im Krankenhaus. Montag Morgen in der Frühschicht, sollst du eine kleine Runde über die Station machen und nach den Patienten sehen. Du kommst in ein Zimmer, in dem ein krebskranker Patient liegt. Du machst ein Praktikum im Krankenhaus. Montag Morgen in der Frühschicht, sollst du eine kleine Runde über die Station machen und nach den Patienten sehen. Du kommst in ein Zimmer, in dem ein krebskranker Patient."
	
	, "scene scene1 with fadeIn"
	, "wait 500"
	, "a Wie geht es Ihnen?"
	, "p Schlecht... meine Diagonse war nicht gut... und langsam beschäftige ich mich mit meinem bisherigen Leben. Was ich erlebt habe, was ich getan habe. Vor allem unausgesprochene Dinge beschäftigen mich."
	, "a Welche unausgesprochenen Dinge?"
	, "p Ich rede von Schuld und Vergebung..."
	
	// Bild 2
	
	, "e Dein Patient erinnert sich, wie er einen Mitschüler gemobbt hat, der aufgrund des Mobbings umgezogen ist. Ein klärendes Gespräch und eine Entschuldigung bei seinem Mitschüler sind nicht mehr möglich."
	, "p Wie kann ich jetzt noch am Ende meines Lebens Vergebung erfahren?"
	
	// Bild 3
	, "a ich muss jetzt leider wieder meinen Pflichten nachgehen. Es tut mir leid. Wir sehen uns morgen wieder."
	
	// Bild 4
	, "e Am Ende des Tages beobachtest du einen Streit zwischen einem vom Fahrrad angerempelten Fußgänger."
	, "e Und dir fällt auf: Es geht schon wieder um Schuld und Vergebung. Das Thema scheint dich heute zu verfolgen. Du überlegst, wie du mit dem Thema umgehen könntest und hast den Gedankenblitz, dich über die Religion dem Thema zu nähern."
	
	// Bild 5
	, "e Du triffst dich mit deinen zwei Freunden Finn und Melina in einem Café. Bei einer Tasse Kaffee redet ihr über deine Fragen."
	, "f So wie wir barmherzig sind und vergeben, so vergibt uns auch Gott und noch mehr. Klar, wir sind Menschen und sind nicht immer perfekt, aber dafür ist Gottes Barmherzigkeit grenzenlos. Wenn es uns wirklich leidtut, dann erfahren wir auch wirkliche Vergebung. Deswegen ist auch das Kreuz für uns ein so wichtiges Symbol, da Jesus durch seine Leben und seinen Tod alle Schuld der ganzen Welt auf sich genommen hat, zur Vergebung unserer Sünden."
	, "m Ganz wichtig in unserem Glauben ist der Bund, den Gott mit Mose und den Israeliten geschlossen hat. In der Thora, unserer Vergangenheit und unserem täglichen Leben kommt es aber immer wieder vor, dass wir uns falsch gegen Gott oder unsere Nächsten verhalten. Wenn das passiert, dürfen wir zumindest hoffen, dass Gott sein Bündnis mit dem Volk Israel niemals aufgeben will, solange wir uns immer wieder unserer Schuld bewusst werden. Er hat also gar nicht den Anspruch, dass wir perfekt sind, nur dass wir umkehrbereit werden, wenn wir uns falsch verhalten haben."
	, "a Gott gibt Gebote, wenn wir uns nicht daran halten, dann versündigen wir uns. Gott allein kann uns Vergebung schenken. Wenn wir bereuen, wenn wir unser Leben ändern, dann wird Gott den Menschen vergeben."
	
	// Bild 6
	, "e Am nächsten Tag gehst du wieder zur Arbeit und überlegst dir, worüber du mit deinem Krebspatienten reden könntest. Was könntest du ihm raten, damit er mit seiner Lage besser fertig wird?"
	
	,"end"
	]
};