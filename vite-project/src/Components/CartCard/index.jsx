import {Link} from "react-router-dom"
import { useContext } from "react"
import { XCircleIcon } from "@heroicons/react/24/solid"
import { CartContext } from "../../Context"
import { totalPrice } from "../../Utils"
import NewInCart from "../NewInCart"
import "./styles.css"

const CartCard = () => {
    const context = useContext(CartContext)

    const deleteProductCart = (id) => {
        let saveProductCar=[]

        for (let i=0; i < context.productsInCart.length ; i++) {
            if(context.productsInCart[i].id == id && context.productsInCart[i].quantity >1){
                context.productsInCart[i].quantity --
                saveProductCar.push(context.productsInCart[i])

            } else if (context.productsInCart[i].id != id){

                saveProductCar.push(context.productsInCart[i])
            }
            context.setProductsInCart(saveProductCar)
            context.setCount(context.count - 1)
        }
    }
    const buyOrder = () => {

        let totalQuantity = 0
         
        for (let i=0; i < context.productsInCart.length; i++){
            if(context.productsInCart[i].quantity === 1){
                totalQuantity = totalQuantity + 1
            } else {
                totalQuantity = totalQuantity + context.productsInCart[i].quantity
            }   
        }
        
        const orderToAdd = {
            date: new Date(),
            products: context.productsInCart,
            totalProducts: totalQuantity,
            totalPrice: totalPrice(context.productsInCart),
        };
      
        context.setOrder([...context.order, orderToAdd]);
        context.setProductsInCart([]);
        context.setCount(0);
    }
   
    return (
        <aside className={` ${context.productCartCardOpen == true ? "flex" : "hidden"}  flex-col fixed cartCard border overflow-y-scroll bg-white border-black rounded-lg w-1/5 h-[calc(100vh-80px)]`}>
            <div className='flex justify-between items-center p-2'>
                <h2 className='font-medium text-black/60 pl-2 text-xl'>My Order</h2>
                <div><XCircleIcon 
                className="h-6 w-6 text-red-500 cursor-pointer"
                onClick={() => context.OpenCloseProductCartCard()}/></div>
            </div>
            <div className="flex-1">
            {
                context.productsInCart.map((product) => (
                    <NewInCart 
                    key={product.id} 
                    id={product.id}
                    title={product.title} 
                    image={product.image} 
                    price={product.price} 
                    quantity={product.quantity}
                    deleteProductCart= {deleteProductCart}
                    />
                ))
            }
            </div>
            <div className="p-2">
                <p className="flex justify-center ">
                    <span className="text-black/60 text-md mr-5">Total:</span>
                    <span className="text-lime-600 text-md ml-5">${totalPrice(context.productsInCart)}</span>
                </p>
                <Link to="/MyOrders/last">
                    <button className="text-white bg-black/50 hover:bg-lime-600 py-1 mt-2 w-full rounded-lg" onClick={()=>buyOrder()}>Buy</button>
                </Link>
            </div>
        </aside>
    )
} 

export default CartCard