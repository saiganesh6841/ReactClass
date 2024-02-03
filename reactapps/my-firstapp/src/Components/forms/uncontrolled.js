import { useContext, useRef, useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";
import { DataShare } from "../../navigationStack/navigation";

const UncontrolledForms = () => {

  const username=useRef()
  const password=useRef()
  const[invalidError,updateInvalidError]=useState("")
  const{loginTrue}=useContext(DataShare)

  const submitValues=(event)=>{
    event.preventDefault()

    console.log(username.current.value)
    console.log(password.current.value)

    if(password.current.value.length<6){
      alert("password must be 6 charcaters")
    }
    else{
      const userInfo={
         username:username.current.value,
         password:password.current.value
      }
      userDetails(userInfo)
    }
  }
  
  const userDetails=(data)=>{
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then((res)=>{
      if(res.message){
      console.log(res.message)
      updateInvalidError(res.message)
      }
      else{
        updateInvalidError("")
        alert("you are successful login")
        loginTrue()
      }
    });
  }


  return (
    <>
      <form onSubmit={submitValues}>
        <div className="mb-3 mt-3">
          <label className="form-label" style={{ color: "black", fontSize: "30px" }}>Username:</label><br></br>
          <input type="text" className="form-control" style={{ fontSize: "30px" }} placeholder="Enter username" ref={username} />
        </div>
        <br></br>
        <div className="mb-3">
          <label className="form-label" style={{ color: "black", fontSize: "30px" }}>Password:</label><br></br>
          <input type="password" className="form-control" style={{ fontSize: "30px" }} placeholder="Enter password" ref={password} />
        </div>
        <br></br>
         <h4 style={{color:"red"}}>{invalidError}</h4>
        <button type="submit" className="btn btn-primary" style={{ color: "red", fontSize: "30px" }}>Submit</button>
      </form>
    </>
  );
};

export default UncontrolledForms;
