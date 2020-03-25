import React from 'react';

//////////IMPORT BOOTSTRAP STYLESHEET
import 'bootstrap/dist/css/bootstrap.min.css';

//////////IMPORT STYLES
import "./scss/index.scss";


/////////IMPORT COMPONENTS
import Header from "./components/header"




function App() {
  return (
    <div className="App">
      {/* HEADER */}
      <Header />
    </div>
  );
}

export default App;
