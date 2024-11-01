import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "./Store";

function Veg(){
    const dispatch=useDispatch()
    const VegProducts =useSelector(state => state.products.veg)
    const items= VegProducts.map((product,index)=>
    <li key={index}> {product.name} -${product.price.toFixed(2)}
    <button onClick={()=>dispatch(addTocart(product))}>Add to cart</button></li>
    )
    return (
        <>
        <h1>This is a veg page</h1>
        <h2>Veg Products</h2>
        <ul>
            {items}
        </ul>
        </>
    )
}
export default Veg;