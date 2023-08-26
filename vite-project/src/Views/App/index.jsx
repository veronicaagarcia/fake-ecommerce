import {useRoutes, BrowserRouter} from 'react-router-dom';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SingIn from '../SingIn';
import NavBar from '../../Components/NavBar';
import './App.css';

const Routes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home/> },
    { path: '/MyAccount', element: <MyAccount/> },
    { path: '/MyOrder', element: <MyOrder/> },
    { path: '/MyOrders', element: <MyOrders/> },
    { path: '/*', element: <NotFound/> },
    { path: '/SingIn', element: <SingIn/> },
  ])
  return routes
}

function App() {
  return (
    <BrowserRouter>
    <Routes/>
    <NavBar />
    </BrowserRouter>
  )
}

export default App
