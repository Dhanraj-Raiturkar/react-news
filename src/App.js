import Header from "./Header";
import News from './News'
import React,{useState, useEffect, useCallback} from "react";

function App() {

  // const inshorts= require('inshorts-api');

  // var options = {
  //   lang: 'language',
  //   category: 'category',
  //   numOfResults: 5
  // }
   
  // inshorts.get(options, function(result){
  //   console.log(result);
  // });

  const [news, setNews] = useState([]);

  const fetchNews = useCallback(async () => {
    const response = await fetch('https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=061a4ff026d44d488358222b08620cca');
    const data = await response.json();
    if(response.status===200){
      setNews(data.articles);
    }
    console.log(data.articles);
  }, []);


  useEffect(() => {
    fetchNews();
  }, [fetchNews]);


  return (
    <div className="App">
      <Header />
      <News data={news}/>
    </div>
  );
}

export default App;
