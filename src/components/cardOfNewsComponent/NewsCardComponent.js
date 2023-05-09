import cardOfNewsStyles from './CardOfNewsComponent.module.scss'

const CardOfNews = (props) => {
    const allNews = props.news.map( 
        news => 
        <span key={news}>{news}</span>
    )

    return (
        <div className='newsCard'>
            {allNews}
        </div>
    )
}

export default CardOfNews;