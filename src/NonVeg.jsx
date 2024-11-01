import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "./Store";

function NonVeg()
{
    const dispatch=useDispatch()
    const NonVegProducts =useSelector(state => state.products.nonveg)
    const items= NonVegProducts.map((product,index)=>
    <li key={index}> {product.name} -${product.price.toFixed(2)}
    <button onClick={()=>dispatch(addTocart(product))}>Add to cart</button></li>
    )
    return (
        <>
        <h1>This is a   Nonveg page</h1>
        <h2>NonVeg Products</h2>
        <ul>
            {items}
        </ul>
        </>
    )
}
 export default NonVeg;