import React, { useEffect, useState } from 'react'
import moviesData from '../../common/moviesData';
import YouTube from "react-youtube";
import {Link, useParams} from 'react-router-dom';

export default function Detail() {
 const {id}=useParams();
    const[posterUrl,setPosterUrl]=useState("");
    const [title,setTitle]=useState("");
    const [genre,setGenre]=useState("");
    const [duration,setDuration]=useState("");
    const opts = {
        height: "300",
        width: "700",
        playerVars: {
          autoplay: 1,
        },
      };
     const [trailerUrl,setTrailerUrl]=useState("")
    useEffect(()=>{

      for(let i=0;i<moviesData.length;i++)
      {
        if(moviesData[i].id===id)
        {
            setPosterUrl(moviesData[i].poster_url);
        setDuration(moviesData[i].duration);
        setTitle(moviesData[i].title);
       setGenre(moviesData[i].genres)
       setTrailerUrl(moviesData[i].trailer_url)
        }
      }



    
    },[])
 
  return (
    <div>
    <Link to='/'><button>Back</button></Link>
        <div>
            <img src={posterUrl} alt="" style={{width:"400px"}} height={400} />
        </div>
        <div>
            {title}
        </div>
        <div>
            {genre}
        </div>
        <div>
            {duration}
        </div>
        
       
        <div>
        <YouTube
                videoId={trailerUrl.split("?v=")[1]}
                opts={opts}
                
              />
        </div>
       
    </div>
  )
}
