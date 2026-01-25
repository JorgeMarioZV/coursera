let testText = "The quick brown fox jumps over the lazy dog.";
let sartTime, endTime;

function startTest() {
    // Set the test text
    document.getElementById("inputText").value = testText;
    
    // Reset user input and output
    let userInput = document.getElementById("userInput");
    userInput.value = "";
    userInput.readOnly = false;
    userInput.focus();
    // userInput.disabled = false;
    
    document.getElementById("output").innerHTML = "";
    
    // Start timer
    startTime = new Date().getTime();
    // document.getElementById("startTime").innerHTML = `Start Time: ${sartTime} ms`;
    // ${new Date(sartTime).toLocaleTimeString()}
}

function endTest() {
    endTime = new Date().getTime();

    // Disable user input
    document.getElementById("userInput").readOnly = true;

    // Calculate time elapsed and words per minute (WPM)
    var timeElapsed = (endTime - startTime) / 1000; // in seconds
    var userTypedText = document.getElementById("userInput").value;

    // Split the text using regex to count words correctly
    var typedWords = userTypedText.trim().split(/\s+/).filter((word) => 
        word.length > 0     // word !== ""
    ).length;
    var typedChars = userTypedText.length;

    var wpm = 0; // Default value WPM to 0
    if (timeElapsed !==0  && !isNaN(typedWords) && typedWords > 0 && userTypedText === testText) {
        wpm = Math.round(typedWords/timeElapsed * 60);
        //     wpm = (typedWords.length / timeElapsed) * 60;
    }

    // Display the results 
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = 
        "<h2>Typing Test Results</h2>" +
        "<p>Ttotal Length: "+ typedChars + "</p>" +
        "<p>Words Typed: "+ typedWords + "</p>" +
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words Per Minute (WMP): "+ wpm + "</p>";
}

