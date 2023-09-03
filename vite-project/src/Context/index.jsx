/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-dupe-else-if */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react"

export const CartContext = createContext()

export const inLocalStorage = () => {
    const accountInLocalStorage = localStorage.getItem('account')
    const signOutInLocalStorage = localStorage.getItem('signOut')
    let parsedAccount
    let parsedSignOut
  
    if (!accountInLocalStorage) {
      localStorage.setItem('account', JSON.stringify({}))
      parsedAccount = {}
    } else {
      parsedAccount = JSON.parse(accountInLocalStorage)
    }
  
    if (!signOutInLocalStorage) {
      localStorage.setItem('signOut', JSON.stringify(false))
      parsedSignOut = false
    } else {
      parsedSignOut = JSON.parse(signOutInLocalStorage)
    }
  }

export const CartProvider = ({children}) => {
   
    const [products, setProducts] = useState([])
    const [count, setCount] = useState(0)
    const [productDetailOpen, setProductDetailOpen] = useState(false)
    const OpenCloseProductDetail = () => setProductDetailOpen(!productDetailOpen)
    const [productShowDetail, setProductShowDetail] = useState({})
    const [productsInCart, setProductsInCart] = useState([])
    const [productCartCardOpen, setProductCartCardOpen] = useState(false)
    const OpenCloseProductCartCard = () => setProductCartCardOpen(!productCartCardOpen)
    const [order, setOrder] = useState([])
    const [searchByTitle, setSearchByTitle] = useState(null)
    const [productsFiltered, setProductsFiltered] = useState([])
    const [searchByCategory, setSearchByCategory] = useState(null)
    const [account, setAccount] = useState({})
    const [signOut, setSignOut] = useState(false)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => setProducts(data))
    }, [])

    const filteredProductsByTitle = (products, searchByTitle) => {
        return products?.filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    
    const filteredProductsByCategory = (products, searchByCategory) => {
        return products?.filter(product => product.category.toLowerCase() ===(searchByCategory.toLowerCase()))
    }
    
    const filters = (searchType, products, searchByTitle, searchByCategory) => {
        if (searchType === 'TITLE') {
          return filteredProductsByTitle(products, searchByTitle)
        }
    
        if (searchType === 'CATEGORY') {
          return filteredProductsByCategory(products, searchByCategory)
        }
    
        if (searchType === 'TITLE_AND_CATEGORY') {
          return filteredProductsByCategory(products, searchByCategory).filter(product => product.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
    
        if (!searchType) {
          return products
        }
    }
    useEffect(() => {
        if (searchByTitle && searchByCategory) setProductsFiltered(filters('TITLE_AND_CATEGORY', products, searchByTitle, searchByCategory))
        if (searchByTitle && !searchByCategory) setProductsFiltered(filters('TITLE', products, searchByTitle, searchByCategory))
        if (!searchByTitle && searchByCategory) setProductsFiltered(filters('CATEGORY', products, searchByTitle, searchByCategory))
        if (!searchByTitle && !searchByCategory) setProductsFiltered(filters(null, products, searchByTitle, searchByCategory))
    }, [products, searchByTitle, searchByCategory])

    return (
        <CartContext.Provider value={{
            products,
            setProducts,
            count,
            setCount,
            productDetailOpen,
            setProductDetailOpen,
            OpenCloseProductDetail,
            productShowDetail,
            setProductShowDetail,
            productsInCart,
            setProductsInCart,
            productCartCardOpen,
            OpenCloseProductCartCard,
            order,
            setOrder,
            searchByTitle,
            setSearchByTitle,
            productsFiltered,
            setProductsFiltered,
            searchByCategory,
            setSearchByCategory,
            account,
            setAccount,
            signOut,
            setSignOut
        }}>
            {children}
        </CartContext.Provider>
    )
}