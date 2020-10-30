/* Add your JavaScript to this file */

"use strict"
document.addEventListener("DOMContentLoaded", function(){
	
    const submit = document.getElementsByTagName('button')[0];
	const message = document.getElementsByClassName('message')[0];
    var email = document.getElementById('email');
	
    submit.addEventListener('click', function(event){
        console.log(email.value);
        event.preventDefault();
		
        if(email.value == ""){
            message.innerHTML = "Please enter a valid email address."
        }
        else{ 
            message.innerHTML = "Thank you! Your email address, ${email.value}, has been added to our mailing list!";
        }
    });
	
});