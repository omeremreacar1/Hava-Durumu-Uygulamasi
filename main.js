const searchInput = document.querySelector("#searchInput");
const cityNameUI = document.querySelector("#cityNameUI");
const temperatureUI = document.querySelector("#temperatureUI");
const descriptionUI = document.querySelector("#descriptionUI");

searchInput.addEventListener("keypress", findWeatherInfo);  

const weatherApi =  new WeatherAPI();

function findWeatherInfo(e){
    if(e.key == "Enter"){
        let cityName = searchInput.value.trim();
        let values = weatherApi.getWeatherInfo(cityName);
        clearUI();
        
        values
        .then(response => addInfosToUI(response));
    }
}

function addInfosToUI(values){  
    cityNameUI.textContent = values.name;
    temperatureUI.textContent = `${Math.round(values.main.temp)}°`;
    descriptionUI.textContent = values.weather[0].description;
}

function clearUI(){
    cityNameUI.textContent = "";
    temperatureUI.textContent = "";
    descriptionUI.textContent = "";
}