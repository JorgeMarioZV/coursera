// Step 2: Defining variables and function to calculate area
// -----------------------------------------------------------------------
let length;
let width;

function calculateArea () {
    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);
    // window.console.log(length);
    // window.console.log(width);

    let area = length * width;
    document.getElementById('result').innerHTML = `Tge area of the rectangle is: ${area}`;
}


// Step 3: Perform Git commands
// -----------------------------------------------------------------------
// > git add --a
// > git config --global user.email "you@example.com"
// > git config --global user.name "Your Name"
// > git commit -m "message"
// > git push origin

// Step 4: Check the output
// -----------------------------------------------------------------------
// Using Chrome DevTools console
