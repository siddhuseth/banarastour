import React from 'react';
import Home from './home/Home';
import Page2 from './page2/page2';
import Contact from './contact/Contact';

import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/page1" element={<Page2/>}/>
      <Route path="/page3" element={<Contact/>}/>
    </Routes>
    </>
  );
}
