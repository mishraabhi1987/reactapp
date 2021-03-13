import React, {useState} from 'react';
import SearchResult from '../Search/SearchResult';
import Gallery from './gallery';
import img from '../Pics/search.png';

const Search = () => {
    const [searchtext, setsearchtext] = useState("");
    const findsearch = (event) => {
        const getsearchtext = event.target.value;
        setsearchtext(getsearchtext);
    }
    return(
        <>
            <div style={{width: "50%", margin: "0 auto", padding: "20px", textAlign: "center"}}>
            <h3 style={{fontWeight: "Bold", color: "#007bff", fontFamily: "fantasy"}}><img src={img} style={{width: "50px", height: "100%"}}/> My Search</h3>
            <hr /><br/>
            <input type="text" style={{border: "2px solid #007bff"}} className="form-control" value={searchtext} onChange={findsearch}  placeholder="Type to search images (eg: nature, sea, sky, burger)"></input>
            <br/><hr />
            {searchtext === "" ? null : <SearchResult name={searchtext} />}
            </div>
            <Gallery />
        </>
    )
}
export default Search;