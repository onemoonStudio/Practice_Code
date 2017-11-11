import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
// Render : componentWillMount() -> render() -> componentDidMount()
// Update : componentReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

// 컴포넌트 안에 state가 바뀔때 마다 render가 다시 실행된다.

state = {}

componentWillMount(){
  
}

componentDidMount(){
  fetch('https://yts.ag/api/v2/list_movies.json?sort_by=rating');
}

// 언더스코어는 리액트에 함수가 많기 때문에 나의 함수를 구분하기 위해서 사용함.
_renderMovies = ()=>{
  const movies = this.state.movies.map((movie,index) => {
    return <Movie title={movie.title} poster={movie.poster} key={index}/>
  })
  return movies; 
}

  render() {
    
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
