const apikey = "0cfd495e77ab3aa7aed3a94fa738ba4b"

const cityInput = document.querySelector("#city-input")
const searchbtn = document.querySelector("#search")

const cityElement = document.querySelector('#city')
const tempElement = document.querySelector('#temperatura span')
const descElement = document.querySelector('#description')
const weatherIconElement = document.querySelector('#weather-icon')
const countryElement = document.querySelector('#country')
const umidityElement = document.querySelector('#umidity span')
const windElement = document.querySelector('#wind span')

//função

const getweatherdata = async (city) => {


    const apiweatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=${apikey}`

    const res = await fetch(apiweatherURL)
    const data = await res.json()
    console.log(data)



    return data
}

const showWeatherData = async (city) => {
    const data = await getweatherdata(city)

    cityElement.innerText = data.name
    tempElement.innerText = parseInt(data.main.temp)
    weatherIconElement.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    const countryCode = data.sys.country.toLowerCase()
    const countryFlagURL = `https://flagpedia.net/data/flags/normal/${countryCode}.png`;
    countryElement.setAttribute('src', countryFlagURL)
    windElement.innerText = `${data.wind.speed}km/h`
    umidityElement.innerText = `${data.main.humidity}%`
    descElement.innerText = data.weather[0].description

    const body = document.querySelector('body');
    const temperature = data.main.temp;


    if (temperature >= 30) {
        body.style.background = 'url(https://images.pexels.com/photos/1533483/pexels-photo-1533483.jpeg?auto=compress&cs=tinysrgb&w=1900)';
    } else if (temperature >= 20) {
        body.style.background = 'url(https://images.pexels.com/photos/2586067/pexels-photo-2586067.jpeg?auto=compress&cs=tinysrgb&w=1900)';
    } else if (temperature >= 10) {
        body.style.background = 'url(https://images.pexels.com/photos/1460230/pexels-photo-1460230.jpeg?auto=compress&cs=tinysrgb&w=1900)';
    } else {
        body.style.background = 'url(https://images.pexels.com/photos/6526177/pexels-photo-6526177.jpeg?auto=compress&cs=tinysrgb&w=1900)';
    }






}


//evento



searchbtn.addEventListener('click', async (e) => {
    e.preventDefault()

    const city = cityInput.value

    await showWeatherData(city)

    document.getElementById('weather-data').style.display = 'block'
})

document.addEventListener("keypress", async (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();

        const city = cityInput.value

        await showWeatherData(city)

        document.getElementById('weather-data').style.display = 'block'
    }
});



