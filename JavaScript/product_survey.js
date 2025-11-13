// Step 2: Defining variables and function
// -------------------------------------------------------------------------------

const submitButton = document.getElementById("submitBtn");

// Alternative 1 - Works!
function submitFeedback () {
    
    const username = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const job = document.getElementById("job").value;
    const designation = document.getElementById("designation").value;
    const productType = document.getElementById("productType").value;
    const feedback = document.getElementById("feedbackTest").value;
    const experience = document.getElementById("experience").value;
    
    // Just for control (down here!)
    // console.log(typeof username);
    // console.log("Value: " + username);
    // console.log("Value: " + document.querySelector("#name").value); //Esta los muestra incluso definiendo variables (username, age, etc.) afuera de la funcion
    
    window.alert ("Thank you for your valauble feedback");    
    
    // Step 3: Display user feedback on webpage
    // --------------------------------------------------------------------------
    document.getElementById("userName").innerHTML = username;
    document.getElementById("userAge").innerHTML = age;
    document.getElementById("userEmail").innerHTML = email;
    document.getElementById("userJob").innerHTML = job;
    document.getElementById("userDesignation").innerHTML = designation;
    document.getElementById("userProductChoice").innerHTML = productType;
    document.getElementById("userFeedback").innerHTML = feedback;
    document.getElementById("userExperience").innerHTML = experience;
    
    document.getElementById("userInfo").style.display = "block";
    
}

// Alternative 1 - Works!
submitButton.onclick = submitFeedback;

// Alternative 2 - Works! (uno la función)
// submitButton.onclick = function submitFeedback () {
    //     window.alert ("Thank you for your valauble feedback");
    // }
    
// Alternative 3 - Works! (Quito el nombre)
// submitButton.onclick = function () {
//     window.alert ("Thank you for your valauble feedback");
// }

// Alternative 4 - Works! (Quito la keyword function y agrego la arrow)
// submitButton.onclick = () => {
//         window.alert ("Thank you for your valauble feedback");
//     }
    
// Alternative 5 - Does NOT Works correctly! It is executeble-self from the begginig not when on-click event! (la pongo en paréntesis y () al final, como función auto-invocable)
// submitButton.onclick = (() => {
//     window.alert ("Thank you for your valauble feedback");
//     } ) ();


// Step 4: Implement key press to submit feedback
// -------------------------------------------------------------------------------
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});


// Step 5: Check the output
// -------------------------------------------------------------------------------
// Using console.log() and the browser Dev tools


// Step 6: Perform Git commands
// -------------------------------------------------------------------------------
/*  > git config --global user.email "you@example.com" 
> git config --global user.name "Your Name"
> git commit -m "message"
> git push origin
*/


// Practice task
// -------------------------------------------------------------------------------
// Code lines were added througout the html and js doc for UserExperience input to be included
