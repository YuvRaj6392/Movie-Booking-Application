import React from 'react'
import Header from '../../common/header/Header'
import moviesData from '../../common/moviesData'
import artists from '../../common/artists'
import genre from '../../common/genre'
import Detail from '../details/Detail'
// import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import { useState } from 'react'




export default function Home() {
  const [posterUrl,setPosterUrl]=useState("");
  const [movieName,setMovieName]=useState("This is us");
  const [artist,setArtist]=useState("");
const [id,setId]=useState("")

 
  const onFormSubmit=(e)=>{
    e.preventDefault();
    console.log(moviesData)
   console.log(artist);
   console.log(movieName)
   
    for(let i=0;i<moviesData.length;i++)
    {
      // for(let j=0;j<moviesData[i].artists.length;j++)
      // {
      //   if(i===5 && j===1)
      //   {
      //     continue;
      //   }
      //   else
      //   {
         
      //     if(moviesData[i].artists[j].first_name===artist)
      //     {
      //        if(moviesData[i].title===movieName)
      //     {
          
      //       console.log(moviesData[i].artists[j].first_name);

      //       setPosterUrl(moviesData[i].poster_url)
      //       break;
      //     }
      //     }
      //   }
      // }
let m=moviesData[i].title.toLowerCase();
let n=movieName.toLowerCase();

      if(m===n)
      {
        setPosterUrl(moviesData[i].poster_url)
        setId(moviesData[i].id)
      }
      
    }
    
  }
  return (
    <div>
        <Header />

       {
        moviesData.map(ele=>{
            return <span key={ele.id}>
                    <Link to={`/detail/${ele.id}`}><img src={ele.poster_url} alt=""/></Link>
                    
                </span>
        })
       }


       <div style={{marginLeft:"auto",marginRight:"auto",textAlign:"center",marginBottom:"50px"}}>
       Find Movies by
       <form onSubmit={onFormSubmit}>

       <input type="text" placeholder='Movie Name' id='movieName' name='movieName' onInput={e=>setMovieName(e.target.value)} />
       <br />
       <br />

       <input type="text" placeholder='Genre' id='genre' name='genre' />
       <br />
       <br />

       <input type="text" placeholder='Artists' id='artist' name='artist' onInput={e=>setArtist(e.target.value)} />
       <br />
       <br />

       <label htmlFor="">Release Date Start</label>
       <input type="date"  id='releaseDateStart' name='releaseDateStart' />
       <br />
       <br />

       <label htmlFor="">Release Date End</label>
       <input type="date"  id='releaseDateStart' name='releaseDateStart' />
       <br />
       <br />

       <input type="submit" /> 

       </form>


       <div id="details" >
      <Link to={`/detail/${id}`}><img src={posterUrl} alt="" style={{width:"400px"}} /></Link>
       </div>
       </div>
       <div style={{textAlign:"center"}}>
       <Link to='/detail'> <button>Details</button></Link>
       
       </div>

      
      
   

       
    </div>
  )
}
