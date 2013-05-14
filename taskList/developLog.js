/*chrome.devtools.panels.ConsoleMessage.createSidebarPane(
    "flashLog",
    function(sidebar) {
    	sidebar.setHeight("300px");
    	sidebar.setPage("popup.html")
  		chrome.experimental.devtools.console.addMessage("Log","成功建造边栏");
  		sidebar.onSelectionChanged.addListener(function() {
  			chrome.experimental.devtools.console.addMessage("Log","是什么被选中了");
  		});
  		chrome.experimental.devtools.console.onMessageAdded.addListener(function(ConsoleMessage message) {
  			alert("收到消息");
  		});

  //chrome.devtools.panels.elements.onSelectionChanged.addListener(updateElementProperties);
});*/
alert('run');
console.log("ssssss");

chrome.devtools.panels.create(
	"flash log",
	"icon.png",
	"popup.html",
	function(pp){
		//console.log("据说调用成功了");
		alert("据说调用成功了");
		chrome.experimental.devtools.console.addMessage("Log","成功建造母舰");

	}
)

chrome.experimental.devtools.console.addMessage("Log","111");
chrome.experimental.devtools.console.onMessageAdded.addListener(function(message) {alert(message);});