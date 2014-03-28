var getDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#f5f5f5"
	});
			
	var detailView = Ti.UI.createView({
		height: 65,
		backgroundColor:"#fff",
		top:0
	});
	
	var detailBorder = Ti.UI.createView({
		backgroundColor: "#dbdbdb",
		height: 1,
		top: dataView.height + dataView.top
	});
	
	var detailTitle = Ti.UI.createLabel({
		text: this.title,
		font: {fontSize: 20, fontWeight: "bold"},
		top: 30,
		width: "100%",
		textAlign: "center"
	});

	var detailImage = Ti.UI.createImageView({
		image: this.image,
		bottom: 60,
		width: "100%"
	});
	
	var detailText = Ti.UI.createLabel({
		text: this.desc,
		top: detailBorder.height + detailBorder.top + 40,
		left: 10,
		right: 10
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
		detailWindow.close();
	};
	
	closeButton.addEventListener("click", closeWindow);
	
	detailView.add(detailTitle);
	detailWindow.add(detailView, detailBorder, detailText, detailImage, closeButton);
	
	detailWindow.open();

};
	
	
for(var i=0, j=recentReleases.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: recentReleases[i].title,
		desc: recentReleases[i].description,
		image: "dataimage/" + dataImageFiles[i + 4],
		hasChild: true
	});
	
	if(Ti.Platform.name ==="iPhone OS"){
		theRow.hasChild = false;
		theRow.hasDetail = true;	
};
	
	recentSection.add(theRow);
	theRow.addEventListener("click", getDetail);
};


for(var i=0, j=gameList.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: gameList[i].title,
		desc: gameList[i].description,
		image: "dataimage/" + dataImageFiles[i],
		hasChild: true
	});
	
	if(Ti.Platform.name ==="iPhone OS"){
		theRow.hasChild = false;
		theRow.hasDetail = true;	
};

	
	majorSection.add(theRow);
	theRow.addEventListener("click", getDetail);
};


