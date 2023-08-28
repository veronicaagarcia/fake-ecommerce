/* eslint-disable react/prop-types */
import { PlusCircleIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid"
import { useContext } from "react"
import { CartContext } from "../../Context"

function Card ({data}) {
    const context = useContext(CartContext)

    const showProductDetail = (productDetail) => {
        context.OpenCloseProductDetail()
        context.setProductShowDetail(productDetail)
        if (context.productCartCardOpen == true){
            context.OpenCloseProductCartCard()
        }
    }
    const addProduct = (event, data) => {
        event.stopPropagation()
        if (context.productDetailOpen == true){
            context.OpenCloseProductDetail()
        }
        if(context.productCartCardOpen == false){
            context.OpenCloseProductCartCard()
        }


        const productExists = context.productsInCart.some(el => el.id === data.id); // dará true si el producto ya se encuentra en el carrito

		if (productExists) {
			// valida la existencia
			const productCart = context.productsInCart.find(el => el.id === data.id); // busca el producto
			productCart.quantity += 1; // aumenta la cantidad en 1
		} else {
			data.quantity = 1; // si el producto no está, le agrega la propiedad quantity con valor uno, y luego setea el carrito agregando ese producto
			context.setProductsInCart([...context.productsInCart, data]);
		}
		context.setCount(context.count + 1);


        // context.setCount(context.count + 1)
        // context.setProductsInCart([...context.productsInCart, data])
       
    }
    return (
        <div className="bg-white cursor-pointer w-full h-full mx-8 px-2 rounded-lg"
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
                <span className="text-xs tracking-tight leading-none text-black  text-center">{`${data.title.substring(0,15)}... +`}</span>
                <span className="mt-2 flex justify-end text-sm text-lime-600 font-medium">
                    <CurrencyDollarIcon  className="h-5 w-5 text-lime-600" />{data.price}
                </span>
            </p>
        </div>
    )
}

export default Card