import React from 'react';

const card = (props) => {
    return(
        <>
        <div className="webseries-card">
            <div className="card" style={{width: "14.6rem"}}>
                <img alt={props.title} src={props.imgurl} className="card-img"/>
                <div className="card-details">
                    <h6 className="card-title">{props.title}</h6>
                    <span>Year: {props.year}</span>
                </div>
                <a href={props.url} target="_blank" rel="noreferrer" className="watchlink">Watch Now</a>
            </div>
        </div>
        </>
    )
}
export default card;