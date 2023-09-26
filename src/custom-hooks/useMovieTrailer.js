import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addMovieTrailer } from "../utils/store/moviesSlice";

const useMovieTrailer = (movieId) => {
const dispatch = useDispatch();
  const getMovieTrailer = async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos',API_OPTIONS)
    const videos = await data.json();
    console.log(videos)
    const trailer_videos = videos.results.filter(video => video.type === "Trailer")
    const trailer = trailer_videos.length? trailer_videos[0]: videos[0]
    dispatch(addMovieTrailer(trailer))
  }
  useEffect(()=>{
    getMovieTrailer()
  },[])
}

export default useMovieTrailer

