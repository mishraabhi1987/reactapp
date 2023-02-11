import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Gallery = () =>  {
    const [wallpapers, setwallpapers] = useState(
        [{author: "", download_url: "", height: "", id: "", url: "", width: ""}]
    )
    useEffect(() => {
        async function getwallpapers(){
            const res = await axios.get("https://picsum.photos/v2/list");
            setwallpapers(res.data);
        }
        getwallpapers();
    }, []);

    return(
        <div className="imagegallery flex">
            {     wallpapers.map((val, index) => {
                   return (
                    <div key={index} className="card" style={{width: "14.5rem", padding: "10px"}}>
                    <img src={val.download_url} className="card-img-top" alt="..." />
                    <div className="card-body" style={{padding: "0px"}}>
                        <h6 className="card-title">Author: {val.author}</h6>
                        <a href={val.download_url} className="btn btn-outline-info" rel="noreferrer" target="_blank">Download</a>
                    </div>
                    </div>
                   )
                 })
            }
            </div>
    )
}
export default Gallery;