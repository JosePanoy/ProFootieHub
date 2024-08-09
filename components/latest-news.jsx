import React, { useEffect, useState } from 'react';
import '../src/assets/css/latestnews.css';
import axios from 'axios';

function LatestNews() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/everything', {
                    params: {
                        q: 'La Liga OR Bundesliga OR "English Premier League" OR UEFA OR FIFA OR World Cup soccer',
                        apiKey: '6193f7fa0a224a299859fb0188d89167',
                        pageSize: 18,
                    },
                });


                const filteredArticles = response.data.articles.filter(article =>
                    article.title && article.urlToImage && article.description
                );
                setNews(filteredArticles);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

    return (
        <>
            <h2 style={{ marginTop: '20px', textAlign: 'center' }}>Latest Soccer News</h2>
            <div className="news-grid">
                {news.map((article, index) => (
                    <div key={index} className="news-card">
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            <img src={article.urlToImage} alt={article.title} className="news-image" />
                            <h3 className="news-title">{article.title}</h3>
                            <p className="news-description">{article.description}</p>
                        </a>
                    </div>
                ))}
            </div>
        </>
    );
}

export default LatestNews;
