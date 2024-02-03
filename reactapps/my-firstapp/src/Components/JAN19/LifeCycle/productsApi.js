import { Component } from "react";
import CardBootstrap from "../../bootstarp/card";
import  Loader  from "../../loaders/loaders";



class Products extends Component{
    constructor(){
        super()
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        document.title="sai"

    fetch("https://fakestoreapi.com/products")
    .then((response)=>response.json())
    .then((data)=>{
        console.log(data)
        this.setState({products:data})
    })
    
    }
    render(){
        return(
            <>
            <h1>The filpkart products are</h1>
               
               <>
            {this.state.products.length>0?

            <div style={{display:"grid", gridTemplateColumns:"auto auto auto", rowGap:"10px"}}>
                
                    {this.state.products.map((items)=>(
                        <CardBootstrap name={items.title} image={items.image} description={items.description}/>
                    ))}
                    
                </div>
                :
                <div>
                    <Loader/>
                </div>
                    }
                </>
            </>
        )
    }
    
}

export default Products;
