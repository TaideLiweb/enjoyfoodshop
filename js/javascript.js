window.onload = function(){
	
	var phoneMenu = document.getElementsByClassName('phone_menu')[0];
	var maxHeight = document.getElementsByClassName('header_maxHeight')[0];
	var Header = document.getElementsByClassName('header')[0];
	
	phoneMenu.onclick = function(){
		
		Header.classList.toggle("header_maxHeight");
		
		}


	
	}
