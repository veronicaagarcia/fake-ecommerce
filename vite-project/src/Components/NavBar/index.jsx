/* eslint-disable react/no-unescaped-entities */
import { ShoppingCartIcon } from "@heroicons/react/24/solid"
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../Context"

function NavBar () {
    const textDecoration = 'underline underline-offset-4'
    const context = useContext(CartContext)

    return (
        <nav className="flex items-center justify-between fixed z-2 top-2 w-full py-5 px-3 text-xs">
            <ul className='flex gap-2 items-center'>
                <li>
                    <NavLink className="font-bold cursor-none text-xs mt-0 text-cyan-400">
                       Shop
                    </NavLink>
                </li>
                <li className="hover:text-cyan-400">
                    <NavLink className={({isActive})=> isActive ? textDecoration : undefined} to="/"
                    onClick={()=>context.setSearchByCategory()} >
                        All
                    </NavLink>
                </li>
                <li className="hover:text-cyan-400">
                    <NavLink className={({isActive})=> isActive ? textDecoration : undefined } to="/electronics"
                    onClick={()=>context.setSearchByCategory("electronics")} >
                        Electronics
                    </NavLink>
                </li>
                <li className="hover:text-cyan-400">
                    <NavLink className={({isActive})=> isActive ? textDecoration : undefined } to="/jewelery" 
                    onClick={()=>context.setSearchByCategory("jewelery")}>
                        Jewelery
                    </NavLink>
                </li>
                <li className="hover:text-cyan-400">
                    <NavLink className={({isActive})=> isActive ? textDecoration : undefined } to="/menClothing"
                    onClick={()=>context.setSearchByCategory("men's clothing")} >
                        Men's clothing
                    </NavLink>
                </li>
                <li className="hover:text-cyan-400">
                    <NavLink className={({isActive})=> isActive ? textDecoration : undefined } to="/womenClothing"
                    onClick={()=>context.setSearchByCategory("women's clothing")} >
                        Women's clothing
                    </NavLink>
                </li>
            </ul>
            <ul className='flex gap-2 items-center'>
                <li>
                    <NavLink className="font-extralight font-xs text-white/60" to="/" >
                       veroagarcia90@gmail.com
                    </NavLink>
                </li>
                <li className="hover:text-cyan-400">
                    <NavLink className={({isActive})=> isActive ? textDecoration : undefined } to="/MyOrders" >
                        My orders
                    </NavLink>
                </li>
                <li className="hover:text-cyan-400">
                    <NavLink className={({isActive})=> isActive ? textDecoration : undefined } to="/MyAccount" >
                        My account
                    </NavLink>
                </li>
                <li className="hover:text-cyan-400">
                    <NavLink className={({isActive})=> isActive ? textDecoration : undefined } to="/SingIn" >
                        Sing in
                    </NavLink>
                </li>
                <li className="hover:text-cyan-400">
                    <NavLink className="flex item-center {({isActive})=> isActive ? textDecoration : undefined }" to="/MyOrder" >
                        <div>
                            {context.count}
                        </div>
                        <ShoppingCartIcon  className="h-4 w-4 text-xs cursor-pointer" /> 
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;