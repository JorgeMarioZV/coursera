// Step 2: Defining variables and if else statement for userRole and accessLevel
// -------------------------------------------------------------------------------

let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);


// Step 3: Defining variables and nested if…else statementd for isLoggedIn and userMessage
// -------------------------------------------------------------------------------
let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);


// Step 4: Defining variables and switch statement for userType and userCategory
// -------------------------------------------------------------------------------
let userType = "admin";
let userCategory;

switch (userType) {
    case "admin" :
        userCategory = "Administrator";
        break;
    case "manager" :
        userCategory = "Manager";
        break;
    case "subscriber" :
        userCategory = "Subscriber";
        break;
    default :
        userCategory = "Unknown";
        break;
}
console.log("User Category:", userCategory);


// Step 5: Use ternary operator for isAuthenticated and authenticationStatus
// -------------------------------------------------------------------------------
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";

console.log("Authentication Status:", authenticationStatus);


// Step 6: Perform Git commands
// -------------------------------------------------------------------------------
/*  > git add --a
    > git config --global user.email "you@example.com"
    > git config --global user.name "Your Name"
    > git commit -m "message"
    > git push origin
*/


// Practice Task
// -------------------------------------------------------------------------------
let companyRole = "employee";
let dietaryService;
switch (companyRole) {
    case "employee":
        dietaryService = "Authorized to have access to \"Dietary Service\"";
        break;
    case "enrolled":
        dietaryService = "Authorized to have access to \"Dietary Service\" and One-on-One Interaction with Dietician";
        break;
   case "subscriber":
        dietaryService = "Authorized to have partial access to facilitate \"Dietary Service\" only";
        break;
    default:
        dietaryService = "You need to enroll or subscribe firt to avil this facility";
        break;
}
console.log("Service Available:", dietaryService);
