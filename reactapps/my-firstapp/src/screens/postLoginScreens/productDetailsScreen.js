import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Components/loaders/loaders";
import CardDetails from "../../Components/bootstarp/cardDetails";



const ProductDetailsScreen=()=>{
      
    const [collect,updateCollect]=useState({})
    const productInformation=useParams()
    console.log(productInformation)
    const [count,setCount]=useState(1)

    useEffect(()=>{
        fetchProductInformation(productInformation.id)
    },[productInformation.id])

    const fetchProductInformation=(id)=>{

        axios(`https://fakestoreapi.com/products/${id}`)
        .then(response=>{
            if(response.status === 200){
                
                response.data["count"]=1
                response.data["total"]=response.data.price
                console.log(response.data)
                // const newResponse=response.data.map((eachObj)=>{
                //     return {...eachObj,count:1 ,total:eachObj.price}
                // })
                // console.log(newResponse)
                updateCollect(response.data)
            }else{
                alert("something went wrong")
            }
        })
    }

    const increment=(data)=>{
        console.log(data)
        setCount((count)=>count+1)
    }

    const decrement=(data)=>{
        console.log(data)
        if(count>1){
            setCount((count)=>count-1)
        }
        
    }

    return(
        <>
        {
            Object.values(collect).length>0 ?
            <>
            <CardDetails name={collect.title} image={collect.image} description={collect.description} price={collect.price} count={count} total={collect.total} increment={increment} decrement={decrement}/>
            {/* <button onClick={()=>increment(collect)}>Increment</button><br/>
              <button>decrement</button> */}
            </>
            :
            <Loader/>
        }
        </>
    )
}

export default ProductDetailsScreen;