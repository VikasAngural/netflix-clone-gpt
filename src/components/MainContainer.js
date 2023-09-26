import React from 'react'
import getNowPlayingMovies from '../custom-hooks/useNowPlayingMovies'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  getNowPlayingMovies()
  const movies = useSelector((store)=>store.movies.nowPlayingMovies)
  // console.log(movies)
  if(!movies) return;

  const {original_title,overview,id} = movies[4]

  return (
    <div>
    <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movie_id={id}/>
    </div>
  )
}

export default MainContainer;