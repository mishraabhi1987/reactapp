import React, {useState} from 'react';
import img from './Pics/search.png';
import Movie from './Search/Moviesearch/Moviesearch';
import Image from './Search/Imagesearch/Imagesearch';

const Search = () => {
   const [searchstate, setsearchstate] = useState("Movie");

    return(
        <>
            <div style={{width: "50%", margin: "0 auto", padding: "20px", textAlign: "center"}}>
            <h3 style={{fontWeight: "Bold", color: "#00000", fontFamily: "Russo One"}}><img src={img} style={{width: "50px", height: "100%"}}/> My Search</h3>
            <div class="btn-group btn-group-toggle" data-toggle="buttons">
                <label class="btn btn-secondary active" style={{margin: "0px"}}>
                    <input type="radio" name="options" id="Movie" autocomplete="off" checked onClick={() => setsearchstate("Movie")}/> Movie
                </label>
                <label class="btn btn-secondary" style={{margin: "0px"}}>
                    <input type="radio" name="options" id="Image" autocomplete="off" onClick={() => setsearchstate("Image")}/> Image
                </label>
            </div>
            <hr/>
            </div>
            {searchstate === "Movie" ? <Movie></Movie> : <Image></Image>}
        </>
    )
}
export default Search;