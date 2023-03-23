import React from 'react';
import { Routes, Route } from 'react-router-dom';
import List from './components/List';
import Map from './components/Map';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/list" element={<List />} />
        <Route path="/map" element={<Map />} />
    </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router;