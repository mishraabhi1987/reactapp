import React,{useState, useEffect} from 'react';
import axio from 'axios';

const Moviesearch = () => {
    const [moviedata, setmoviedata] = useState(
       {
            Actors: "",
            Awards: "",
            Country: "",
            Director: "",
            Genre: "",
            Language: "",
            Metascore: "",
            Plot: "",
            Poster: "",
            Rated: "",
            Ratings: [{Source: "", Value: ""}],
            Released: "",
            Response: "",
            Runtime: "",
            Title: "",
            Type: "",
            Writer: "",
            Year: "",
            imdbID: "",
            imdbRating: "",
            imdbVotes: "",
            totalSeasons: ""
        }
    )
    const [moviename, setmoviename] = useState("");
    const getmoviename = (event) => {
        setmoviename(event.target.value);
    }
    const searcmovie = () => {
        async function getmoviedata(){
            const res = await axio.get(`http://www.omdbapi.com/?t=${moviename}&plot=full&apikey=511b46e`);
            setmoviedata(res.data);
        }
        getmoviedata();
    }
    return(
        <>
            <h1>Movie Search</h1>
            <input type="text" onChange={getmoviename} /><input type="submit"  value="search" onClick={searcmovie} />
           { moviename === "" ? null : <div className="card" style={{width: "14.5rem", padding: "10px"}}>
            <img src={moviedata.Poster} className="card-img-top" alt="..." />
            <div className="card-body" style={{padding: "0px"}}>
                <h6 className="card-title">{moviedata.Title}</h6>
                <h6 className="card-title">{moviedata.Year}</h6>
                <p>{moviedata.Plot}</p>
            </div>
            </div>
            }
        </>
    )

}
export default Moviesearch;

