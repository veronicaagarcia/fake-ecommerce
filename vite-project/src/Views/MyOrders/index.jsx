import { useContext } from "react"
import {Link} from "react-router-dom"
import { CartContext } from "../../Context"
import HeaderHome from "../../Components/HeaderHome"
import NewInOrders from "../../Components/NewInOrders"

function MyOrders () {
    const context = useContext(CartContext)
    return (
        <HeaderHome>
            <div className="flex items-center w-80 justify-center relative mb-5">
            <h1>My Orders</h1>
            </div>
            {
                context.order.map((item, index)=>(
                    <Link key={index} to={`/MyOrders/${index}`} >
                    <NewInOrders totalPrice={item.totalPrice} totalProducts={item.totalProducts} id={index}/>
                    </Link>
                ))
            }
        </HeaderHome>
    )
}

export default MyOrders