Titanium.UI.setBackgroundColor('#000');

var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;

var mainWin = Ti.UI.createWindow({
	backgroundColor: 'white',
	title: "Navigation Window"
});

var navWin = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

//Button for Nav Window

var button = Ti.UI.createView({
	top: 30,
	height: 70,
	width: pWidth - 50,
	backgroundColor: "orange",
	title: "Gallery Page"
});

var buttonText = Ti.UI.createLabel({
	text: "Gallery Page",
	font: {fontSize: 25, fontStyle: "Helvetica"}
});

var button2 = Ti.UI.createView({
	top: button.top + button.height + 30,
	height: 70,
	width: pWidth - 50,
	backgroundColor: "orange",
	title: "Data Page"
});

var buttonText2 = Ti.UI.createLabel({
	text: "Data Page",
	font: {fontSize: 25, fontStyle: "Helvetica"}
});

var button3 = Ti.UI.createView({
	top: button2.top + button2.height + 30,
	height: 70,
	width: pWidth - 50,
	backgroundColor: "orange",
	title: "Custom Page"
});

var buttonText3 = Ti.UI.createLabel({
	text: "Custom Page",
	font: {fontSize: 25, fontStyle: "Helvetica"}
});

button.add(buttonText);
button2.add(buttonText2);
button3.add(buttonText3);

mainWin.add(button, button2, button3);
//End Button for Nav Window
//Data Table Information

var gameList = [{title: "Super Mario Bros", description: "The Super Mario Brothers had their debut in 1985, as an interesting platformer followed the adventure of pair of plumbers attempting to save a princess."}, 
				{title: "The Legend of Zelda", description: "The Legend of Zelda is an action-adventure series starting in 1986. This game series follows a boy garbed in a green tunic, traveling the fantasy world of Hyrule to save Princess Zelda."}, 
				{title: "Pokemon", description: "Pokemon is a series of role playing games originating in 1996. The series is well known for the idea of using your collected monsters to defeat eight Gym Masters, and finally defeat the Elite Four and becoming the Pokemon Champion."}, 
				{title: "inFamous", description: "inFamous is comparatively more recent to the action-adventure series, with the first game releasing in 2009. You follow the story of Cole MacGrath, a courier who suddenly receives special lightning superpowers."}];
				
var recentReleases = [{title: "South Park: The Stick of Truth", description: "The Stick of Truth came out early March 2014. It is a clever twist on role playing games, using a lot of references to the South Park show, but allowing for large world exploration and adventure."}, 
{title: "Dark Souls 2", description: "Dark Souls 2 is an action role playing game that was released mid March 2014. You play as a cursed undead, searching a fantasy kingdom in order to find a cure for said curse."}, 
{title: "Titanfall", description: "Titanfall is a first person shooter released mid March 2014. It takes place in a futuristic world in a war, allowing you to play as free-running pilots, or their large mechanical walkers called Titans."}];

var dataImageFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "dataimage");
var dataImageFiles = dataImageFolder.getDirectoryListing();

var recentSection = Ti.UI.createTableViewSection({
	headerTitle: "Recent Releases",
	footerTitle: "Most Recent Hits"
});


var majorSection = Ti.UI.createTableViewSection({
	headerTitle: "Favorite Game Franchises",
	footerTitle: "Major Franchises"
});

var dataView = Ti.UI.createView({
	height: 65,
	backgroundColor:"#fff",
	top:0
});

var allGamesSections = [majorSection, recentSection];

//End Data Table Information

var loadFile = require("gallery");
var loadData = require("datapage");
var loadCustom = require("customPage");
var loadThisFile = require("datapage2");

navWin.open();
