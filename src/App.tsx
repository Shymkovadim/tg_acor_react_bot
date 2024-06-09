import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import StartPage from './pages/startPage/StartPage';
import AllTires from './pages/allTires/AllTires';
import CreateTire from './pages/createTire/CreateTire';
import FilterTires from './pages/filterTires/FilterTires';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/all" element={<AllTires />} />
            <Route path="/create" element={<CreateTire />} />
            <Route path="/filter" element={<FilterTires />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
