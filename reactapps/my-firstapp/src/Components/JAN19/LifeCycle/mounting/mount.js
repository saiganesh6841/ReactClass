import { Component } from "react";


class Mounting extends Component{

    constructor(){
        // debugger;
        super()
        console.log("constructor")
        
        this.state={
            style:"red",
            products:[]
        }
    }
   
    static getDerivedStateFromProps(props){
        console.log("getDerivedStateFromProps")
        return{ name:"let get started"}
    }
    componentDidMount(){
        // document.title="sai"
        console.log("componentDidMount")
        setTimeout(()=>{
            this.setState({
                style:"yellow"
            });
        },2000)
    }

    // componentDidMount(){
    //     fetch("https://fakestoreapi.com/products")
    //     .then((response)=>response.json())
    //     .then(data=>{
    //         this.setState({products:"data"})
    //     })
       
    // }

    render(){
        console.log("render")
        return(
            <>
            <h1 style={{color: this.state.style}}>hello we are {this.props.name} {this.state.name}</h1>

        {/* <div>
        <h2>
                        {this.state.products.map((val) => (
                            <h4 key={val.id}>{val.title}</h4>
                        ))}
                    </h2>
        </div> */}
            </>
        )
    }
}

export default Mounting




