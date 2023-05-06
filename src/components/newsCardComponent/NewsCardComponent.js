import cardOfNewsStyles from '../newsCardComponent/NewsCardComponent.module.scss'

const CardOfNews = (props) => {
    const allNews = 
    <div>
        Hello
    </div>

    return (
        <div className='newsCard'>
            {props.stateOfNewsCard ? allNews: null}
        </div>
    )
}

export default CardOfNews;