const input = document.getElementById("input")
const searchBtn = document.getElementById("searchBtn")
let cityName = document.getElementById("cityName")
let flag = document.getElementById("flag")
let weatherCondition = document.getElementById("weatherCondition")
let description = document.getElementById("description")
const temperature = document.getElementById("temperature")
const clouds = document.getElementById("clouds")
const humidity = document.getElementById("humidity")
const pressure = document.getElementById("pressure")

searchBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    let inputValue = input.value;
    if(inputValue) {
        getWeatherData()
        input.value = "";
    }
   else{
    alert("Please Enter a valid location")
   }
})


const apiKey = "a2727287758750577b102c144e29e1fd"
let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=`+apiKey;


function getWeatherData () {
    fetch(url + "&q=" + input.value) 
    .then(response => response.json())
    .then(data => {
        console.log(data)
        if(data.cod === 200){
            cityName.textContent = data.name;
            flag.src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`;
            weatherCondition.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
            temperature.textContent = `${data.main.temp}°`;
            description.textContent = data.weather[0].description;

            clouds.textContent = `${data.clouds.all}%`
            pressure.textContent = `${data.main.pressure}hPa`
            humidity.textContent = `${data.main.humidity}%`
        }
    })
}