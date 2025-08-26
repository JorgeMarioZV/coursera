function cel2fahr() {
    var temp_cel = document.getElementById("celsius").value;    
    var temp_fahr = (temp_cel * 9/5) + 32;
    document.getElementById("fahrenheit").value = temp_fahr;
}

function kilo2pound() {
    var weight_kilo = document.getElementById("kilo").value;    
    var weight_pound = weight_kilo * 2.2;
    document.getElementById("pounds").value = weight_pound;
}

function km2mile() {
    var dist_km = document.getElementById("km").value;    
    var dist_mile = dist_km * 0.62137;
    document.getElementById("mile").value = dist_mile;
}