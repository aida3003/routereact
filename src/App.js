import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Accueil from "./pages/Accueil/Accueil";
import Contact from "./pages/Contact/Contact";
import Presentation from "./pages/Presentation/Presentation";
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Fragment>
      <Router>
      <Routes>


<Route path='/' element={<Accueil/>}/>
<Route path='/accueil' element={<Accueil/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/presentation' element={<Presentation/>}/>
</Routes></Router> 
   
    </Fragment>
  );
}

export default App;
