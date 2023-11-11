class WeatherAPI {
    constructor(){
        this.baseURL = "https://api.openweathermap.org/data/2.5/weather";
        this.APIkey = "9bb370d98ac7a007abc3f36ee09a28bd";
    }

    async getWeatherInfo(cityName){
        const data= await(await fetch(`${this.baseURL}?q=${cityName}&appid=${this.APIkey}&units=metric&lang=tr`)).json();
        
        return data;
    }
}