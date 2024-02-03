import React,{ useState } from "react"



const UseStateExample2=()=>{


    let initial=[
        {
            name:"sai",
            salary:1000,
            bonus:200
        },{
            name:"ganesh",
            salary:2000,
            bonus:300
        }
        
    ]
   
    // console.log(intial,salary)
    let[defaultValue,updateValue]=useState([])
    let [count,changeCount]=useState(0)
    let [value,changeValue]=useState(0)
    

    let increment = () => {
        if (count < initial.length && defaultValue.length < 2) {
          updateValue((val) => [...val, initial[count]]);
          changeCount((prevValue) => prevValue + 1);
        } else {
          alert("Display limit reached");
        }
      };


    const salaryIncrement=(valueSalary)=>{ 
      console.log(valueSalary)
      changeValue((value)=>value+valueSalary)
      console.log(valueSalary)
    }
    
    
    return(
        
        <>
        <button onClick={increment}>click for display</button>

        {
            
          defaultValue.length>0 && 
        
           defaultValue.map((val,ind)=>(
                
                <React.Fragment key={ind}>

                   <h2>Name : {val.name}</h2>
                   <h2>Salary: {val.salary}</h2>
                   <h2>Bonus: {val.bonus}</h2>
                   <h2>Total salary: {val.salary+val.bonus}</h2>
                    <h2>increment:{value}</h2>

                   <button onClick={()=>{salaryIncrement(val.salary)}}>salaryIncrement</button> 
                  
                </React.Fragment>
            ))
        }
        
        </>
    )
}
export default UseStateExample2




// const UseStateExample2=()=>{


//     let intial=[
//         {
//             name:"sai",
//             salary:1000,
//             bonus:200
//         },{
//             name:"ganesh",
//             salary:2000,
//             bonus:300
//         }
//     ]
   
    
//     let[defaultValue,updateValue]=useState(intial)

//     // let increment=()=>{
//     //     updateValue((val)=>[...val,intial])
//     //     // console.log(defaultValue)
//     // }
    
    
//     return(
        
//         <>
//         {
//             defaultValue.map((val,ind)=>(
//                 <React.Fragment key={ind}>
//                     <h2>{val.name}</h2>
//                     <h2>{val.salary}</h2>
//                     <h2>{val.salary+val.bonus}</h2>
//                 </React.Fragment>
//             ))
//         }
//         </>
//     )
// }
// export default UseStateExample2