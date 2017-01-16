
var limit = 99;

function validateInput(){
	var localnumber = document.getElementById('thenumber');
	var message = "";
	
	if (localnumber.value > limit){
		message = "[validate:] The number is too large.";
		message_display.innerHTML = message;
	}

	else if (localnumber.value <= limit) {
	
		message = "[validate:] The number is OK... I think.";
		message_display.innerHTML = message;
	
	}
	
	else{
	
		message = "[validate:] The number is acceptable";
		message_display.innerHTML = message;

	}
}

//convert

function cube(){

	var localnumber = document.getElementById('thenumber');
	var result = localnumber.value * localnumber.value  *localnumber.value ;
	var messagestring = "";
	responce.innerHTML = messagestring.concat("cube: ", result.toString());

}

function square (){

	var localnumber = document.getElementById('thenumber');
	var result = localnumber.value * localnumber.value;
	var messagestring = "";
	responce.innerHTML = messagestring.concat("square:", result.toString());

}