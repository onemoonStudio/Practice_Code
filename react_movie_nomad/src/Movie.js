import React from 'react';
import propTypes from 'prop-types';
import './Movie.css'; 

// class Movie extends Component{

//   static propTypes = {
//     title: propTypes.string.isRequired,
//     poster: propTypes.string.isRequired
//   }

//   render(){
//     return(
//       <div>
//         <MoviePoster poster={this.props.poster}/>
//         <h1>{this.props.title}</h1>
//       </div>
//     )
//   }
// }

function Movie({title,poster,genres,synopsis}){
  return(
        <div className="Movie">
          <div className = "Movie_Columns">
            <MoviePoster poster={poster} alt={title}/>
          </div>
          <div className = "Movie_Columns">
            <h1>{title}</h1>
            <div className="Movie_Genres">
              {genres.map( (genre, index) => <MovieGenre genre={genre} key={index} />)}
            </div>
            <p className="Movie_Synopsis">
              {synopsis}
            </p>
          </div>
        </div>
  )
}

// dumb component
function MoviePoster({poster,alt}){
  return(
    <img src={poster} alt={alt} title={alt} className="Movie_Poster" />
  )
}

function MovieGenre({genre}){
  return (
    <span className="Movie_Genre">{genre} </span>
  ) 
}


Movie.propTypes = {
  title : propTypes.string.isRequired,
  poster : propTypes.string.isRequired,
  genres : propTypes.array.isRequired,
  synopsis : propTypes.string.isRequired

}
MoviePoster.propTypes = {
  poster : propTypes.string.isRequired,
  alt:propTypes.string.isRequired
}
MoviePoster.propTypes = {
  genre:propTypes.string.isRequired
}


export default Movie;
