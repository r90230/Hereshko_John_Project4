var gameTable = Ti.UI.createTableView({
	top: 0,
});

if(Ti.Platform.name ==="iPhone OS"){
	gameTable.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
};

gameTable.setData(allGamesSections);

var dataWindow = Ti.UI.createWindow({
	backgroundColor: "#fff",
	title: "Data Page",
	font: {fontSize: 20, fontWeight: "bold"},
	top: 0,
	width: "100%",
	textAlign: "center",
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
	
	var closeWindow = function(){
		dataWindow.close();
	};
	
	closeButton.addEventListener("click", closeWindow);

			

var loadingData = require("datapage2");

button2.addEventListener("click", function(){
	dataWindow.add(dataView, gameTable, closeButton);
	navWin.openWindow(dataWindow, {animated:true});

});


