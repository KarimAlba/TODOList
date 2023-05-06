import HeaderComponentStyles from './HeaderComponent.module.scss'
import mechanic from '../../assets/imgs/mechanics.svg';
import React, { useState } from 'react'

const Header = (props) => {
    const [isOpenedBtn, setIsOpenedBtn] = useState(false);

    function handleImgClick(e) {
        e.preventDefault();
        setIsOpenedBtn(!isOpenedBtn);
    }

    const [isOpenedNewsCard, setIsOpenedNewsCard] = useState(false);

    function handleBtnClick(e) {
        e.preventDefault();
        setIsOpenedNewsCard(!isOpenedNewsCard)
        props.getStateOfNewsCard(!isOpenedNewsCard);
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