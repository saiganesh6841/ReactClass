

import React, { Component } from "react";

// class ClassPractise extends Component{

//      state={
//       count:0
//      }
//      handle=()=>{
//         this.setState({count:this.state.count+1})
//      }

//     // ele="hello we are react community"
//     render(){
//         return(
//             <>
//             <p>count:{this.state.count}</p>
//             <button onClick={this.handle}>Increment</button>
//             {/* <h1 >{this.props.message}</h1> */}

//             </>
//         )
//     }
// }

// export default ClassPractise


export class ClassPract1 extends Component{


    constructor(){
        super()
        this.state={
            count:0
        }
        
    }
    handle=()=>{
        this.setState({count:this.state.count+1})
     }
    render(){
        return(
            <>
            <h1>count:{this.state}</h1>
            <button onClick={this.handle}>Increment</button>
           {/* <ClassPractise message="hii we are react community"/> */}
            </>
        )
    }
}