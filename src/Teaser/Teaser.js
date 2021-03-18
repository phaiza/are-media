import React from 'react'

const Teaser = (props) => {
    const {teaser} = props;
    return (
        <div>
            <img src={teaser.contentImageUrl}/>
            <h2>{teaser.contentTitle}</h2>
            <p>{teaser.contentSummary}</p>
        </div>
    )
}

export default Teaser
