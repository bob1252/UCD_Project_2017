// Binary convertion file

var valDec = 0;
//var newVal = 0;
var string_reversal = '';

var outputM = 0;

//Testing(valDec);
//string_reversal = Convert_To_Binary(valDec);
//Convert_To_Decimal(string_reversal);




function Convert_To_Binary (valDec){

	console.log("---------------  !!!  START  OF  FUNCTION  1  !!!  ---------------");
	
	var newVal = 0;
	var string_reverse = '';
	var string_prep = '';

	var Orginal_valDec = valDec;
	
	while(valDec > 0){
	
		newVal = valDec % 2	;	
		valDec = valDec / 2;
		
		parseInt(valDec);
		parseInt(newVal);
		
		if (newVal == 1){
		valDec = Math.floor(valDec);
		}
		
		//console.log("new value" + " " + valDec);		
		//console.log("remainder" + " " + newVal);
		
		string_prep = newVal.toString();
		string_reverse = string_reverse.concat(string_prep);
		
		if (valDec < 0){
			break;
		}
	
	 }
	 
	string_reversal = ''; 
	 
	for (var pos = (string_reverse.length - 1); pos >= 0 ; pos --){
	
	string_reversal = string_reversal.concat(string_reverse.charAt(pos));
	
	
	}
	
	console.log("Flipped:" + " " + string_reverse);		
	console.log("Correct Direction:" + " " + string_reversal);
	console.log("---------------  !!!  END  OF  FUNCTION  1  !!!  ---------------");		
	
	return (string_reversal);

 }
 
function Convert_To_Decimal (string_reversal){

	console.log("---------------  !!!  START  OF  FUNCTION  2  !!!  ---------------");

	var string_readable = '';
	var prep_readable = string_reversal;
	outputM = 0;
	
	for (var pos = (prep_readable.length - 1); pos >= 0 ; pos --){
	
		string_readable = string_readable.concat(prep_readable.charAt(pos));
	
	
	}

	parseInt(string_readable);
	
	for (var NEWpos = 0; NEWpos <= string_readable.length ; NEWpos ++){
	
		if (string_readable.charAt(NEWpos) == 1){
		
		outputM = Math.pow(2,(NEWpos)) + outputM;
		

		
		}
	
	}
	
	console.log("Read From Function .In Revsrse. 1:" + " " +string_readable);				
	console.log ("Decimal Output:" + " " + outputM);
	console.log("---------------  !!!  END  OF  FUNCTION  2  !!!  ---------------");
	
	return (outputM);

}

function Testing (valDec) {
    
    valDec = document.getElementById("textbox").value;
    console.log(UserValue);

	for (var t = 1; t <= 100; t++){
	
		//valDec = t;
		
		string_reversal = Convert_To_Binary(valDec);
		Convert_To_Decimal(string_reversal);
		
	}
}

        
function Binary (valDec) {
    
    valDec = document.getElementById("textbox").value;
    console.log(valDec);
    
    string_reversal = Convert_To_Binary(valDec);

    document.getElementById("Output_Bin").value = string_reversal;  
    
    //Convert_To_Decimal(string_reversal);

  //document.getElementById("Output_Bin").value = outputM;

}

function Decimal (valDec) {
    
    valDec = document.getElementById("textbox").value;
    console.log(valDec);
    
    string_reversal = Convert_To_Binary(valDec);

    Convert_To_Decimal(string_reversal);
 
    document.getElementById("Output_Bin").value = string_reversal;


  document.getElementById("Output_Dec").value = outputM;

}

