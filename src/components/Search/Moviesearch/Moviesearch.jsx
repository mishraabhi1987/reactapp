import React,{useState, useEffect} from 'react';
import axio from 'axios';
import Movie from './Movie';

const Moviesearch = () => {
    const [moviedata, setmoviedata] = useState(
       {Actors: "", Awards: "", Country: "", Director: "", Genre: "", Language: "", Metascore: "", Plot: "", Poster: "", Rated: "", Ratings: [{Source: "", Value: ""}],
        Released: "", Response: "", Runtime: "", Title: "", Type: "", Writer: "", Year: "", imdbID: "", imdbRating: "", imdbVotes: "", totalSeasons: ""
        }
    )
    const [moviename, setmoviename] = useState("");
    const getmoviename = (event) => {
        setmoviename(event.target.value);
    }
    const searcmovie = () => {
        async function getmoviedata(){
            const res = await axio.get(`https://www.omdbapi.com/?t=${moviename}&plot=full&apikey=511b46e`);
            if(res.data.Response != "False"){
                setmoviedata(res.data);
                setdisplay("block");
            }
            else{
                setdisplay("error");
            }
        }
        getmoviedata();
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            searcmovie();
        }
    }
    const [display, setdisplay] = useState("none");
    return(
        <>
            <div style={{width: "50%", margin: "0 auto", padding: "10px", textAlign: "center"}}>
            <input type="text" style={{border: "2px solid #dc3545", display: "inline-table", width: "80%", height: "40px", marginBottom: "20px",}} className="form-control" onChange={getmoviename} onKeyDown={handleKeyDown} placeholder="Type to search movies (eg: spiderman, batman, avengers)"></input>
            <button type="button" className="btn btn-danger" style={{width: "10%", marginTop: "-3px", marginLeft: "-5px"}} onClick={searcmovie}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg></button>
            <hr/>
            </div>
            {display === "error" ? <div className="alert alert-danger" role="alert" style={{textAlign: "center", maxWidth: "500px", margin: "0 auto"}}>Sorry, No Data Found</div> : null}
            {display === "none" || display === "error" ? null :
           <Movie 
            Actors= {moviedata.Actors}
            Awards= {moviedata.Awards}
            Country= {moviedata.Country}
            Director= {moviedata.Director}
            Genre= {moviedata.Genre}
            Language= {moviedata.Language}
            Metascore= {moviedata.Metascore}
            Plot=  {moviedata.Plot}
            Poster= {moviedata.Poster}
            Rated= {moviedata.Rated}
            Released= {moviedata.Released}
            Response= {moviedata.Response}
            Runtime= {moviedata.Runtime}
            Title= {moviedata.Title}
            Type= {moviedata.Type}
            Writer= {moviedata.Writer}
            Year= {moviedata.Year}
            imdbID= {moviedata.imdbID}
            imdbRating= {moviedata.imdbRating}
            imdbVotes= {moviedata.imdbVotes}
            totalSeasons= {moviedata.totalSeasons}
           ></Movie>
            }
        </>
    )

}
export default Moviesearch;

