import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
// Render : componentWillMount() -> render() -> componentDidMount()
// Update : componentReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

// 컴포넌트 안에 state가 바뀔때 마다 render가 다시 실행된다.

state = {
  greeting : "Hello !!",
  movies:[
    {
      title : "Matrix" , 
      poster : "http://cfile23.uf.tistory.com/image/2029EC0E4A6ADEBD97C2D0"
    },
    {
      title : "Avatar" , 
      poster : "http://cfile223.uf.daum.net/image/1404A01E4B56E5169732B4"
    },
    {
      title : "Oldboy" , 
      poster : "http://studio.kofic.or.kr/wp-content/uploads/1999/07/%EC%98%AC%EB%93%9C%EB%B3%B4%EC%9D%B4.jpg"
    },
    {
      title : "Star" , 
      poster : "https://i.ytimg.com/vi/pa4IO9NRIQQ/maxresdefault.jpg"
    }
  ]

}

componentWillMount(){
  
}

componentDidMount(){
  // 2초 후에 greeting state 가 hello again으로 바뀜 this.state = 'hello agian' 이렇게 직접 바꾸면 안된다.
  // setTimeout(() =>{
  //   this.setState({
  //     greeting: "hello again !!"
  //   })
  // },2000)

  setTimeout(() => {
    this.setState({
      movies:[
        // 바로 아래 코드를 통해서 이전 영화 리스트를 그대로 두고 바로 뒤에 저것만 추가해라
        // ...this.state.movies,
        {
          title:'Transformer',
          poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9X08dpfhXNtNAE4hxGQ10FZNnxyudhJ6b_lhQSDWAxmBgK6epjA"
        },
        // 이렇게 되는 경우는 상단에 transformer 영화가 추가된다.
        ...this.state.movies
      ]
    })
  }, 1000) 

}


  render() {
    
    return (
      <div className="App">
        {this.state.movies.map((movie , index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
