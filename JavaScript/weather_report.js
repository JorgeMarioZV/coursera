document
    .getElementById('weatherForm')
    .addEventListener('submit',showWeatherDetails);

// This below code prevents the default behavior of an event, such as form submission, within a function named showweatherDetails.
function showWeatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById('city').value || "medellin"; //Brillante este codigo de ChatGPT
    // if (document.getElementById('city').value !== "")
    //     city = document.getElementById('city').value;
    // else
    //     city = "medellin";
    
    const apiKey = '9a717418f9dec9fad661b8e587e959fc'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    // const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=medellin&appid=9a717418f9dec9fad661b8e587e959fc&units=metric';
    // Original apiURL form website: https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'
    console.log(apiUrl);
    
    debugger;
    
    fetch(apiUrl)
        .then((response) => {
            // console.log(response.json()); // Si dejo esto queda mal
            return response.json();
        })
        .then((data) => {
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = 
                // `<p>Message: ${data.message}</p>`;
                `<h2>weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch((error) => {
            console.error('Error fetching weather :',error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = 
                `<p>Failed to fetch weather. Please tyr again.</p>`;
                // <p>Message: ${data.message}</p>`;
        });
}



// Just here below for learning...

    // (method) Promise<Response>
    //     .then<void, never>(
    //         onfulfilled?: (
    //             (value: Response) => void | PromiseLike<void>) 
    //             | null | undefined, 
    //         onrejected?: (
    //             (reason: any) => PromiseLike<never>) 
    //             | null | undefined
    //     ): Promise<void>

// Attaches callbacks for the resolution and/or rejection of the Promise.
    // @param onfulfilled — The callback to execute when the Promise is resolved.
    // @param onrejected — The callback to execute when the Promise is rejected.
    // @returns — A Promise for the completion of which ever callback is executed.