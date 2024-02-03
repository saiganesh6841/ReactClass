

import { useEffect } from "react"
import { useState } from "react"



const UseEffectEx2=()=>{

const [count,SetCount]=useState(0)
// const [count1,SetCount1]=useState(0)

useEffect(()=>{
   updateCounterValue()
},[count])

const updateCounterValue=()=>{
    //  SetCount(count+1)
     document.title=`CounterValue ${count} `
}

const handleIncrement=()=>{
    SetCount(count+1)
}
// const handleIncrement1=()=>{
//     SetCount1(count1+1)
// }

    return(
        <>
        <h1>effect {count} </h1>
        <button onClick={handleIncrement}> Click to update count</button>
        {/* <button onClick={handleIncrement1}> Click to update count</button> */}
        </>
    )
}

export default UseEffectEx2