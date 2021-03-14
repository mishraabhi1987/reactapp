import React from 'react';

const Movie = (props) => {
    return(
        <>
        <div className="container moviesdetails" style={{backgroundColor: "rgb(250 240 240)", border: "1px solid #f3e4e4", padding: "10px", borderRadius: "10px"}}>
        <div className="row">
            <div className="col-3">
                <img src={props.Poster} style={{width: "250px", height: "100%", maxHeight: "300px", borderRadius: "5px"}} />
            </div>
            <div className="col-8">
                <div className="row">
                    <h1 style={{color: "#dc3545", paddingBottom: "20px", paddingLeft: "5px"}}>{props.Title}</h1>
                    <span><b>Year:</b> {props.Year}</span>
                    <span><b>Actors:</b> {props.Actors}</span>
                    <span><b>Genre:</b> {props.Genre}</span>
                    <span><b>Writer:</b> {props.Writer}</span>
                </div>
                <div className="row">
                    <div className="col">
                    <span><b>Released:</b> {props.Released}</span>
                    <span><b>Director:</b> {props.Director}</span>
                    <span><b>Language:</b> {props.Language}</span>
                    <span><b>Country:</b> {props.Country}</span>
                    </div>
                    <div className="col">
                    <span><b>Runtime:</b> {props.Runtime}</span>
                    <span><b>IMDB Rating:</b> {props.imdbRating}</span>
                    <span><b>IMDB Votes:</b> {props.imdbVotes}</span>
                    <span><b>Awards:</b> {props.Awards}</span>
                    </div>
                </div>
                <div className="row">
                    <p>{props.Plot}</p>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default Movie;