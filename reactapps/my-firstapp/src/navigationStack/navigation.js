import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "../screens/postLoginScreens/homeScreen";
import AboutScreen from "../screens/postLoginScreens/aboutScreen";
import SettingScreen from "../screens/postLoginScreens/settingScreen";
import ProductScreen from "../screens/postLoginScreens/productScreen";
import InvalidScreen from "../screens/errorScreens/error";
import ProductDetailsScreen from "../screens/postLoginScreens/productDetailsScreen";
import { createContext, useState } from "react";
import LoginScreen from "../screens/preLoginScreens/loginScreen";
import PostLoginRoutes from "./postLoginRoutes";
import PreLoginRoutes from "./preLoginRoutes";


export const DataShare=createContext()

const Navigation=()=>{

    const [name,setName]=useState("SAI") 
    const [theme,setTheme]=useState(false) 
    const [login,setLogin]=useState(false)

    const changeTheme=()=>{
        setTheme(!theme)
    }

    const loginTrue=()=>{
        setLogin(true)
    }

    return(
  
       // if key value pair is same write one name
      <DataShare.Provider value={{name,theme,changeTheme,loginTrue}}>         

        <BrowserRouter>
        {
            login?
            <PostLoginRoutes/>
            :
            <PreLoginRoutes/>
        }
        </BrowserRouter>

        </DataShare.Provider>
    )

}
export default Navigation;