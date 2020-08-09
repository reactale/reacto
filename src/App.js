import React, { useState, useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import './assets/lib/bootstrap-4.3.1.min.css'
import './assets/lib/fa-5.10/css/all.min.css'
import './App.css'
import Header from './components/partials/header/Header'
import Routes from './components/common/Routes'
import { subdir } from './components/services/url.service'
// import Footer from './components/partials/footer/Footer'

export const ContextReactoInfo = React.createContext()

function App() {

  const [reactoData, setReactoData] = useState([])
  

  useEffect( () => {
    let reactoInfoIndexUrl = `/${subdir}/data/reacto-infos/index.json`;
    fetch(reactoInfoIndexUrl)
    .then(res => res.json())
    .then(d => {
      // console.log(d)
      setReactoData(d)
    })
  }, [])

  return (
    <div className="App">
      <Router basename="">
        <Header />
        
        <div className="container-fluid main-container">
          <ContextReactoInfo.Provider value={reactoData}>
            <Routes />
          </ContextReactoInfo.Provider>
        </div>
        
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
