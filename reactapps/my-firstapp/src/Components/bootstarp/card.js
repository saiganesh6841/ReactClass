import { Link } from "react-router-dom"



function CardBootstrap(props){
   
    return(
        <>
        <div className="card" style={{width:"350px"}}>
    <img className="card-img-top" src={props.image}  alt="Card image" style={{width:"70%"}}/>
    <div className="card-body">
      <h4 className="card-title">{props.name}</h4>
      <h5 className="card-title">Price : {props.price}</h5>
      {/* <p className="card-text"> count : {props.price}</p>
      <p className="card-text"> total : {props.total}</p> */}
      
      <Link to={`/products/${props.id}`}>
      <a href="#" className="btn btn-primary">See More</a>
      </Link>
      {/* <a href="#" className="btn btn-primary">Buy Now</a> */}
      {/* <button>Increment</button><br/>
      <button>decrement</button> */}
    </div>
  </div>
         {/* <div className="card" style={{width:400 , border:"2px solid black", textAlign:"center"}}>
    <img className="card-img-top" src={props.image} alt="Card image" style={{width:"50%"}}/>
    <div className="card-body">
      <h4 className="card-title">{props.name}</h4>
      <p className="card-text">{props.description}</p>
      <button>Add To Cart</button><br/>
      <button>Buy Now</button>

    </div>
  </div> */}
  </>
    )
}
export default CardBootstrap