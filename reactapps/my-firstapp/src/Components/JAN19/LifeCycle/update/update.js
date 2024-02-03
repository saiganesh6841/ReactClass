const { Component } = require("react");


class UpdatePhase extends Component{

    constructor(){
        console.log("constructor")
        super()
        this.state={
            counter:0
        }
    }
//   static  getDerivedStateFromProps(props,state){
//         return{count:state.counter+1}
//     }
increment=()=>{
    this.setState({counter:this.state.counter+1})
}

    componentDidUpdate(){
        console.log("componentDidUpdate")
   document.title=`count: ${this.state.counter}`

    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(props,state){
        console.log(state)
        return null
    }
    
    

    render(){
        return(
            <>
            <h1>counter: {this.state.counter}</h1>
            <button onClick={this.increment}>click for increment</button>
            {/* <h1>count: {this.state.count}</h1> */}
            </>
        )
    }
}
export default UpdatePhase