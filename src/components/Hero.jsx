import React, { useContext, useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import Loading from './Loading';
import UserContext from './UserContext';
import LoadingBar from "react-top-loading-bar";
import SkeletonLoader from './SkeletonLoader';

const Hero = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const { color } = useContext(UserContext);
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      setProgress(30);
      try {
        let url = "https://newsapi.org/v2/everything?q=russia&sortBy=publishedAt&apiKey=e676b9e10ec241b5aca9a5a064c5d81b";
        setProgress(50);

        const response = await fetch(url);
        const data = await response.json();

        setArticles(data.articles);
        setProgress(70);
      } catch (error) {
        console.error("Error fetching news:", error);
        
      } finally {
        setProgress(100);
        setLoading(false);
        setisLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={` ${color ? "bg-black" : "bg-white"}`}>
      <LoadingBar
        color={color ? 'white' : 'black'}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        
        style={{ backgroundColor: 'red', zIndex: 10 }} 
      
      />
      <div className='w-11/12 m-auto'>
        <div className={` p-3 mb-3 text-center flex flex-col justify-center m-auto ${color ? "text-white" : "text-black"}`}>
          <h1 className=''>Home/News</h1>
          <h1 className='text-2xl font-bold'>Category: News</h1>
          <div className='m-auto'>
          {loading && <Loading />}
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
      {isLoading ? (
        // Render skeleton loader while loading
        Array.from({ length: 9 }).map((_, i) => <SkeletonLoader key={i} />)
      ) : (
        // Render actual news items
        articles.map((news, i) =>
          news.urlToImage == null ? null : (
            <NewsItem
              key={i}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
              author={news.author}
              source={news.source.name}
              date={news.publishedAt}
            />
          )
        )
      )}
    </div>
      </div>
    </div>
  );
};

export default Hero;
