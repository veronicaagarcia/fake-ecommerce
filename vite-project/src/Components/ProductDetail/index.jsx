/* eslint-disable react/prop-types */
import { XCircleIcon, StarIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid"
import { useContext } from "react"
import { CartContext } from "../../Context"

const ProductDetail = () => {
    const context = useContext(CartContext)
   
    return (
        <aside className={` ${context.productDetailOpen == true ? "flex" : "hidden"} w-1/4 flex-col fixed left-0 border overflow-y-scroll bg-white border-black rounded-lg h-[calc(100vh-80px)]`}>
            <div className='flex justify-between items-center p-4'>
                <h2 className='font-medium text-black/60 pl-20 text-xl'>Product Detail</h2>
                <div><XCircleIcon 
                className="h-6 w-6 text-red-500 cursor-pointer"
                onClick={() => context.OpenCloseProductDetail()}/></div>
            </div>

            <div className="bg-white w-56 h-60 rounded-lg flex flex-col items-center w-full">
            <figure className="relative mb-2 w-full h-4/5">
                <img  className="w-full h-full object-contain rounded-lg" src={context.productShowDetail.image} alt={context.productShowDetail.title}/>
            </figure>
            <p className="flex flex-col justify-between rounded-lg p-3 items-start">
                <p className="text-sm text-black font-medium mb-3">Name: <span className="text-sm text-black font-light">{context.productShowDetail.title}</span></p>
                <p className="text-sm text-black font-medium mb-3">Description: <span className="text-sm text-black font-light">{context.productShowDetail.description}</span></p>
                <div className="w-full flex flex-row justify-between">
                    <p className="text-sm text-black font-medium mb-3">Rate: <span className= {`${context.productShowDetail.rating.rate ? "flex" : "hidden"} text-sm text-black font-light`}><StarIcon  className="h-5 w-5 text-amber-200"/>{context.productShowDetail.rating.rate}</span></p>
                    <p className="text-sm text-black font-medium mb-3">Price: <span className="flex text-sm text-lime-600 font-medium"> <CurrencyDollarIcon  className="h-5 w-5 text-lime-600" />{context.productShowDetail.price}
                    </span></p>
                </div>
            </p>
        </div>
        </aside>
    )
} 

export default ProductDetail