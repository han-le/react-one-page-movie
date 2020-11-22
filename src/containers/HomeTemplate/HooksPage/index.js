//Hooks: useState. Ap dung cho function component
//useEffect: ap dung lam lifecylces
//useCallback: ap dung chong Child Compoennt Render lai
//useMemo: luu lai nhuwng gifthay doi

import React, { useState, useEffect, useCallback, useMemo } from "react";

import Child from "./child";

export default function HooksPage() {
  const [number, setNumber] = useState(5);

  const handleAdd = () => {
    console.log("add");
    setNumber(number + 5);
  };

  //   useEffect(() => {}, []);
  /*Neu nhu tham so thu hai la mang rong thi no la componentDiDMount tuong ung ben class
   * Chay 1 lan duy nhat
   */
  useEffect(() => {
    console.log(
      "useEffect: Chay 1 lan (= componentDidMount). Cho du thay doi state van khong chay lai"
    );
  }, []);

  //Chay at the start of the component + Neu nhu state thay doi thi useEffect rerun (= componentDidUpdate)
  useEffect(() => {
    console.log(
      "Chay at the start of the component + Neu nhu state thay doi thi useEffect rerun (= componentDidUpdate)"
    );
  }, [number]);

  //   useEffect(() => {
  //     let interval = setInterval(() => {
  //       console.log("Show up for each second");
  //     }, 1000);
  //     return () => {
  //       clearInterval(interval);
  //       console.log("Run at the end of the component");
  //     };
  //   }, []);

  const showNumber = () => {
    console.log("Parent Prop tp Child");
  };

  const showNumberCallBack = useCallback(showNumber, []);

  //Ham tang so
  const numberUp = () => {
    let i = 0;
    while (i < 5) {
      i++;
      console.log(i);
    }
    return i;
  };

  //   const numberUpMemo = userMemo(() => {
  //     numberUp(), [];
  //   });

  return (
    <div className="container">
      <h3>HooksPage: Function component</h3>
      <h5>Number: {number} </h5>
      <button type="button" class="btn btn-primary" onClick={handleAdd}>
        +5
      </button>
      <hr></hr>
      <Child showNumber={showNumberCallBack} />
      <h5>Number Up: {numberUp()}</h5>
    </div>
  );
}
