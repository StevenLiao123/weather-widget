import React from 'react';
import { reqWeather } from '../../api/index';

import './widget.css';

// define types for props
export interface WidgetProps {
    title: string;
    unit: string;
    showWind: string;
}

// define types for state
export interface WidgetState {
    title: string;
    unit: string;
    showWind: string;
    name: string;
    icon: string;
    temp: number;
    windSpeed: number;
    windDirection: number;
    lat: number;
    long: number;
}

class Widget extends React.Component<WidgetProps, WidgetState> {
    constructor(props: WidgetProps) {
        super(props);
        this.state = {
            name: '',
            icon: '',
            title: "",
            unit: "",
            showWind: "",
            temp: 0,
            windSpeed: 0,
            windDirection: 0,
            lat: 0,
            long: 0,
        };
    }

    // update the state based on the props
    static getDerivedStateFromProps(nextProps: WidgetProps, prevState: WidgetState) {
        if (nextProps !== prevState) {
            return {
                title: nextProps.title,
                unit: nextProps.unit,
                showWind: nextProps.showWind,
            };
        }                  
        // Return null if the state hasn't changed
        return null;
    }

    componentDidMount() {
        this.getWeatherByCoordinates();
    }

    componentDidUpdate(prevState: WidgetState) {
        if (this.props.unit !== prevState.unit) {
          this.getWeatherByCoordinates();
        }
    }

    getWeatherByCoordinates ()  {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude,
                }, () => this.getWeatherData());
            });
        } else {
            alert("Sorry, the broswer does not support navigator.geolocation.");
        }
    }

    getWeatherData =  async () => {
        //@ts-ignore
        const { name, temp, icon, windSpeed, windDirection } = await reqWeather(this.state.lat, this.state.long, this.state.unit);
        this.setState({ name, temp, icon, windSpeed, windDirection });
    }

    toTextualDescription(windDirection: number) {
        if ( windDirection>337.5 ) return 'N';
        if ( windDirection>292.5 ) return 'NW';
        if ( windDirection>247.5 ) return 'W';
        if ( windDirection>202.5 ) return 'SW';
        if ( windDirection>157.5 ) return 'S';
        if ( windDirection>122.5 ) return 'SE';
        if ( windDirection>67.5 ) return 'E';
        if ( windDirection>22.5 ) return 'NE';
        return 'N';
    }

    convertShowWindToBoolean(showWind: string) {
        if (showWind === "true") {
            return true
        } else {
            return false
        }
    }

    componentWillUnmount() {
        this.getWeatherByCoordinates();
    }

    render() {
        const { title, unit, showWind, name, icon, temp, windSpeed, windDirection } = this.state;
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        return (
            <div className="weather-widget">
                <div className="weather-widget-card">
                    <div className="weather-widget-card-title">
                        <h3>{title}</h3>
                    </div>
                    <div className="weather-widget-card-details">
                        <div className="weather-widget-card-details-icon">
                            <img src={iconUrl} alt="weather"/>
                        </div>
                        <div className="weather-widget-card-details-text">
                            <p>{name}</p>
                            {unit === "metric" ? <p className="weather-widget-card-details-text-temperature">{temp.toFixed(0)} &#8451;</p> : <p className="weather-widget-card-details-text-temperature">{temp.toFixed(0)} &#8457;</p>}
                            <p className={`weather-widget-card-details-text-wind ${!this.convertShowWindToBoolean(showWind) && "weather-widget-disabled"}`}><b>Wind</b> &nbsp;{this.toTextualDescription(windDirection)} {(windSpeed).toFixed(0)}{this.state.unit === "metric" ? "m/s" : "km/h"} </p> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Widget;