import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";

function UseStateExample() {

  let [currentValue, updateValue] = useState(50);
  const [intervalId, setIntervalId] = useState(null);
  const[changeColor,updateColor]=useState("wite")



  const timer = () => {
    
    let hello= setInterval(()=>{
        updateValue(currentValue=currentValue-1)

        if(currentValue === 0){
          console.log("stoped")
            clearInterval(hello)
        }
        else if(currentValue ===20){
          updateColor("red")
        }
     setIntervalId(hello)
        
    },1000);
    return hello

  };
  


  const stopTimer = () => {

    clearInterval(intervalId);

    console.log("Timer stopped");
  };

  
//   useEffect(() => {
//     return () => {
//       if (intervalId) {
//         clearInterval(intervalId);
//       }
//     };
//   }, [intervalId]);

  return (
    <>
      <h2 style={{color:changeColor}}>Count: {currentValue}</h2>

      <button onClick={timer}>Start Timer</button>

      {/* <button onClick={timer1}>stop</button> */}

      <button onClick={stopTimer}>Stop Timer</button>
    </>
  );
}

export default UseStateExample;
