import React from 'react'
import { useEffect, useState } from 'react'
import {TitleModal} from './Modal'

const Series = () => {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'

  const showData = async () => {
    const res = await fetch(url)
    const data = await res.json()
   
    const filteredSerie = data.entries.filter((serie) => 
    serie.programType == 'series')

    const finalSeries = filteredSerie.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return +1;
      } else if (a.title == b.title) {
        return 0;
      }
    });

    const filterSeries = finalSeries.filter((serie) =>
    serie.releaseYear >= 2010)

    const seriesTwenty = filterSeries.slice(1, 21);

    setSeries(seriesTwenty)
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
    <h2 className='titleSeries' >Popular Series</h2>
    {
    loading ?
    <h3>Loading...</h3>
    :
    <section className='seriesContainer'>
      {series.map((serie) => (
      <div className='printSerie' key={serie.title}>
        <img src={serie.images['Poster Art'].url} alt='Serie poster' />
        <TitleModal item={serie} />
      </div>
      ))}
    </section>
    }
    </>
  );
};

export default Series