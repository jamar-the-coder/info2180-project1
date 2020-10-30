/* Add your JavaScript to this file */
"use strict"
document.addEventListener("EventListenerForJavaScript", function(){
	
	const email = document.getElementById('email');
    const submit = document.getElementsByTagName("button")[0];
    const message = document.getElementsByClassName("message")[0];
	
    submit.addEventListener('onclick', function(){
		
        if(email.value == ""){
            message.innerHTML = "Please enter a valid email address."
        }
        else{ 
            message.innerHTML = "Thank you! Your email address", ${email.value}, "has been added to our mailing list!";
        }
		
    });
});