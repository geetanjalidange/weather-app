// function addTask() {
//     var taskInput = document.getElementById('taskInput');
//     var taskList = document.getElementById('taskList');


//     //This function is used to check the empty value of the input field
//     if (taskInput.value.trim() === '') {
//         alert('Please enter a task');
//         return;
//     }


//     var li = document.createElement('li');
//     li.innerHTML = `
//         <span>${taskInput.value}</span>
//         <button onclick="editTask(this)">Edit</button>
//         <button onclick="removeTask(this)">Remove</button>
//     `;
//     taskList.appendChild(li);

//     taskInput.value = '';
// }

// function removeTask(button) {
//     var li = button.parentNode;
//     var taskList = document.getElementById('taskList');
//     taskList.removeChild(li);
// }

// function editTask(button) {
//     var li = button.parentNode;
//     var span = li.children[0];
//     var input = document.createElement('input');
//     input.type = 'text';
//     input.value = span.innerHTML;
//     li.insertBefore(input, span);
//     li.removeChild(span);
//     button.innerHTML = 'Save';
//     button.setAttribute('onclick', 'saveTask(this)');
// }


document.addEventListener("DOMContentLoaded", function () {
    const cityInput = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");

    getWeatherBtn.addEventListener("click", function () {
        const city = cityInput.value.trim();
        if (city !== "") {
            getWeather(city);
        }
    });

    function getWeather(city) {
        const key = "34cc012c12e7939bf4f2096b82bfd29f"
        const apiKey = key;
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const temperature = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius
                const description = data.weather[0].description;
                const cityName = data.name;

                const weatherText = `Weather in ${cityName}: ${temperature}°C, ${description}`;
                weatherInfo.textContent = weatherText;
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                weatherInfo.textContent = 'Error fetching weather data. Please try again.';
            });
    }
});
