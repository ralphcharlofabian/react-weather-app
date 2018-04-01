import React from 'react';

class Weather extends React.Component{


    render() {
        return(
            <div className='weather__info'>
                {this.props.cityName ? <p className='weather__key'>    City : <span> {this.props.cityName} </span> </p> : null}
                {this.props.temperature ? <p className='weather__key'>    Temperature : <span> {this.props.temperature} degree farenheit </span></p> : null}
                {this.props.humidity ? <p className='weather__key'>    Humidity : <span>{this.props.humidity} </span></p> : null}
                {this.props.description ? <p className='weather__key'>    Condition : <span> {this.props.description} </span></p> : null}
                {this.props.visibility ? <p className='weather__key'>    Visibility : <span> {this.props.visibility} </span></p> : null}
                {this.props.pressure ? <p className='weather__key'>    Pressure : <span> {this.props.pressure} </span></p> : null}
                {this.props.windSpeed ? <p className='weather__key'>    WindSpeed : <span> {this.props.windSpeed} </span></p> : null}
                {this.props.error ? <p className='weather__key'> <span> {this.props.error} </span> </p> : null}
            </div>
        )
    }
}

export default Weather;