import NewsCardStyles from '../newsCardComponent/NewsCardComponent.module.scss'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const NewsCard = (props) => {
    const [arrOfNews, setArrOfNews] = useState([]);

    useEffect( () => {
        let index = 0;
        setInterval ( () => {
                sendRequest(index);
                index += 2;
            }, 2000) 
    }, [])

    const sendRequest = (firstIndex) => {
        let apiUrl = 'https://jsonplaceholder.typicode.com/comments';
        axios.get(apiUrl).then((resp) => {
            let newsForRender = resp.data;
            let renderNews = newsForRender.slice(firstIndex, firstIndex + 2);
            setArrOfNews(renderNews);
        });
    }               

    return (
        <div className={NewsCardStyles['news-card']}>
            {arrOfNews.map(news => 
                <h5 key={news.id + String(new Date()) + news.email}>
                    {news.name}
                </h5>
            )}
        </div>
    )
}

export default NewsCard;