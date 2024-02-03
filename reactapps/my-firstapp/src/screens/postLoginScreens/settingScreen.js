import { useContext } from "react";
import NavBar from "../../Components/navbar/navbar";
import { DataShare } from "../../navigationStack/navigation";



const SettingScreen=()=>{

    const text=useContext(DataShare)
    const{name,theme,changeTheme}=text

    return(
        <>
        <NavBar/>
        <div style={{width:"100%",height:"40px",backgroundColor:theme?"grey":"red"}}></div>
        <h1>i am the setting screen</h1>
        </>
    )
}

export default SettingScreen;