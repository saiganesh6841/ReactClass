import axios from "axios"
import React, { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import CardBootstrap from "../../bootstarp/card"
import Loader from "../../loaders/loaders"



const UseEffectEx1=()=>{

    const [list,setList]=useState([])  
    // const [count,setCount]=useState(1)

    useEffect(()=>{
        
        fetch()

         
    },[])
    const fetch=()=>{

        axios.get("https://fakestoreapi.com/products")
        .then(response=>{
            if(response.status===200){
                const newResponse=response.data.map((eachObj)=>{
                    return {...eachObj,count:1 ,total:eachObj.price}
                })
                console.log(newResponse)
                setList(newResponse)
                
            }
        })
    }
   
    // const increment=(data)=>{
    //     console.log(data)
    //     // setCount(count=>count+1)
    // }

    return(
          <>
                      <div style={{display:"grid", gridTemplateColumns:"auto auto auto", rowGap:"10px"}}>

          {
            list.length>0?
            list.map((val,ind)=>(
                <>
                
                <CardBootstrap name={val.title} image={val.image} price={val.price} id={val.id} count={val.count} total={val.total}/>
                {/* <button onClick={()=>increment(val)}>Increment</button><br/>
      <button>decrement</button> */}

                
                </>
            ))
            :
            // <Spinner/>
          <Loader/>           
          }
          </div>
          </>
    )
}

export default UseEffectEx1