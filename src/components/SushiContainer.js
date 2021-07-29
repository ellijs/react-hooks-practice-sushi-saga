import React from "react";
import Sushi from './Sushi.js'
import MoreButton from "./MoreButton";

function SushiContainer({ sushis, renderSushi, renderPlate, getPrice }) {
  const renderSushis = sushis.map((sushi) => <Sushi key={sushi.id} sushi={sushi} renderPlate={renderPlate} getPrice={getPrice}/>)
  return (
    <div className="belt">
      {renderSushis}
      <MoreButton renderSushi={renderSushi}/>
    </div>
  );
}

export default SushiContainer;
