import NewsCardStyles from '../newsCardComponent/NewsCardComponent.module.scss'
import React, { useState, useEffect } from 'react'

const NewsCard = (props) => {
    let blockOfNews = props.arrOfNews.map(
        news => 
        <h5 key={news.title + String(new Date()) + news.url}>{news.title}</h5>
    )                

    return (
        <div className={NewsCardStyles.newsCard}>
            {props.stateOfNewsCard? blockOfNews: null}
        </div>
    )
}

export default NewsCard;