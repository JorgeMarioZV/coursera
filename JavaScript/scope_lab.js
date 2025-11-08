// Step 5: Scope of variables for function scope
// -----------------------------------------------------------------------

// Glboal Scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
    var blockVar = "I'm a blocked-scoped var";
    let blockLet = "I'm a blocked-scoped let";
    const blockConst = "I'm a blocked-scoped const";
}

window.console.log(globalVar); // Output: "I'm a global variable";
window.console.log(globalLet); // Output: "I'm also global, but scoped with let";
window.console.log(globalConst); // Output: "I'm a global constant";

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
