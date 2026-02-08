// const option = document.querySelector('input[name="option"]:checked');
const weatherInfo = document.getElementById("weatherInfo");
const option = document.querySelectorAll('input[name="option"]');
const city_data = document.getElementById("city-data");
const coords_data = document.getElementById("coords-data");
const apiKey = '9a717418f9dec9fad661b8e587e959fc'; // Replace 'YOUR_API_KEY' with your actual API key
// "long": -75.5636,"lat":6.2518

option.forEach(radio_button => {
    radio_button.addEventListener('change', () => {
        city_data.style.display = "none";
        coords_data.style.display = "none";

        if (radio_button.value === "city") {
            city_data.style.display = "block";
        } else if (radio_button.value === "coords") {
            coords_data.style.display = "block";
        }
    });
});

// Codigo Alternativo al de arriba
// const div1 = document.getElementById("div1");
// const div2 = document.getElementById("div2");

// radios.forEach(radio => {
//     radio.addEventListener("change", () => {
//         // ocultar ambos
//         div1.classList.add("hidden");
//         div2.classList.add("hidden");

//         // mostrar el que corresponde
//         if (radio.value === "div1") {
//             div1.classList.remove("hidden");
//         } else if (radio.value === "div2") {
//             div2.classList.remove("hidden");
//         }
//     });
// });

document
    .getElementById('weatherForm')
    .addEventListener('submit',showWeatherDetails);

// This below code prevents the default behavior of an event, such as form submission, within a function named showweatherDetails.
function showWeatherDetails(event) {
    event.preventDefault();
    
    let apiUrl = "";
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption && selectedOption.value === "city") {
        const city = document.getElementById('city').value || "medellin"; //Brillante este codigo de ChatGPT (Default to Medellin)
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        // const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=medellin&appid=9a717418f9dec9fad661b8e587e959fc&units=metric';
        //     apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`; // No se para que el encodeURIComponent
        // Original apiUrl form website: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'
    } else if (selectedOption && selectedOption.value === "coords") {
        const latitude = document.getElementById("latitude").value;
        const longitude = document.getElementById("longitude").value;
        apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        //     apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${encodeURIComponent(latitude)}&lon=${encodeURIComponent(longitude)}&appid=${apiKey}&units=metric`; // Nose porque el encodeURIComponent
    } else {
        weatherInfo.innerHTML = `<p>Please select a search option and provide input.</p>`;
        return;
    }
    
    console.log(apiUrl);
    debugger;
    
    fetch(apiUrl)
        .then((response) => {
            // console.log(response.json()); // Si dejo esto queda mal
            return response.json();
        })
        .then((data) => {
            // const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = 
                // `<p>Message: ${data.message}</p>`;
                `<h2>weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch((error) => {
            console.error('Error fetching weather :',error);
            // const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = 
                `<p>Failed to fetch weather. Please tyr again.</p>`;
                // <p>Message: ${data.message}</p>`;
        });
}