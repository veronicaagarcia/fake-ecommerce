import { XCircleIcon } from "@heroicons/react/24/solid"
import { useContext } from "react"
import { CartContext } from "../../Context"

import "./styles.css"
const ProductDetail = () => {
    const context = useContext(CartContext)
   
    return (
        <aside className={` ${context.productDetailOpen == true ? 'flex' : 'hidden'} productDetail flex-col fixed border bg-white border-black rounded-lg h-[calc(100vh-80px)]`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-black/60 text-xl'>Product Detail</h2>
                <div><XCircleIcon 
                className="h-6 w-6 text-red-500 cursor-pointer"
                onClick={() => context.OpenCloseProductDetail()}/></div>
            </div>
        </aside>
    )
} 

export default ProductDetail