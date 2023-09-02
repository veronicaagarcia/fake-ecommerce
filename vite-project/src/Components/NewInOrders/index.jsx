/* eslint-disable react/prop-types */
import { useContext } from "react"
import { CartContext } from "../../Context"

const NewInOrders = props => {
    const {totalPrice, id, totalProducts } = props
    const context = useContext(CartContext)
    const date = JSON.stringify(context.order[id].date)

    return (
        <div className="bg-white flex justify-between items-center mb-3 border-2 border-cyan-400 w-90 p-3 rounded-lg hover:shadow-lg hover:shadow-cyan-400/40">
            <p>
                <span className="text-black/80 text-xs mr-2">Date: {date.substring(1,11)}</span>
                <span className="text-black/60 text-xs mr-2">Products: {totalProducts}</span>
                <span className="text-lime-600 text-xs">Total: ${totalPrice}</span>
            </p>
        </div>
    )
}
export default NewInOrders