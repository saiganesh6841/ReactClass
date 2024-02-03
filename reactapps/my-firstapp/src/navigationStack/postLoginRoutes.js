import { Route, Routes } from "react-router-dom"
import HomeScreen from "../screens/postLoginScreens/homeScreen"
import AboutScreen from "../screens/postLoginScreens/aboutScreen"
import SettingScreen from "../screens/postLoginScreens/settingScreen"
import ProductScreen from "../screens/postLoginScreens/productScreen"
import ProductDetailsScreen from "../screens/postLoginScreens/productDetailsScreen"
import InvalidScreen from "../screens/errorScreens/error"


const PostLoginRoutes=()=>{

    return(
        <>
        
        <Routes>
            
<Route path="/" Component={HomeScreen}/>
<Route path="/about" Component={AboutScreen}/>
<Route path="/settings" Component={SettingScreen}/>
<Route path="/products" Component={ProductScreen}/>
<Route path="/products/:id" Component={ProductDetailsScreen} />
<Route path="*" Component={InvalidScreen}/>
        </Routes>
        </>
    )
}

export default PostLoginRoutes