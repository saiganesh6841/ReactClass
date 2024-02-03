import React,{ useState } from "react"

const ButtonCircles=()=>{
    
    const intial=[]
    const[currentValue,updateValue]=useState(intial)
    // let [defaultColor,changeColor]=useState(false)

    // const[firstColor,secondColor]=useState("black")
    
    

    const colorChange=(index)=>{
    //    debugger;
        updateValue((value)=>{
            let val=[...value]
            // console.log(val)
            // console.log(index)
            val[index]=!val[index]
            return val
        })
    //    console.log(updateValue) 
    }

    const increment=()=>{
        updateValue(currentValue=>[...currentValue,true])
   }

    return(
        <>
        <button onClick={increment}>Add circles</button>
        <h1>total circles {currentValue.length}</h1>
        
        
        {currentValue.map((value,ind)=>(
            <React.Fragment key={ind}>
                  <h1 style={{border:"5px solid black", borderRadius:"50%",height:"100px",width:"100px", background:!value?"black":"white"}} onClick={()=>colorChange(ind)}  ></h1>
            </React.Fragment>
        ))}
        
        </>
    )
}
export default ButtonCircles;

