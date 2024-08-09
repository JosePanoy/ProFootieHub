import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import LatestNews from '../components/latest-news';
import './App.css';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    switch (location.pathname) {
      case '/teams':
        setCurrentPage('teams');
        break;
      case '/matches':
        setCurrentPage('matches');
        break;
      case '/players':
        setCurrentPage('players');
        break;
      case '/standings':
        setCurrentPage('standings');
        break;
        case '/test':
        setCurrentPage('test');
        break;
      default:
        setCurrentPage('home');
        break;
    }
  }, [location.pathname]);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    navigate(`/${page}`);
  };

  return (
    <>
      <Navbar onNavigate={handleNavigate} />
      <div className="captionbar">
        <p>Welcome to Pro Footie Hub, your go-to source for football updates, live matches, scores, highlights, and much more!</p>
      </div>
      <LatestNews />
    </>
  );
};

export default App;
