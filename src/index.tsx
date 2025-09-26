import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import OwnTheView from './pages/owntheview/index';
import MakingMyNamePage from './pages/makingmyname/index';
import Header from './components/header/header';
import Home from './pages/home';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 <BrowserRouter>
   <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="albums" >
      <Route path="owntheview" element={<OwnTheView />}/>
      <Route path="makingmyname" element={<MakingMyNamePage />}/>
      </Route>
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  </BrowserRouter>,
);


