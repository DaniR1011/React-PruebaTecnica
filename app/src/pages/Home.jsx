import React from 'react'
import {Link} from 'react-router-dom'
import placeholder from '../assets/placeholder.png'

const Home = () => {
  return (
    <>
        <h2 className='titleHome'> Popular titles</h2>
      <div className='home'>
        <div className='moviesLink'>
          <Link to="/movies">
            <img className='moviesFoto' src={placeholder} alt="Movies logo" />
          </Link>
          <p>Popular Movies</p>
        </div>
        <div className='seriesLink'>
          <Link to="/series">
            <img className='moviesFoto' src={placeholder} alt="Series logo" />
          </Link>
          <p>Popular Series</p>
        </div>
      </div>
    </>
  )
}

export default Home