import React,{Component} from 'react';

class SearchBar extends Component{

    constructor(props){
        super(props);
        
        this.state = { term : '' };
    }

    render(){
        return (
            <div>
                <input onChange={event => this.setState({term : event.target.value})} />
                <div>value of input : {this.state.term}</div>
            </div>
        );
    }

    // 이런식으로도 가능하다.
    // <input onChange={this.onChangeInput} /> 일때
    // onChangeInput(event){
    //     console.log(event.target.value);
    // }
}

export default SearchBar;
