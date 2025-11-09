// Practice task
// -----------------------------------------------------------------------
function groceryTracker () {
    grocery1 = parseFloat(document.getElementById("grocery1").value);
    grocery2 = parseFloat(document.getElementById("grocery2").value);
    grocery3 = parseFloat(document.getElementById("grocery3").value);
    window.console.log(grocery1);
    window.console.log(grocery2);
    window.console.log(grocery3);

    let total = grocery1 + grocery2 + grocery3;
    
    document.getElementById("total").innerHTML = `<b style="color: red; font-weight: bolder;">The total amount is: $${total}</b>`;
}