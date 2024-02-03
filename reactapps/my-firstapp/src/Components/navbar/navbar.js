import { useContext } from "react"
import { Link } from "react-router-dom"
import { DataShare } from "../../navigationStack/navigation"



const NavBar=()=>{

  const sharedText=useContext(DataShare)
  console.log(sharedText)

     const styles={
        textDecoration:"none",
        padding:"11px",
        fontSize:"35px",
        color:"white"
     }
    return(
        <>
       <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
  <Link to="/" style={styles}>{sharedText.name}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link to="/about" style={styles}>ABOUT</Link>
        </li>
        <li className="nav-item">
        <Link to="/products" style={styles}>PRODUCTS</Link>
        </li>
        <li className="nav-item">
        <Link to="/settings" style={styles}>SETTINGS</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="text" placeholder="Search"/>
        <button className="btn btn-primary" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>
       </>
    )
}

export default NavBar