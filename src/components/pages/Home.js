import React, { useEffect, useState, useRef } from "react";
import Dapp from '../../components/Dapp';
import About from '../../components/About';
import Gallery from '../../components/Gallery';
import '../../App.css';

function Home() {
  return(
  <>
    <About />
    <Gallery />
    <Dapp />
    </>
  );
}
export default Home;
