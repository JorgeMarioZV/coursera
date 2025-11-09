// Step 2: Defining variables and functions
// --------------------------------------------------------------------

let count = 0; // Initialize count to 0

function increaseCount() {
    count++;  // Increment the count by 1
    displayCount();  // Display the count
    checkCountValue(); // Check count value and display messages
}

function displayCount() {
    document.getElementById("countDisplay").innerHTML = count;
}

// Step 3: Defining variables and functions to show
// --------------------------------------------------------------------
function checkCountValue() {
    if (count === 10) {
        window.alert("Your Instagram post gained 10 followrs! Congratulations!");
    } else if (count === 20) {
        window.alert("Your Instagram post gained 20 followrs! Keep ti up!");
    }
}


// Step 4: Check the output
// --------------------------------------------------------------------
// Using Chrome DevTools Console


// Step 5: Perform Git commands
// --------------------------------------------------------------------
// > git add --a
// > git config --global user.email "you@example.com"
// > git config --global user.name "Your Name"
// > git commit -m "message"
// > git push origin



// Practice task
// --------------------------------------------------------------------
function resetCount() {
    count = 0;
    displayCount();
    window.alert("Followers count has been reset!");
}