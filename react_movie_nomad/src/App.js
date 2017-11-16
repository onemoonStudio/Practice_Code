import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
// Render : componentWillMount() -> render() -> componentDidMount()
// Update : componentReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

// 컴포넌트 안에 state가 바뀔때 마다 render가 다시 실행된다.

  state = {}

  componentWillMount(){
    this._getMovies();
  }

  componentDidMount(){

  }

  // 언더스코어는 리액트에 함수가 많기 때문에 나의 함수를 구분하기 위해서 사용함.
  _renderMovies = ()=>{
    const movies = this.state.movies.map(movie => {
      return <Movie 
      title={movie.title_english} 
      poster={movie.medium_cover_image} 
      key={movie.id} 
      genres = {movie.genres} 
      synopsis = { movie.synopsis}
      />
    })
    return movies;
  }

  _getMovies = async () =>{
    const movies = await this._callApi()
    // await mode -> 끝나기를 기다린다 (성공하기를 기다리는게 아니다.)
    // async 가 있어야 await 가 작동을 한다.
    this.setState({
      movies
    });
  }

  _callApi = () => {
    return fetch("https://yts.ag/api/v2/list_movies.json?sort_by=rating")
    .then( result => result.json() )
    .then( json => json.data.movies )
    .catch(err => console.log(err) )

    // promise - > then을 통해서 결과물이 나오고 catch를 통해서 error 를 잡는다
    // 지금은 readablestream으로 바디가 나오는데 이거를 json 형태로 바꿔줘야 한다.
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
