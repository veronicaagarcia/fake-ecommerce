/* eslint-disable react/prop-types */
import { CurrencyDollarIcon, XCircleIcon } from "@heroicons/react/24/solid" 


const NewInCart = props => {
    const {id, image, title, price, quantity, deleteProductCart} = props
    console.log(props)
    return (
        <div className="bg-white w-56 h-60 rounded-lg">
                <figure className="relative mb-2 w-full h-4/5">
                    <img  className="w-20 h-20 object-contain rounded-lg" src={image} alt={title}/>
                    <div><XCircleIcon 
                        className="h-6 w-6 text-red-500 cursor-pointer"
                        onClick={()=> deleteProductCart(id)}/></div>
                </figure>
                <span className='text-sm w-4 text-black'>{quantity}</span>
                <p className="flex flex-col justify-between rounded-lg">
                    <span className="text-sm text-black font-light">{title}</span>
                    <span className="text-lg text-black font-medium">
                        <CurrencyDollarIcon  className="h-5 w-5 text-lime-600" />${price * quantity}
                    </span>
                </p>
        </div>
    )
}
export default NewInCart