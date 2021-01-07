import React from 'react';
import './news.css'

function NewsArticle({ data }) {
    return (
        <div className="news-content">
            <a href={data.url} target="_blank" rel="noreferrer" alt='article url'>
                <img src={data.urlToImage} alt='article illustration' />
            </a>
            <h3>{data.title}</h3>        
            <span>{data.author}</span>
            <p>{data.description}</p>    
        </div>
    )
}

export default NewsArticle;
