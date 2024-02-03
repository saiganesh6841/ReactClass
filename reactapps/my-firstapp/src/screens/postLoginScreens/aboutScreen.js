import { useContext } from "react"
import NavBar from "../../Components/navbar/navbar"
import { DataShare } from "../../navigationStack/navigation"


const AboutScreen=()=>{

    const text=useContext(DataShare)
    const{name,theme,changeTheme}=text

    const controlTheme=()=>{
        changeTheme(true)
    }
    return(
       <>
       <NavBar/>
       <div style={{width:"100%",height:"40px",backgroundColor:theme?"grey":"red"}}></div>
       <button onClick={controlTheme}>click for change theme</button>
        <h1>i am the about screen</h1>
        <h1>i am practising global state managment using useContext EX:{name}</h1>
       </>
    )
}

export default AboutScreen