import Products from "../../Components/JAN19/LifeCycle/productsApi"
import Footer from "../../Components/footer/footer"
import UseEffectEx1 from "../../Components/hooks/useEffect/useEffectEx1"
import NavBar from "../../Components/navbar/navbar"


const ProductScreen=()=>{
    return(
       <>
       <NavBar/>
       {/* <h1>i am product screen</h1> */}
       {/* <Products/> */}
       <UseEffectEx1/>
       <Footer/>
       </>
    )
}

export default ProductScreen