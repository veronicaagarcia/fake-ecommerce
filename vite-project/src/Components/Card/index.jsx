/* eslint-disable react/prop-types */
import { PlusCircleIcon } from "@heroicons/react/24/solid"
import { CurrencyDollarIcon } from "@heroicons/react/24/solid"
import { useContext } from "react"
import { CartContext } from "../../Context"

function Card ({data}) {
    const context = useContext(CartContext)
    return (
        <div className="bg-white cursor-pointer w-56 h-60 rounded-lg"
            onClick={() => context.OpenCloseProductDetail()}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-gray-400/40 rounded-lg text-black text-xs m-2 px-3 py-0.5">
                    {data.category}
                </span>
                <img  className="w-full h-full object-contain rounded-lg" src={data.image} alt={data.title}/>
                <button 
                    onClick={()=> context.setCount(context.count + 1)}
                    className="absolute top-0 right-0 flex justify-center items-center bg-white text-cyan-400 font-bold text-lg w-6 h-6 rounded-full m-2">
                    <PlusCircleIcon  className="h-6 w-6 text-black-500 cursor-pointer" />
                </button>
            </figure>
            <p className="flex justify-between rounded-lg">
                <span className="text-sm text-black font-light">{data.title}</span>
                <span className="text-lg text-black font-medium">
                    <CurrencyDollarIcon  className="h-5 w-5 text-lime-600" />{data.price}
                </span>
            </p>
        </div>
    )
}

export default Card