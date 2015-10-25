//Excerpt From: Ari Lerner. “ng-book.” iBooks. 
$(document).ready(function(){
	var btn = $("<button>Hello</button>");
	btn.on('click', function(evt) { 
		alert("Clicked button") 
	});
	$("#placeholder").append(btn);
});
