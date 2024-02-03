import { Link } from "react-router-dom";
import NavBar from "../../Components/navbar/navbar";


const InvalidScreen=()=>{

    return(
        <>
        <NavBar/>
        <h1>The page is not found ,please enter correct url</h1>

        <Link to="/">
        <button>Go back to login page</button>
        </Link>
        </>
    )
}
export default InvalidScreen;