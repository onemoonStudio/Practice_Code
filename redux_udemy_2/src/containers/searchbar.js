import React , {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{
    constructor(props) {
        super(props);
        
        this.state = { term : "" };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        // console.log(event.target.value);
        this.setState({term :event.target.value});
        // bind 없이 위와 같이 작성한다면 this의 의미가 부정확하다 따라서 에러가 발생함
        // context를 잘 생각해야 한다.

    }

    onFormSubmit(event){
        event.preventDefault();
        // 브라우저가 폼을 제출하는것을 막는다.
        // we need to go and fetch weather data
        this.props.fetchWeather(this.state.term);
        this.setState({term : ''}); 

    }

    render(){
        return(
            <form className='input-group' onSubmit={this.onFormSubmit}>
                <input
                placeholder="Get a five-days forecast in your favorite cities."
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="button" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    };
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather } , dispatch );
}

export default connect(null , mapDispatchToProps)(SearchBar);
// mapDispatchToProps 를 두번째 요소로 전달하기 위해서 첫번째 요소에 null이 들어갔다.
// 리덕스가 스테이트를 유지하고 있으니 , 컨테이너에서 신경쓰지마라