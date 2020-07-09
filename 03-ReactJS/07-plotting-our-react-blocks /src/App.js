import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';


function App() {
  return (
    <div className="container">
      <div className="header">
        <Header />
      </div>

      <div className="row">
          <div className="col col-nav">
          <div class="three-col__title">
              <Navigation />
          </div>
      </div>

          <div className="col col-main">
           <div class="three-col__title">
              <Main />
            </div>
            <div class="three-col__title col-subcontents">
              <div className="col col-subcontents"><SubContents /> </div>
              <div className="col col-subcontents"><SubContents /> </div>
              <div className="col col-subcontents"><SubContents /> </div>
            </div>
            <div className="col-advert">
              <Advertisement />
            </div>
          </div>
      </div>

        
        
        
        

    </div>
  
  );
}

export default App;