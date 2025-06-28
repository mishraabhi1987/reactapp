import React, { useState } from "react";
import img from "./Pics/search.png";
import Movie from "./Search/Moviesearch/Moviesearch";
import Image from "./Search/Imagesearch/Imagesearch";

const Search = () => {
  const [searchstate, setsearchstate] = useState("Image");

  return (
    <>
      <div
        className="searchpage col-sm-9 col-md-9 col-lg-6"
        style={{ margin: "0 auto", padding: "20px", textAlign: "center" }}
      >
        <h3
          style={{
            fontWeight: "Bold",
            color: "#00000",
            fontFamily: "Russo One",
          }}
        >
          <img
            src={img}
            alt="Search"
            style={{ width: "50px", height: "100%" }}
          />{" "}
          My Search
        </h3>
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
          <label className="btn btn-secondary active" style={{ margin: "0px" }}>
            <input
              type="radio"
              name="options"
              id="Image"
              onClick={() => setsearchstate("Image")}
            />{" "}
            Image
          </label>
          <label className="btn btn-secondary" style={{ margin: "0px" }}>
            <input
              type="radio"
              name="options"
              id="Movie"
              onClick={() => setsearchstate("Movie")}
            />{" "}
            Movie
          </label>
        </div>
        <hr />
      </div>
      {searchstate === "Movie" ? <Movie></Movie> : <Image></Image>}
    </>
  );
};
export default Search;
