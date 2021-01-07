import React, { useContext } from 'react';
import { NewsContext } from './NewsContext';
import NewsArticle from './NewsArticle';
import { Card } from 'react-bootstrap';
import Monde from './monde.png';
import Draggable from 'react-draggable';

function News() {
    const { data } = useContext(NewsContext);
    return (
        <div className='news-card'>
            <Draggable>
                <Card style={{ width: '30rem', height:'30em'}}>
                    <Card.Img variant="top" src={Monde} className='monde' style={{ width: '80%'}} />
                    <Card.Body>
                        <Card.Text>
                        {data
                    ? data.articles.map((news) => (
                        <NewsArticle data={news} key={news.url} />

                    ))

                :"Loading"}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Draggable>
        </div>
    )
}

export default News;
