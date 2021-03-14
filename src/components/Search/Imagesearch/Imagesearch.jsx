import React, {useState} from 'react';
import SearchResult from './SearchResult';
import Gallery from './gallery';

const Imagesearch = () => {

    // Search and Display Image
    const [searchtext, setsearchtext] = useState("");
    const findsearch = (event) => {
        const getsearchtext = event.target.value;
        setsearchtext(getsearchtext);
    }

    // State to show gallery
    const [gallery, setgallery] = useState("Show");
    const galleryevent = (e) => {
        if(e.target.id === "Show"){
            setgallery("Hide");
        }
        else {
            setgallery("Show");
        }
    }
    return(
        <>
            <div style={{width: "50%", margin: "0 auto", padding: "10px", textAlign: "center"}}>
            <input type="text" style={{border: "2px solid #17a2b8"}} className="form-control" value={searchtext} onChange={findsearch}  placeholder="Type to search images (eg: nature, sea, sky, burger)"></input>
            <br/><hr />
            {searchtext === "" ? null : <SearchResult name={searchtext} />}
            <button id={gallery} className="btn btn-info" style={{marginTop: "20px"}} onClick={galleryevent}>{gallery} Image Gallery<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-down-short" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"/>
</svg></button>
            </div>
           { gallery === "Show" ? null : <Gallery />}
        </>
    )
}
export default Imagesearch;