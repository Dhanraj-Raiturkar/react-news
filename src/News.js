import classes from './News.module.css';
import NewsArticle from './NewsArticle';

const News = props => {
    //console.log(props.data[0].title);
    return <ul className={classes.news}>
        {props.data.map((news,index) => 
            <NewsArticle
                key = {index}
                title = {news.title}
                content = {news.content}
                date = {news.publishedAt}
                url = {news.url}
                img = {news.urlToImage}
            />
        )}
    </ul>
}

export default News;