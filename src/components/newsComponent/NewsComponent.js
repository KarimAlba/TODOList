import NewsComponentStyles from './NewsComponent.module.scss'
import mechanic from '../../assets/imgs/mechanics.svg';

const News = (props) => {
    function handleClick(e) {
        e.preventDefault();
        props.getUrl('https://newsdata.io/api/1/news?country=de&apikey=pub_2148842010334e142d800e3d99be32c1e6789');
        if (e.target.nextSibling.style.display == 'flex') {
            e.target.nextSibling.style.display = 'none' 
        } else {
            e.target.nextSibling.style.display = 'flex' 
        }
    }

    function handleBtnClick(e) {
        e.preventDefault();
        const newsCard = e.target.parentNode.parentNode.parentNode.parentNode.children[3];
        if (newsCard.style.display == 'flex') {
            newsCard.style.display = 'none'
        } else {
            newsCard.style.display = 'flex'
        }
        
    }

    return (
        <div className={NewsComponentStyles.modal}>
            <img src={mechanic} onClick={handleClick}/>
            <div className={NewsComponentStyles.openedModal}>
                <button onClick={handleBtnClick}>Show news</button>
            </div>
        </div>
    )
}

export default News;