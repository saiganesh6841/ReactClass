import { Component } from "react";



class ButtonComponent extends Component{

    state={
        background1:"red",
        isbackground:"false",
        background2:"black"
    }
    handleColor=()=>{
            
       this.setState(
       { message:"subscribed thanks",
       isbackground:!this.state.isbackground}
       ,()=>{
        console.log(this.state.isbackground)
       })

       
    }
    render(){
        return(
            <>
            <div style={{width:"100px" , height:"100px",border:"2px solid black", textAlign:"center", margin:"0 auto", background:this.state.isbackground?this.state.background1:this.state.background2}} 
            onClick={this.handleColor}></div>
            <h2>{this.state.isbackground?"click here for change color ":"click for go back"}</h2>
            </>
        )
    }
}
export default ButtonComponent;

