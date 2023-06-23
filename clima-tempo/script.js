const apikey = "0cfd495e77ab3aa7aed3a94fa738ba4b"
const apiCountryURL = "https://flagsapi.com/flat/64.png/"
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



    return data
}

const showWeatherData = async (city) => {
    const data = await getweatherdata(city)

    cityElement.innerText = data.name
    tempElement.innerText = parseInt(data.main.temp)
    weatherIconElement.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
    countryElement.setAttribute('src', apiCountryURL + data.sys.country)
    windElement.innerText = `${data.wind.speed}km/h`
    umidityElement.innerText = `${data.main.humidity}%`
    descElement.innerText = data.weather[0].description

    const body = document.querySelector('body');
    const temperature = data.main.temp;


    if (temperature >= 30) {
        body.style.background = 'url(https://images.pexels.com/photos/1533483/pexels-photo-1533483.jpeg?auto=compress&cs=tinysrgb&w=1700)';
    } else if (temperature >= 20) {
        body.style.background = 'url(https://images.pexels.com/photos/2586067/pexels-photo-2586067.jpeg?auto=compress&cs=tinysrgb&w=1700)';
    } else if (temperature >= 10) {
        body.style.background ='url(https://images.pexels.com/photos/1460230/pexels-photo-1460230.jpeg?auto=compress&cs=tinysrgb&w=1700)' ;
    } else {
        body.style.background = 'url(https://images.pexels.com/photos/6526177/pexels-photo-6526177.jpeg?auto=compress&cs=tinysrgb&w=1700)';
    }






}


//evento



searchbtn.addEventListener('click', async (e) => {
    e.preventDefault()

    const city = cityInput.value

    showWeatherData(city)


    //console.log(city)
})
document.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        var bnt = document.querySelector("#search");
        bnt.click();

        document.getElementById('weather-data').style.display = 'block'
    }
})



/*cityInput.addEventListener('keyup', e => {
    if (e.code === 'Enter'){
        const city = e.target.value
        showWeatherData(city)
    }
})*/

//classList.remove('hide') = para remover uma class pelo java script