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
            <input type="submit" id={gallery} value={`${gallery} Image Gallery`} className="btn btn-info" style={{marginTop: "20px"}} onClick={galleryevent} />
            </div>
           { gallery === "Show" ? null : <Gallery />}
        </>
    )
}
export default Imagesearch;