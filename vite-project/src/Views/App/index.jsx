import { useContext } from 'react'
import {useRoutes, BrowserRouter, Navigate} from "react-router-dom"
import { CartProvider, inLocalStorage, CartContext } from "../../Context"
import Home from "../Home"
import MyAccount from "../MyAccount"
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders"
import NotFound from "../NotFound"
import SignIn from "../SignIn"
import NavBar from "../../Components/NavBar"
import "./App.css"

const Routes = () => {
  const context = useContext(CartContext)
  
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  
  const signOut = localStorage.getItem('signOut')
  const parsedSignOut = JSON.parse(signOut)
  
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = Object.keys(context.account).length === 0
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
  const isUserSignOut = context.signOut || parsedSignOut

  let routes = useRoutes([
    { path: "/", element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={'/SignIn'} /> },
    { path: "/electronics", element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={'/SignIn'} />},
    { path: "/jewelery", element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={'/SignIn'} />},
    { path: "/menClothing", element: hasUserAnAccount && !isUserSignOut ? <Home/> : <Navigate replace to={'/SignIn'} /> },
    { path: "/womenClothing", element: hasUserAnAccount && !isUserSignOut ?<Home/> : <Navigate replace to={'/SignIn'} /> },
    { path: "/MyAccount", element: <MyAccount/> },
    { path: "/MyOrder", element: <MyOrder/> },
    { path: "/MyOrders", element: <MyOrders/> },
    { path: "/MyOrders/last", element: <MyOrder/> },
    { path: "/MyOrders/:id", element: <MyOrder/> },
    { path: "/*", element: <NotFound/> },
    { path: "/SignIn", element: <SignIn/> },
  ])
  return routes
}

function App() {
  inLocalStorage()
  return (
    <CartProvider>
      <BrowserRouter>
      <Routes/>
      <NavBar />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
