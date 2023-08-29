/* eslint-disable react/prop-types */
import { XMarkIcon } from "@heroicons/react/24/solid" 


const NewInCart = props => {
    const {id, image, title, price, quantity, deleteProductCart} = props

    let xCircle 
    if(deleteProductCart){
        xCircle = <XMarkIcon 
        className="h-3 w-3 text-black/50 cursor-pointer hover:h-4 hover:w-4 hover:text-red-500"
        onClick={()=> deleteProductCart(id)}/>
    } 
    return (
        <div className="bg-white flex justify-between items-center rounded-lg p-3 mb-3">
            <div className="flex item-center gap-1">
                <figure className="w-12 h-12">
                    <img  className="w-full h-full object-contain rounded-lg" src={image} alt={title}/>
                </figure>
                <p className="text-sm text-black font-light mt-3">{title.substring(0,15)}</p>
                <p className="text-sm text-black/50 font-light mt-3 ml-2 ">X<span className='text-sm w-4 text-black/50 font-light'> {quantity}</span></p>
            </div>
            <div className="flex item-center gap-2">
                <p className="text-sm text-lime-600 font-medium">${price * quantity}</p>
                {xCircle}
            </div>
        </div>
    )
}
export default NewInCart