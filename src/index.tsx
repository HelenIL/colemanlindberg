import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import OwnTheView from './pages/owntheview/index';
import Boys from './pages/boys/index';
import Circus from './pages/circus';
import Header from './components/header/header';
import Home from './pages/home';
import NotFound from './components/subpages/notFound';


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
      <Route path="boys" element={<Boys />}/>
      <Route path="circusofthegrieving" element={<Circus />}/>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
);


