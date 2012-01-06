



$(document).ready(function () {
	$(document).keypress(menuClick);
	document.addEventListener("menubutton", menuClick, false);
});

function menuClick(e){
	var ev = e || event;
  
  	if (ev.keyCode == 77 || ev.keyCode == 109){
		
		toggleMenu()
  	}
}

function toggleMenu(){
	if ($("#androidmenu").css('bottom') != "0px"){ 
		$("#androidmenu").css('bottom', 0);
	}
	else{
		$("#androidmenu").css('bottom', -$("#androidmenu").height());
	}
	
}



function replaceLinks(){
	var links = document.querySelectorAll('a');
	
	for (i=0; i<links.length; i++){
		
		var link = links[i];
		link.addEventListener("click",replacePage, false);
	}
	
}

function replacePage(){
	event.preventDefault();
	var href= event.target.parentNode.getAttribute('href');
	var stateObj = { foo: "bar" };
	
	
	var ajax = new XMLHttpRequest();
	ajax.open("GET",href,true);
	ajax.send();
	
	ajax.onreadystatechange=function(){
		if(ajax.readyState==4 && (ajax.status==200)){
			document.body.innerHTML = "";
			document.body.innerHTML = ajax.responseText;
			history.pushState(stateObj, "page 2", href);
		}
	} 
	
}
