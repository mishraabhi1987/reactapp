import React from "react";

const Movie = (props) => {
  return (
    <>
      <div
        className="container moviesdetails"
        style={{
          backgroundColor: "rgb(250 240 240)",
          border: "1px solid #f3e4e4",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        <div className="row">
          <div className="col-sm-11 col-md-2 col-lg-3">
            <img
              src={props.Poster}
              alt={props.Title}
              style={{
                width: "250px",
                minHeight: "200px",
                height: "100%",
                maxHeight: "300px",
                borderRadius: "5px",
              }}
            />
          </div>
          <div className="col-sm-12 col-md-10 col-lg-8">
            <div>
              <h1
                style={{
                  color: "#dc3545",
                  paddingBottom: "20px",
                  paddingLeft: "5px",
                }}
              >
                {props.Title}
              </h1>
              <span>
                <b>Year:</b> {props.Year}
              </span>
              <span>
                <b>Actors:</b> {props.Actors}
              </span>
              <span>
                <b>Genre:</b> {props.Genre}
              </span>
              <span>
                <b>Writer:</b> <label>{props.Writer}</label>
              </span>
            </div>
            <div className="row">
              <div className="col-sm-5 col-md-5">
                <span>
                  <b>Released:</b> {props.Released}
                </span>
                <span>
                  <b>Director:</b> {props.Director}
                </span>
                <span>
                  <b>Language:</b> {props.Language}
                </span>
                <span>
                  <b>Country:</b> {props.Country}
                </span>
              </div>
              <div className="col-sm-6 col-md-6">
                <span>
                  <b>Runtime:</b> {props.Runtime}
                </span>
                <span>
                  <b>IMDB Rating:</b> {props.imdbRating}
                </span>
                <span>
                  <b>IMDB Votes:</b> {props.imdbVotes}
                </span>
                <span>
                  <b>Awards:</b> {props.Awards}
                </span>
              </div>
            </div>
            <div>
              <p>{props.Plot}</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};
export default Movie;
