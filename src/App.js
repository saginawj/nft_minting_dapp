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
import Minter from './components/Minter';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/rarity' component={Rarity} />
        </Switch>
        <Dapp />
        <Minter />
        <Footer />
      </Router>
    </>
  );
}

export default App;