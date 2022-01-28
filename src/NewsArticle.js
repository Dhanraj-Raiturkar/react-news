import classes from './NewsArticle.module.css';

const NewsArticle = props => {

    var date = new Date(props.date);

    const openNewTab = (e) => {
        e.preventDefault();
        window.open(props.url, '_blank');
    }

    return <li className={classes.newsArticle}>
        <div className={classes.image}>
            <img src={props.img} />
        </div>
        <div className={classes.info}>
            <h3>{props.title}</h3>
            <p>{date.toLocaleString()}</p>
            <section>{props.content}</section>
            <a href={props.url} onClick={openNewTab}>Read more</a>
        </div>
    </li>
}

export default NewsArticle;