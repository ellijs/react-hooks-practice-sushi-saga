import React, {useState} from "react";

function MoreButton({ renderSushi }) {
  const [ count, setCount ] = useState(4)
  function handleRender() {
    setCount(count + 4)
    renderSushi(count)
  }
  return <button onClick={handleRender}>More sushi!</button>;
}

export default MoreButton;
