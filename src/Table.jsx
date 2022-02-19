import { useState } from "react";
import React from "react";

const Table = () => {
  const [num, setNum] = useState(2);

  const clickHandle = () => {
    for (let i = 0; i < 10; i++) {
      setNum(i * num);
      // console.log(setNum);
      document.write(setNum.parseInt);
    }
  };
  return (
    <>
      <h1>Table</h1>
      <button onClick={clickHandle}>ClickMe</button>
    </>
  );
};
export default Table;
