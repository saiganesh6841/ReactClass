


const CardDetails=(props)=>{

    return(

        <>
       <div className="card" style={{width:"350px" ,textAlign:"center"}}>
    <img className="card-img-top" src={props.image}  alt="Card image" style={{width:"100%" ,height:"300px"}}/>
    <div className="card-body">
      <h4 className="card-title">{props.name}</h4>
      {/* <h5 className="card-title">Price : {props.price}</h5> */}
      <p className="card-text">{props.description}</p>

      <button onClick={props.decrement} style={{width:"40px",height:"40px"}}>-</button>
      <span className="card-text" style={{fontSize:"35px"}}>Qunatity: {props.count}</span>
      <button onClick={props.increment} style={{width:"40px",height:"40px"}}>+</button>
      
      <h4 className="card-text"> Total Price : {props.total*props.count}</h4>
      
      
      {/* <Link to={`/products/${props.id}`}>
      <a href="#" className="btn btn-primary">See More</a>
      </Link> */}
      <a href="#" className="btn btn-primary">Add to Cart</a><br/><br/>
      <a href="#" className="btn btn-primary">Buy Now</a>
      
    </div>
  </div>
        </>
    )
}

export default CardDetails