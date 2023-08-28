import { XCircleIcon } from "@heroicons/react/24/solid"
import { useContext } from "react"
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
        // const removeOfCart = context.productsInCart.map((product) => product.id == id){}
        // if(removeOfCart.quantity > 1 ) {
        //     removeOfCart.quantity --
        // } else {

        // const filterProducts = context.productsInCart.filter(product => product.id != id)
        
        // context.setProductsInCart(filterProducts)
        // context.setCount(context.count - 1)
        // }
    }
   
    return (
        <aside className={` ${context.productCartCardOpen == true ? "flex" : "hidden"}  flex-col fixed cartCard border overflow-y-scroll bg-white border-black rounded-lg w-1/3 h-[calc(100vh-80px)]`}>
            <div className='flex justify-between items-center p-4'>
                <h2 className='font-medium text-black/60 pl-20 text-xl'>My Order</h2>
                <div><XCircleIcon 
                className="h-6 w-6 text-red-500 cursor-pointer"
                onClick={() => context.OpenCloseProductCartCard()}/></div>
            </div>
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
            <div className="p-6">
                <p className="flex justify-center ">
                    <span className="text-black/60 mr-5">Total:</span>
                    <span className="text-black/60 ml-5">${totalPrice(context.productsInCart)}</span>
                </p>

            </div>

        </aside>
    )
} 

export default CartCard