// API_KEY here
// API_URL here

const searchBox = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const res = await fetch(API_URL + city + `&appid=${API_KEY}`);
    let data = await res.json();

    if (res.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km / h";

    if (data.weather[0].main == 'Clouds') {
        weatherIcon.src = 'Assets/clouds.png';
    }
    else if (data.weather[0].main == 'Clear') {
        weatherIcon.src = 'Assets/clear.png';
    }
    else if (data.weather[0].main == 'Rain') {
        weatherIcon.src = 'Assets/rain.png';
    }
    else if (data.weather[0].main == 'Drizzle') {
        weatherIcon.src = 'Assets/drizzle.png';
    }
    else if (data.weather[0].main == 'Mist') {
        weatherIcon.src = 'Assets/mist.png';
    }
    document.querySelector('.weather').style.display = "block";
    document.querySelector('.error').style.display = "none";
}
searchButton.addEventListener('click', () => {
    checkWeather(searchBox.value);
});

