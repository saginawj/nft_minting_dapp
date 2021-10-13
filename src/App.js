import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
//components related to new look and feel 
import './App.css';
import Home from './components/pages/Home';
import Rarity from './components/pages/Rarity';
import Navbar from './components/Navbar';
import Dapp from './components/Dapp';
import Footer from './components/Footer';
import About from './components/About';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <About />
        <Dapp />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/rarity' component={Rarity} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;