import React from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './components/layout/Index';
import { Provider } from './context'
import Lyric from './components/tracks/Lyric';


function App() {

  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/lyrics/track/:id" element={<Lyric />} />
            </Routes>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
