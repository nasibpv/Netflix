import {React,useEffect,useState} from 'react'
import instance from './instance'
import './Row.css'

function Row({title,fetchUrl,isPoster}) {

  const base_url = "https://image.tmdb.org/t/p/original/";

  const [movies,setMovies]=useState([])

  // api call 
  const fetchData=async()=>{
    const response=await instance.get(fetchUrl)
    setMovies(response.data.results)
  }
  // console.log(movies);

  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className='movie-row'>
          {
            movies.map(movie=>(
              <img src={`${base_url}${isPoster?movie.poster_path:movie.backdrop_path}`} 
              className={`movie-img ${isPoster && 'posterMovie'}`} />
            ))
          }
        </div>
    </div>
  )
}

export default Row