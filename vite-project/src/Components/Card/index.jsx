/* eslint-disable react/prop-types */
import { PlusCircleIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid"
import { useContext } from "react"
import { CartContext } from "../../Context"

function Card ({data}) {
    const context = useContext(CartContext)

    const showProductDetail = (productDetail) => {
        if (context.productCartCardOpen == true){
            context.OpenCloseProductCartCard()
        }
        context.setProductDetailOpen(true)
        context.setProductShowDetail(productDetail)
    }
    const addProduct = (event, data) => {
        event.stopPropagation()
        if (context.productDetailOpen == true){
            context.OpenCloseProductDetail()
        }
        if(context.productCartCardOpen == false){
            context.OpenCloseProductCartCard()
        }
        
        const productExists = context.productsInCart.some(item => item.id === data.id); 

		if (productExists) {
			const productCart = context.productsInCart.find(item => item.id === data.id); 
			productCart.quantity += 1; 
		} else {
			data.quantity = 1; 
			context.setProductsInCart([...context.productsInCart, data]);
		}
		context.setCount(context.count + 1);
       
    }
    return (
        <div className="bg-white cursor-pointer w-46 h-60 p-1 rounded-lg"
            onClick={() => showProductDetail(data)}>
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-gray-400/40 rounded-lg text-black text-xs m-2 px-3 py-0.5">
                    {data.category}
                </span>
                <img  className="w-full h-full object-contain rounded-lg hover:object-cover " src={data.image} alt={data.title}/>
                <button 
                    onClick={(event)=> addProduct(event, data)}
                    className="absolute top-0 right-0 flex justify-center items-center bg-white text-cyan-400 font-bold text-lg w-7 h-7 rounded-full m-2">
                    <PlusCircleIcon  className="h-6 w-6 text-black-500 cursor-pointer" />
                </button>
            </figure>
            <p className="rounded-lg flex flex-col">
                <span className="text-xs tracking-tight leading-none text-black  text-center">{`${data.title.substring(0,12)}... +`}</span>
                <span className="mt-2 flex justify-end text-sm text-lime-600 font-medium">
                    <CurrencyDollarIcon  className="h-5 w-5 text-lime-600" />{data.price}
                </span>
            </p>
        </div>
    )
}

export default Card