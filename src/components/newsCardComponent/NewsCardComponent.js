import NewsCardStyles from '../newsCardComponent/NewsCardComponent.module.scss'
import React, { useState, useEffect } from 'react'
import axios, { all } from 'axios'

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
        let apiUrl = 'https://newsapi.org/v2/everything?q=tesla&from=2023-04-10&sortBy=publishedAt&apiKey=1361bc18264e42b0ba06f94e0084c7b7';
        axios.get(apiUrl).then((resp) => {
            let newsForRender = resp.data.articles;
            let renderNews = newsForRender.slice(firstIndex, firstIndex + 2);
            setArrOfNews(renderNews);
        });
    }               

    return (
        <div className={NewsCardStyles['news-card']}>
            {arrOfNews.map(news => 
                <h5 key={news.title + String(new Date()) + news.url}>
                    {news.title}
                </h5>
            )}
        </div>
    )
}

export default NewsCard;