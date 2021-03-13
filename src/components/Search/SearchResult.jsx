import React from 'react';

const SearchResult = (props) => {
    return(
        <>
            <img src={`https://source.unsplash.com/1600x900/?${props.name}`} alt={props.name} style={{width: "80%", height: "100%", padding: "10px", border: "1px solid #ccc"}}/>
        </>
    )
}
export default SearchResult;