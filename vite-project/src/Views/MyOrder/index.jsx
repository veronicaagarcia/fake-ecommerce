import { useContext } from "react"
import {Link} from "react-router-dom"
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid"
import { CartContext } from "../../Context"
import Layout from "../../Components/Layout"
import NewInCart from "../../Components/NewInCart"

function MyOrder () {
    const context = useContext(CartContext)
    const myPath = window.location.pathname
    let index = myPath.substring(myPath.lastIndexOf("/") + 1)
    if(index == "last"){
        index = context.order?.length - 1
    }
    
    return (
        <Layout>
            <div className="flex items-center w-80 justify-center relative mb-5">
                <Link to="/MyOrders" className="absolute left-0">
                    <ArrowLeftCircleIcon  className="h-8 w-8 text-cyan-400 cursor-pointer" />
                </Link>
            <h1>My Order</h1>
            </div>

            <div className="flex flex-col w-80">
            {
                context.order?.[index]?.products.map((product) => (
                    <NewInCart 
                    key={product.id} 
                    id={product.id}
                    title={product.title} 
                    image={product.image} 
                    price={product.price} 
                    quantity={product.quantity}
                    />
                ))
            }
            </div>
        </Layout>
    )
}

export default MyOrder