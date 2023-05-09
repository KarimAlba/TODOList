import HeaderComponentStyles from './HeaderComponent.module.scss'
import mechanic from '../../assets/imgs/mechanics.svg';
import React, { useState } from 'react'
import axios, { all } from 'axios'

const Header = (props) => {
    const [isOpenedBtn, setIsOpenedBtn] = useState(false);
    const [isOpenedNewsCard, setIsOpenedNewsCard] = useState(false);

    function handleImgClick(e) {
        e.preventDefault();
        setIsOpenedBtn(!isOpenedBtn);
        setIsOpenedNewsCard(false);
        props.getStateOfNewsCard(false);
    }

    function handleBtnClick(e) {
        e.preventDefault();
        setIsOpenedNewsCard(!isOpenedNewsCard);
        props.getStateOfNewsCard(!isOpenedNewsCard);
        if (isOpenedNewsCard == false) {
            var index = 0;
            var newsLine = setInterval ( () => {
                sendRequest(index);
                index += 2;
            }, 2000) 
        } else {
            clearInterval(newsLine);
        }
    }

    function sendRequest(firstIndex) {
        let apiUrl = 'https://newsapi.org/v2/everything?q=tesla&from=2023-04-09&sortBy=publishedAt&apiKey=1361bc18264e42b0ba06f94e0084c7b7';
        axios.get(apiUrl).then((resp) => {
            let newsForRender = resp.data.articles;
            let renderNews = newsForRender.slice(firstIndex, firstIndex + 2);
            props.getNews(renderNews);
            console.log(firstIndex);
        });
    }

    return (
        <div className={HeaderComponentStyles.modal}>
            <img src={mechanic} onClick={handleImgClick}/>
            <div className={HeaderComponentStyles.openedModal}>
                {isOpenedBtn ? <button onClick={handleBtnClick}>Show news</button>: null}
            </div>
        </div>
    )
}

export default Header;