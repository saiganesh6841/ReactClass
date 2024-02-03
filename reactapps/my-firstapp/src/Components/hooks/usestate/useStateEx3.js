import React,{ useState } from "react"


const UseStateExample3=()=>{

    const [circle,updateCircle]=useState([])
    // const [cir,updateCir]=useState(circle)

    const addcircles = (event) => {
        const newValue = Number(event.target.value); 
        updateCircle([...circle, newValue]);
      };
    const increment=()=>{
            // updateCir(cir=>[...cir])
    }
     

    return(
        <>
        <h3> </h3>
        <input type="number" min="1" max="100" value={circle} onChange={addcircles}></input>
        <input type="submit"  onClick={increment}></input>
        {/* <button>increment</button> */}
        {
            circle.map((val,ind)=>(
                <React.Fragment key={ind}>
                <h1 style={{border:"5px solid black", borderRadius:"50%",height:"100px",width:"100px"}}  ></h1>
          </React.Fragment>
            ))
        }
        </>
    )
}
export default UseStateExample3