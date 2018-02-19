import React, { Component } from 'react';
import {connect} from 'react-redux';

class Waetherlist extends Component {

    renderWeather(cityData){
        const name = cityData.message;

        return (
            <tr key={name}>
                <td>{name}</td>
            </tr>
        );
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <td>City</td>
                        <td>Temperature</td>
                        <td>Pressure</td>
                        <td>Humidity</td>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
};

function mapStateToProps( {weather} ){
    return { weather };
    // 파라미터가 state 일때 return {weather : state.weather} 와 위의 코드는 동일하다.
    // why using state.weather => see reducers/index -> rootReducer
}

export default connect(mapStateToProps)(Waetherlist);