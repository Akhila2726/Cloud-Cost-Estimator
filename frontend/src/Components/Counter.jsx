import React from "react";

function Counter({ count, setCount }) {
  return (
    <div>
      <label>Number of units </label>
      
      
        <button type="button" onClick={() => setCount(count - 1)} disabled={count <= 0}>-</button>
        <span style={{ margin: "0 10px" }}>{count}</span>
        <button type="button" onClick={() => setCount(count + 1)}>+</button>
      
    </div>
  );
}

export default Counter;
