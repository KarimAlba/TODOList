import cardOfNewsStyles from '../cardOfNewsComponent/CardOfNewsComponent.module.scss'

const CardOfNews = (props) => {
    console.log(props.news)
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