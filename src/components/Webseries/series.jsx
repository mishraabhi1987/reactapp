import React from 'react';
import Movie from '../../data/netflix';
import Card from './card';

const Series = () => {
    return (
        Movie.map((val) =>
            <div className="card-row" key={val.id}>
                <Card 
                    imgurl = {val.imgurl} 
                    title = {val.title}  
                    year = {val.year} 
                    url = {val.url} 
                />
            </div>
        )
    )
}

export default Series