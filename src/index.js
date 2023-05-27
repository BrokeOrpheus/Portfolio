import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AutoScroll from './autoScroll';

import Home from './pages/Home';
import Layout from './pages/Layout';
import Projects from './pages/Projects';

import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <AutoScroll />
    <Routes>
      <Route path='/' Component={Layout}>
        <Route index Component={Home} />
        <Route path='projects' Component={Projects} />
      </Route>
    </Routes>
  </Router>
);