import React from 'react';

const MediaHeader = (props) => {
    const {rating, title, genres,backdrop} = props
    return (
        <div className = "movie-page__header">
        <img alt = {title} className = "movie-page__header-img" src = {backdrop} />
        <div className = "movie-page__header-overlay">
            <div className = "movie-page__header-overlay-content">
                <h3 className = "movie-page__header-overlay-content-score">{`${rating}/10`}</h3>
                <h2 className = "movie-page__header-overlay-content-title">{title}</h2>
                <ul className = "movie-page__header-overlay-content-genres">
                  {genres.map((genre,index) => {
                    return <li className = "movie-page__header-overlay-content-genres-item" key = {index}>{`  ${genre.name} |`}</li>
                  })}
                </ul>
            </div>
        </div>
    </div>
    );
}

export default MediaHeader;
