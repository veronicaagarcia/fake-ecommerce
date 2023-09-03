import {useRoutes, BrowserRouter} from "react-router-dom"
import { CartProvider } from "../../Context"
import Home from "../Home"
import MyAccount from "../MyAccount"
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders"
import NotFound from "../NotFound"
import SignIn from "../SignIn"
import NavBar from "../../Components/NavBar"
import "./App.css"


const Routes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home/> },
    { path: "/", element: <Home/> },
    { path: "/electronics", element: <Home/> },
    { path: "/jewelery", element: <Home/> },
    { path: "/menClothing", element: <Home/> },
    { path: "/womenClothing", element: <Home/> },
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
