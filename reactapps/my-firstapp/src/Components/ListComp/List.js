





import React from 'react'

const List = () => {

  const myStyles={
    color:"blue",
    fontSize:20,
    backgroundColor:"green"
  }
  return (
    <div>  
    <h1 style={{color:"red"}}>Name of the students</h1>
    <li style={myStyles}>Sai</li>
    <li style={myStyles}>Ganesh</li>
    <li style={myStyles}>praveen</li>
    <li style={myStyles}>raju</li>
    <li style={myStyles}>charan</li>
    </div>
  )
}

export default List