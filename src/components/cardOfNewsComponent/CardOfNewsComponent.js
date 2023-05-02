import cardOfNewsStyles from '../cardOfNewsComponent/CardOfNewsComponent.module.scss'

const CardOfNews = (props) => {
    const allNews = props.news.map( 
        news => 
        <span key={news + String(new Date())}>{news}</span>
    )

    return (
        <div className='newsCard'>
            {allNews}
        </div>
    )
}

export default CardOfNews;