var imageFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "imagesnew");
var imageFiles = imageFolder.getDirectoryListing();

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

button.addEventListener('click', function(event){
	var galleryWin = Ti.UI.createWindow({
	backgroundColor: 'black',
	title: "Gallery Window"
});

var imageHolder = Ti.UI.createView({
});

var newImage = Ti.UI.createImageView({
		title: imageFiles[0],
		image: "imagesnew/" + imageFiles[0],
		width: Ti.Platform.displayCaps.platformWidth,
		height: imageHolder.height
});

	var closeButton = Ti.UI.createLabel({
		text: "Close Window",
		backgroundColor: "#333",
		color: "fff",
		height: 50,
		width: "100%",
		bottom: 0,
		textAlign: "center"
});

	var pictureButton = Ti.UI.createLabel({
		text: "Next Image",
		backgroundColor: "white",
		color: "black",
		height: 50,
		width: "100%",
		bottom: 50,
		textAlign: "center"
	});

	closeButton.addEventListener('click', function(){
	galleryWin.close();
});


pictureButton.addEventListener("click", function(){
	newImage.setImage("imagesnew/" + imageFiles[getRandomInt(1, 5) - 1]);
	}
);

	imageHolder.add(newImage);
	galleryWin.add(imageHolder, pictureButton, closeButton);
	navWin.openWindow(galleryWin, {animated:true});
	});