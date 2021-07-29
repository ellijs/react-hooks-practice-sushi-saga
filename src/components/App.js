import React from "react";
import { useState, useEffect } from 'react'
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [ sushis, setSushis ] = useState([])
  const [ startIndex, setStartIndex ] = useState(0)
  const [ plates, setPlates ] = useState([])
  const [ money, setMoney ] = useState(50)

  useEffect(()=> {
    fetch(API)
      .then(res => res.json())
      .then(setSushis)
  },[])

  function renderSushi(count) {
    setStartIndex(count)
  }

  function fourSushis() {
    if ( money < 0 ) {
      return []
    } else {
      const renderFourSushi = [ ...sushis ]
      return renderFourSushi.slice(startIndex, startIndex + 4)
    }
  }

  function renderPlate(plate) {
    const newPlates = [ ...plates ]
    newPlates.push(plate)
    setPlates(newPlates)
  }

  function getPrice(price) {
    setMoney(money - price)
  }

  return (
    <div className="app">
      <SushiContainer sushis={fourSushis()} renderSushi={renderSushi} renderPlate={renderPlate} getPrice={getPrice}/>
      <Table plates={plates} money={money}/>
    </div>
  );
}

export default App;
