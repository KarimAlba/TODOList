import HeaderComponentStyles from './HeaderComponent.module.scss'
import mechanic from '../../assets/imgs/mechanics.svg';
import React, { useState } from 'react'

const Header = (props) => {
    const [isOpenedBtn, setIsOpenedBtn] = useState(false);

    const handleImgClick = (e) => {
        e.preventDefault();
        setIsOpenedBtn(!isOpenedBtn);
    }

    const handleBtnClick = (e) => {
        e.preventDefault();
        props.getStateOfNewsCard();
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