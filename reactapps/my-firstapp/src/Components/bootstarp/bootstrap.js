
import CardBootstrap  from "./card"

function Layout(){
    return(
        <>
        <div style={{display:"flex" , justifyContent:"space-around"}}>
       <CardBootstrap name="sai Ganesh"/>
    <CardBootstrap name="ganesh"/>
    <CardBootstrap name="sai"/>
        </div>
           
{/*            
           <CardBootstrap/>
           <CardBootstrap/>
           <CardBootstrap/>
           <CardBootstrap/> */}
        </>
    )
}

export default Layout