import React from 'react'
import useMovieTrailer from '../custom-hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

const VideoBackground = ({movie_id}) => {
    const trailer = useSelector((store)=>store.movies.movieTrailer);
    useMovieTrailer(movie_id);
  return (
    <div className='w-full'>
        <iframe className='w-full aspect-video' 
        src={"https://www.youtube.com/embed/"+trailer?.key+"?&autoplay=1&mute=1&"}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        ></iframe>
    </div>
  )
}

export default VideoBackground