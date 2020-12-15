import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/lib/bootstrap-4.3.1.min.css'
import './assets/lib/fa-5.10/css/all.min.css'
import './App.css'
import Header from './components/partials/header/Header'
import Routes from './components/common/Routes'
import Footer from './components/partials/footer/Footer'

function App() {
  return (
    <div className="App">
      <Router basename="">
        {/* <Header /> */}

        <div className="main-container">
          <Routes />
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
