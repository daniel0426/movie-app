
import React, { Component } from 'react';
import './app.css';
import axios from "axios";
import Movie from './components/Movie.js';

class App extends Component {
  state  = {
    isLoading: true,
    movies : []
  }
  getMovies = async () => {

    const {data : {data :{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json")
    this.setState({movies, isLoading: false})
  }

  async componentDidMount(){
   this.getMovies();
  }
  render() {
    const {isLoading, movies} = this.state;
    return (
      <div>
        {isLoading ? (
         <div className="loader">
            <span className="loader_text">Loading ...</span>        
        </div> 
        ) : (
        <ul className="movies">
        {movies.map(movie=> (
          <Movie id={movie.id} genres={movie.genres} title={movie.title} year={movie.year} summary={movie.summary} poster ={movie.medium_cover_image}  key={movie.id}/>
        ))}
        </ul>
        )}
          
      </div>
    );
  }
}


export default App;
