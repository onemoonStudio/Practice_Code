import React,{Component} from 'react';

class SearchBar extends Component{

    constructor(props){
        super(props);
        
        this.state = { term : '' };
    }

    render(){
        return (
            <div className='search-bar'>
                <input onChange= { event => this.onChangeInput(event.target.value) }/>
                {/* <div>value of input : {this.state.term}</div> */}
            </div>
        );
    }

    onChangeInput(term){
        this.setState({term});
        this.props.onChangeSearchTerm(term);
    }

    // 이런식으로도 가능하다.
    // <input onChange={this.onChangeInput} /> 일때
    // onChangeInput(event){
    //     console.log(event.target.value);
    // }
}

export default SearchBar;
