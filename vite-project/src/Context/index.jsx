/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [count, setCount] = useState(0)
    const [productDetailOpen, setProductDetailOpen] = useState(false)
    const OpenCloseProductDetail = () => setProductDetailOpen(!productDetailOpen)

    return (
        <CartContext.Provider value={{
            count,
            setCount,
            productDetailOpen,
            OpenCloseProductDetail
            
        }}>
            {children}
        </CartContext.Provider>
    )
}