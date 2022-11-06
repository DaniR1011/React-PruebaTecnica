import React from 'react'
import { useEffect, useState } from 'react'
import {TitleModal} from './Modal'

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'

  const showData = async () => {
    const res = await fetch(url)
    const data = await res.json()
   
    const filteredMovie = data.entries.filter((movie)=> 
    movie.programType == 'movie')

    const finalMovies = filteredMovie.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return +1;
      } else if (a.title == b.title) {
        return 0;
      }
    });

    setMovies(finalMovies.filter((movie) => 
    movie.releaseYear >= 2010))
  }
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
    showData() 
  }, [])

  return (
    <>
    <h2 className='titleMovies'>Popular Movies</h2>
    {
    loading ?
    <h3>Loading...</h3>
    :
    <section className='moviesContainer'>
      {movies.map((movie) => (
      <div className='printMovie' key={movie.title}>
        <img src={movie.images['Poster Art'].url} alt='Movie poster' />
        <TitleModal item={movie} />
      </div>
      ))}
    </section>
    }
    </>
    
  );
  
};

export default Movies