import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import Teams from './assets/pages/teams'
import Matches from './assets/pages/matches'
import Players from './assets/pages/players'
import Standings from './assets/pages/standings'
import TeamInfo from './assets/pages/team-info'
import Test from './assets/pages/test'


import App from './App'
import './index.css'


const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/players" element={<Players />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/test" element={<Test />} />
        <Route path="/team/:teamId" element={<TeamInfo />} />

      </Routes>
    </Router>
  </React.StrictMode>
)
