import React, { useEffect, useState, useRef } from "react";
import Dapp from '../../components/Dapp';
import About from '../../components/About';
import '../../App.css';

function Home() {
  return(
  <>
    <About />
    <Dapp />
    </>
  );
}
export default Home;
