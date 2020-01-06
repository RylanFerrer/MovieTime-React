import React from 'react'

export default function Trailer(props) {
    const {trailer,media} = props
    return (
        <>
        <h1>Trailer</h1>
        {trailer ?
        <div className="resp-container">
            <iframe className="resp-iframe" src={`https://www.youtube.com/embed/${trailer.key}`} allow="encrypted-media" allowFullScreen></iframe>
        </div> : <h3>{`Sorry There are no trailers for: ${media.original_title || media.original_name}`}</h3>}
        </>
    )
}
