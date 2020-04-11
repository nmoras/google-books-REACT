import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import BookSearch from './components/BookSearch';
import Favorites from './components/Favorites';

function App() {
  return (

    <Router>
      <div class="container-fluid">
        <div>
          <NavBar />
            
            <Route exact path={["/"]} component={BookSearch} />
            <Route exact path={["/favorites"]} component={Favorites} />
            {/* <Route exact path={["/contact-me"]} component={ContactMe} /> */}
               
        </div>
      </div>

    </Router>
    
    
  );
}

export default App;
