/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [count, setCount] = useState(0)
    const [productDetailOpen, setProductDetailOpen] = useState(false)
    const OpenCloseProductDetail = () => setProductDetailOpen(!productDetailOpen)
    const [productShowDetail, setProductShowDetail] = useState({})
    const [productsInCart, setProductsInCart] = useState([])
    const [productCartCardOpen, setProductCartCardOpen] = useState(false)
    const OpenCloseProductCartCard = () => setProductCartCardOpen(!productCartCardOpen)
    const [order, setOrder] = useState([])

    return (
        <CartContext.Provider value={{
            count,
            setCount,
            productDetailOpen,
            OpenCloseProductDetail,
            productShowDetail,
            setProductShowDetail,
            productsInCart,
            setProductsInCart,
            productCartCardOpen,
            OpenCloseProductCartCard,
            order,
            setOrder
        }}>
            {children}
        </CartContext.Provider>
    )
}