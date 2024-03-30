import React from 'react';
import Header from "./Components/Header/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
import Contacts from "./Components/Contacts";

function App() {
  return (
    <div className="App">
      <Header/>
        <Contacts/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
