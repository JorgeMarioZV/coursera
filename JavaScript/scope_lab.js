/*
// Step 1: Setting up the environment
// -----------------------------------------------------------------------
// > git clone https://github.com/JorgeMarioZV/coursera.git


// Step 2: Defining variables with let, var, and const
// -----------------------------------------------------------------------
// Glboal Scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
    // Glboal Scope
    var blockVar = "I'm a blocked-scoped var";
    let blockLet = "I'm a blocked-scoped let";
    const blockConst = "I'm a blocked-scoped const";
}


// Step 3: Scope of variables at a global level
// -----------------------------------------------------------------------
// Glboal Scope
window.console.log(globalVar); // Output: "I'm a global variable";
window.console.log(globalLet); // Output: "I'm also global, but scoped with let";
window.console.log(globalConst); // Output: "I'm a global constant";


// Step 4: Scope of variables for block scope
// -----------------------------------------------------------------------
// Block Scope
window.console.log(blockVar);
//window.console.log(blockLet); // Throws ReferenceError
// window.console.log(blockConst); // Throws ReferenceError


// Step 5: Scope of variables for function scope
// -----------------------------------------------------------------------
function show() {
    var functionVar = "I'm a blocked-scoped var";
    let functionLet = "I'm a blocked-scoped let";
    const functionConst = "I'm a blocked-scoped const";
}
show();

window.console.log(functionVar); // Throws ReferenceError
window.console.log(functionLet); // Throws ReferenceError
window.console.log(functionConst); // Throws ReferenceError


// Step 6: Perform Git commands
// -----------------------------------------------------------------------
/*  > git config --global user.email "you@example.com" 
> git config --global user.name "Your Name"
> git commit -m "message"
> git push origin
*/


// Practice task
// -----------------------------------------------------------------------
{
    var myVar = "My variable myVar";
    let myLet = "My variable myLet";
    const myConst = "My variable myConst";

    var myVar = "My new variable myVar2";
    // let myLet = "My new variable myLet2"; // Throws SyntaxError --> Redeclaration not allowed
    myLet = "My new variable myLet2"; // Good! Not redeclared but new value reassigned
    // const myConst = "My new variable myConst2"; // Throws SyntaxError --> Redeclaration not allowed
    
    window.console.log(myVar);
    window.console.log(myLet);
    window.console.log(myConst);
}

window.console.log("* "+myVar);
// window.console.log("* "+myLet); // Throws ReferenceError --> Not declared
// window.console.log("* "+myConst); // Throws ReferenceError --> Not declared
