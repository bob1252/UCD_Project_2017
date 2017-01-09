var M = "";
var C = "";
var K = "";
var D = "";
var keyword = "HAHAHAYOUJUSTGORPRANKED";
var L = 26;
var asciioffset = 65;

M = prompt("Please type in a message");

//M = "ATTACKATDAWN";

M = spacesBeGone(M);

K = generateEncryptionKey(M, keyword);

C = encrypt_ (M, K);

D = retuenClearText(C,K);

console.log(K);
console.log(C);
console.log(M);
console.log(D);

function spacesBeGone (message_){
 
	var mwos = "";
	for (var position = 0; position < message_.length ; position ++)
		
		if (message_.charAt(position) != ' '){
		
				mwos = mwos.concat(message_.charAt(position) );
				
		}
	return mwos.toUpperCase();
 }
 
 function generateEncryptionKey (message_, keyword_){
	
	var key = "";
	var kwl = keyword_.length
	var kwu = keyword_.toUpperCase();
	
	for (var position = 0 ; position < message_.length ; position++){
	
		key = key.concat(kwu.charAt (position % kwl));
		//console.log(key);
	
	}
 
	return key;
 
 }
 
 
 function encrypt_(message_, key_){

 var encrypted = "";
 
	for (var position = 0 ; position < message_.length ; position++){ 
		var lettercode = message_.charCodeAt(position);
		var keycode = key_.charCodeAt(position);
		
		encrypted =
		encrypted.concat(		
			String.fromCharCode (((lettercode + keycode) % L) + asciioffset));
			//console.log(encrypted);
			}
 
 return encrypted;
 
 }
 
 function retuenClearText (ciphertext_,key_){
 
	var decrypted = "";
	
	for (var position = 0 ; position < ciphertext_.length ; position++){
	
		var cipherpos = ciphertext_.charCodeAt(position) - asciioffset;
		var keypos = key_.charCodeAt(position) - asciioffset;
		var clearpos = (cipherpos - keypos);
		
		if (clearpos <= 0){
		
			clearpos += L;
			}
			
			clearpos = clearpos %L;
			
			decrypted =
			decrypted.concat(
				String.fromCharCode (clearpos + asciioffset));
		
		
			
	}
	
	return decrypted;

 
 }
 