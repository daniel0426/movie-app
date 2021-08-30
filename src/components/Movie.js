import React from 'react';
import "./Movie.css";

const Movie = ({id, year, title, summary, poster, genres}) => {
        
    const summaryParser = (title)=> {
      if(title.length > 50){
          title = title.slice(0,50).concat('...');
          return title
      }
      return title
    }

    return <li className="movie">
        <img src={poster} alt={title} />
        <div className="data">
            <h3 className="movie_title">{title}</h3>
            <ul className="genres">{genres.map((genre, index) => (<li className="genre" key={index}>{genre}</li>))}
            </ul>
            <h5 className="movie_year">{year}</h5>
            <p className="movie_summary">{summaryParser(summary)}</p>
           
            
        </div>
    </li>
    
    
};

export default Movie;