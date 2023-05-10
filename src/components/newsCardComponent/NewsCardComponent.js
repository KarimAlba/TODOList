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
        let apiUrl = 'https://newsdata.io/api/1/news?apikey=pub_2148842010334e142d800e3d99be32c1e6789&q=cryptocurrency';
        axios.get(apiUrl).then((resp) => {
            console.log(resp.data)
            let newsForRender = resp.data.results;
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