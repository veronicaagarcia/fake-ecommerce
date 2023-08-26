/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
function NavBar () {

    const textDecoration = 'underline underline-offset-4';

    return (
        <nav className="flex items-center justify-between  fixed z-2 top-3 w-full py-5 px-8 text-sm">
            <ul className='flex gap-3 items-center'>
                <li>
                    <NavLink className="font-bold text-lg" to="/" >
                       Shopi
                    </NavLink>
                </li>
                <li className="hover:text-cyan-400">
                    <NavLink className={({isActive})=> isActive ? textDecoration : undefined} to="/" >
                        All
                    </NavLink>
                </li>
                <li className="hover:text-cyan-400">
                    <NavLink className={({isActive})=> isActive ? textDecoration : undefined } to="/jewelery" >
                        Jewelery
                    </NavLink>
                </li>
                <li className="hover:text-cyan-400">
                    <NavLink className={({isActive})=> isActive ? textDecoration : undefined } to="/electronics" >
                        Electronics
                    </NavLink>
                </li>
                <li className="hover:text-cyan-400">
                    <NavLink className={({isActive})=> isActive ? textDecoration : undefined } to="/menClothing" >
                        Men's clothing
                    </NavLink>
                </li>
                <li className="hover:text-cyan-400">
                    <NavLink className={({isActive})=> isActive ? textDecoration : undefined } to="/womenClothing" >
                        Women's clothing
                    </NavLink>
                </li>
                {/* <li className="hover:text-cyan-400">
                    <NavLink className={({isActive})=> isActive ? textDecoration : undefined } to="/others" >
                        Others
                    </NavLink>
                </li> */}
            </ul>
            <ul className='flex gap-3 items-center'>
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
                    <NavLink className={({isActive})=> isActive ? textDecoration : undefined } to="/MyOrder" >
                        🛒 0
                    </NavLink>
                </li>
            </ul>
        </nav>

    )
}

export default NavBar;