import {React,useEffect,useState} from 'react'
import './Banner.css'
import instance from './instance'
import requests from './requests'


function Banner() {
    const base_url = "https://image.tmdb.org/t/p/original/";
    const [movie,setMovie]=useState({})
    const fetchData=async()=>{
     const response=await instance.get(requests.fetchTrending)

    //  console.log(response.data.results[
    //     Math.floor(Math.random()*response.data.results.length)
    //  ]);

    // console.log(movie);

     setMovie(response.data.results[
        Math.floor(Math.random()*response.data.results.length)
     ]);
    }
    // create function 
    function truncate(str,n){
        return str?.length>n?str?.substr(0,n-1)+'...':str
    }
    
    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div className='banner'
    style={{
    backgroundSize:'cover',
    backgroundImage:`url(${base_url}${movie.backdrop_path})`,    
    }}
    >
        <div className='banner-content'>
        <h1 className='title'>{movie.name}</h1>
            <h1 className='title'>{movie.title}</h1>
            <h4 className='overview'>
            {truncate(movie?.overview,200)}</h4>
        </div>
    </div>
  )
}

export default Banner 