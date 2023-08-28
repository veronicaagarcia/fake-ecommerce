/* eslint-disable react/prop-types */
import { XCircleIcon, CurrencyDollarIcon, StarIcon } from "@heroicons/react/24/solid"
import { useContext } from "react"
import { CartContext } from "../../Context"

import "./styles.css"
const ProductDetail = () => {
    const context = useContext(CartContext)
   
    return (
        <aside className={` ${context.productDetailOpen == true ? "flex" : "hidden"} productDetail flex-col fixed border bg-white border-black rounded-lg h-[calc(100vh-80px)]`}>
            <div className='flex justify-between items-center p-4'>
                <h2 className='font-medium text-black/60 pl-20 text-xl'>Product Detail</h2>
                <div><XCircleIcon 
                className="h-6 w-6 text-red-500 cursor-pointer"
                onClick={() => context.OpenCloseProductDetail()}/></div>
            </div>

            <div className="bg-white w-56 h-60 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <img  className="w-full h-full object-contain rounded-lg" src={context.productShowDetail.image} alt={context.productShowDetail.title}/>
            </figure>
            <p className="flex flex-col justify-between rounded-lg">
                <span className="text-sm text-black font-light">{context.productShowDetail.title}</span>
                <span className="text-lg text-black font-medium">
                    <CurrencyDollarIcon  className="h-5 w-5 text-lime-600" />{context.productShowDetail.price}
                </span>
                <span className="text-sm text-black font-light">{context.productShowDetail.description}</span>
                {/* <span className= {`${context.productShowDetail.rating.rate ? "flex" : "hidden"} text-sm text-black font-light`}><StarIcon  className="h-5 w-5 text-amber-200" />{context.productShowDetail.rating.rate}</span> */}
            </p>
        </div>
        </aside>
    )
} 

export default ProductDetail