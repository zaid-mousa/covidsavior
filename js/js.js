// JavaScript Document

var theChecker = true;
var phoneList = document.getElementById("pH");
function viewSearch(){
	if(theChecker == true){
			phoneList.setAttribute("style", "display:block");
			theChecker= false;
			}
		else{
			phoneList.setAttribute( "style", "display:none");
			
			theChecker= true;}
}



window.onresize = function restDefault(){
				 hidInfo();}
function  hidInfo(){
	var menue = document.getElementById("pH");
	
	menue.style.display="none";
	
	}