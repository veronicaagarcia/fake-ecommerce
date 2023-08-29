import {useRoutes, BrowserRouter} from "react-router-dom"
import { CartProvider } from "../../Context"
import Home from "../Home"
import MyAccount from "../MyAccount"
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders"
import NotFound from "../NotFound"
import SingIn from "../SingIn"
import NavBar from "../../Components/NavBar"
import "./App.css"


const Routes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home/> },
    { path: "/MyAccount", element: <MyAccount/> },
    { path: "/MyOrder", element: <MyOrder/> },
    { path: "/MyOrders", element: <MyOrders/> },
    { path: "/MyOrders/last", element: <MyOrder/> },
    { path: "/MyOrders/:id", element: <MyOrder/> },
    { path: "/*", element: <NotFound/> },
    { path: "/SingIn", element: <SingIn/> },
  ])
  return routes
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
      <Routes/>
      <NavBar />
      {/* <CartCard /> */}
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
