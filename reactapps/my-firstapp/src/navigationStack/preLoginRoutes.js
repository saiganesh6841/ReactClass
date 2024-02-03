import { Route, Routes } from "react-router-dom"
import LoginScreen from "../screens/preLoginScreens/loginScreen"
import InvalidScreen from "../screens/errorScreens/error"



const PreLoginRoutes=()=>{

    return(
        <>
        <Routes>
        <Route path="/" element={<LoginScreen/>}/>
        <Route path="*" Component={InvalidScreen} />
        </Routes>
        
        </>
    )
}
export default PreLoginRoutes