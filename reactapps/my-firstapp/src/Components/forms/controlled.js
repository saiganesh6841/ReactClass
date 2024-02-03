import { useState } from "react"



const ControllForms=()=>{

  const[username,changeName]=useState("")
  const [nameError,changeNameError]=useState("")
  const[email,changeEmail]=useState("")
  const emailInput=/@gmail\.com$/
  const [emailError,changeEmailError]=useState("")
  //password
  const[password,changePassword]=useState("")
  // const passwordInput=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/
  const passwordInput=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]*$/

  const [passwordError,changePasswordError]=useState("")
// let  a=password
  const[confirmPassword,confirmChangePassword]=useState("")
  const [error,changeError]=useState("")
  //
  const[invalidError,updateInvalidError]=useState("")

  
  const nameHandler=(event)=>{
    // console.log(event.target.value)
    changeName(event.target.value)
    if(event.target.value.length<4){
      changeNameError("the user name must be six characters")
    }else{
      changeNameError("")
    }
    
  }
  //ermail
  const emailHandler=(event)=>{
    // console.log(event.target.value)
    changeEmail(event.target.value)
    if(emailInput.test(event.target.value)){
      changeEmailError("")
    }
    else{
      changeEmailError("enter correct email")
    }

  }
  //password
  const passwordHandler=(event)=>{
    // console.log(event.target.value)
    changePassword(event.target.value)
    if(event.target.value.match(passwordInput)){
      changePasswordError("")
    }
    else{
      changePasswordError("password must be correct")
    }

  }
  //confirm password
  const confirmPasswordHandler=(event)=>{
    // console.log(event.target.value)
    confirmChangePassword(event.target.value)
    if(event.target.value === password){
      changeError("")
    }
    else{
      changeError("pass is doesnot match")
      // alert("password has to match")
    }
  }

  //submit
  const submitValues=(event)=>{
    event.preventDefault()
    
    if(password.length<6){
      alert("password must be 6 charcaters")
    }
    else{
      const userInfo={
         username:username,
         password:password,
         email:email
      }
      userDetails(userInfo)
    }
  
  }

  

  const userDetails=(data)=>{
    if(confirmPassword ===password){
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
        alert("yoy have succesfull login")
      }
    });
  }
  else{
    alert("Password and Confirm password must be")
  }
    }
    
  
  

    return(
        <>

              <form onSubmit={submitValues}> 
            <label >First Name:</label> 
            <br/>
            <input type="text" id="first" 
                   name="first" 
                   placeholder="Enter your first name"  value={username} onChange={nameHandler}/> 
                   {
                    nameError?
                    <h4 style={{color:"red"}}>{nameError}</h4>:null
                   }
                 <br/>
            <label>Email:</label> 
            <br/>
            <input type="email" id="email" 
                   name="email" 
                   placeholder="Enter your email" value={email} onChange={emailHandler}/> 
                   {
                    emailError?
                    <h4  style={{color:"red"}}>{emailError}</h4>:null
                   }
                   {/* onChange={(e)=>{changeEmail(e.target.value)}} */}
                    <br/><br/>
            
  
            <label >Password:</label> 
            <br/>
            <input type="password" id="password" 
                   name="password"
                   placeholder="Enter your password" value={password} onChange={passwordHandler}/>
                   {
                      passwordError?
                      <h4 style={{color:"red"}}>{passwordError}</h4>:null
                   }
                    <br/>
  
            <label >Confirm Password:</label> 
            <br/>
            <input type="password" id="repassword" 
                   name="repassword" 
                   placeholder="Re-Enter your password" value={confirmPassword} onChange={confirmPasswordHandler}/> 
            <span id="pass"></span> 
            {
              error?
              <h4 style={{color:"red"}}>{error}</h4>
              :
              null
            }
            <br/><br/>
{/*                
            <label for="mobile">Contact:</label> 
            <input type="text" id="mobile" 
                   name="mobile" 
                   placeholder="Enter your Mobile Number" required 
                   maxlength="10">  */}
  
            <label>Gender:</label> 
            <br/>
            <select id="gender" name="gender" > 
                <option value="male">male</option> 
                <option value="female">female</option> 
                <option value="other">Other</option> 
            </select> 
            <br/><br/>
            <h4 style={{color:"red"}}>{invalidError}</h4>
            <div className="wrap"> 
                <button type="submit" > 
                  Submit 
                  </button> 
            </div> 
        </form> 
        </>
    )
}
export default ControllForms