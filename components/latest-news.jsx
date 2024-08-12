import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../src/assets/css/latestnews.css';

function LatestNews() {
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/top-headlines', {
                    params: {
                        sources: 'bbc-news',
                        pageSize: 20
                    },
                    headers: {
                        'Authorization': 'Bearer 6193f7fa0a224a299859fb0188d89167' 
                    }
                });
                setNews(response.data.articles);
            } catch (error) {
                setError('Error fetching news: ' + error.message);
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="news-container">
            <h2 style={{ marginTop: '20px' }}>Latest News</h2>
            <div className="news-grid">
                {news.map((article, index) => (
                    <a 
                        key={index} 
                        href={article.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="news-tile"
                    >
                        {article.urlToImage && (
                            <img src={article.urlToImage} alt={article.title} className="news-image" />
                        )}
                        <h3 className="news-title">{article.title}</h3>
                        <p className="news-description">{article.description}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default LatestNews;
