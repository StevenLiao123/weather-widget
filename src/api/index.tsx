/*
    This module is providing API functions for different requests.
*/
import jsonp from 'jsonp';

// the API call for getting the weather datat based on the coordinators and units
export const reqWeather = (lat: number, long: number, units: string) => {
    return new Promise((resolve, reject) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=5481d01e1f55fc521a219134e8545e8e&units=${units}`;

        // execute jsonp request
        jsonp(url, {}, (error, data) => {
            if (!error) {
                // get the weather data
                const name = data.name;
                const icon = data.weather[0].icon;
                const temp = data.main.temp;
                const windSpeed = data.wind.speed;
                const windDirection = data.wind.deg;
                resolve({ name, temp, icon, windSpeed, windDirection } );
            } else {
                console.log('Get weather failed!');
            }
        });
    });
}
