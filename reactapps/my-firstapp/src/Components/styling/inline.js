
import styles from "./style.module.css"

const Inline=()=>{

    const colors={
        color:"red",
        fontSize:"40px",
        border:"2px solid black",
    }

    return(
        <>
        <h1 style={colors}>HEllo all   react commun ity </h1>
        <h1 className={styles.moduleh1}>Hello i am practising react</h1>
        <p className="modulep1">f you are familiar with basic HTML, you’ll know that it is possible to add your CSS inline. This is similar in React. We can add inline styles to any React component we want to render. These styles are written as attributes and are passed to the\
             element. Let’s style parts of our component using inline styles: In the c</p>

        </>
    )
}
export default Inline;
