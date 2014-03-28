button3.addEventListener('click', function(){
	var customWindow = Ti.UI.createWindow({
		backgroundColor: "red"
	});
	
	var switchData = Ti.UI.createSwitch({
 	value:true 
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
		customWindow.close();
	};
	
	closeButton.addEventListener("click", closeWindow);
	
	switchData.addEventListener('change',function(e){
  if (switchData.value === true){
  	alert("You've turned the switch on! Yay!");
  	customWindow.setBackgroundColor("blue");
  } else {
  	alert("You've turned the switch off! Huzzah!");
  	customWindow.setBackgroundColor("red");
  };
  
  
});
	
	customWindow.add(switchData, closeButton);
	navWin.openWindow(customWindow, {animation: true});
});




