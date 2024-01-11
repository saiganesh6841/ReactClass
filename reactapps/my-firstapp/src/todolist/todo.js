
import "../Components/styling/external.css"

 export const TodoList=()=>{
    const obj={
        name:"SaiGanesh",
        email:"saiganesh6841@gmail.com",
        study:"B.S.C",
        carrerObj:"I am here to bulid my career in good problem solving with enthusiastic",
        education:{
            SNo:[1,2,3],
            qualification:["SSC","MPC","B.S.C"],
            college:["TSMS","TSMS &JC","ABV GOVT"],
            percentage:["90%","89%","73%"]
        },
        technical:["HTML","CSS","JS"],
        hobbies:["music","watching series","outdoor games"]
        
    } 
    const{name,email,carrerObj,education: { SNo, qualification, college, percentage },technical,hobbies}=obj

    return(
        <div>
            <h1 className={"name"}>{name}</h1>
            <p className="mid">{email}</p>
            <h2 className={"carrObj"}>carrer Objective : {carrerObj}</h2>

            <h3 className={"edu"}>Education </h3>
            <table>
                <tr>
                    <th>SNo</th>
                    <th>Qualification</th>
                    <th>College</th>
                    <th>percentage</th>

                </tr>
                <tr>
                    <td>{SNo[0]}</td>
                    <td>{qualification[0]}</td>
                    <td>{college[0]}</td>
                    <td>{percentage[0]}</td>

                </tr>
                <tr>
                    <td>{SNo[1]}</td>
                    <td>{qualification[1]}</td>
                    <td>{college[1]}</td>
                    <td>{percentage[1]}</td>

                </tr>
                <tr>
                    <td>{SNo[2]}</td>
                    <td>{qualification[2]}</td>
                    <td>{college[2]}</td>
                    <td>{percentage[2]}</td>

                </tr>
            </table>
            <h3 className={"techSkills"}>Technical Skills</h3>
            <li>{technical[0]}</li>
            <li>{technical[1]}</li>
            <li>{technical[2]}</li>

            <h3 className={"hobbies"}>Hobbies</h3>
            <li>{hobbies[0]}</li>
            <li>{hobbies[1]}</li>
            <li>{hobbies[2]}</li>
        </div>
    )
}
