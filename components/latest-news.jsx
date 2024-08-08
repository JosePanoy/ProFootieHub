import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../src/assets/css/latestnews.css';

const LatestNews = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('/api/news', {
                    headers: { 'X-Auth-Token': import.meta.env.VITE_FOOTBALL_API_ORG }
                });
                setNews(response.data.articles);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };
        fetchNews();
    }, []);

    return (
        <div className="news-container">
            {news.length > 0 ? (
                news.map((article, index) => (
                    <div key={index} className="news-item">
                        <div className="news-image">
                            <img src={article.urlToImage} alt={article.title} />
                        </div>
                        <div className="news-content">
                            <h2>{article.title}</h2>
                            <p>{article.description}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No news available.</p>
            )}
        </div>
    );
};

export default LatestNews;
