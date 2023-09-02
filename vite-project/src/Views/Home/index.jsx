/* eslint-disable react/jsx-key */
import { useContext } from "react"
import { CartContext } from "../../Context"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import CartCard from "../../Components/CartCard"
import "./styles.css"

function Home () {
    const context = useContext(CartContext)

    const renderViewProducts = () => {
        
        if(context.productsFiltered.length > 0){
            return (
                context.productsFiltered.map((product) => (
                    <Card key= {product.id} data={product} />
                ))
            )
        } 
        else {
            return (
                <div className="dontFound w-80 p-4 mb-4 mt-3 font-medium text-md text-cyan-100">We’re sorry we don’t have products for: {context.searchByTitle}</div>             
            )
        }
    }
    return (
        <Layout>
            <div className="flex items-center justify-center relative w-70 mb-4">
                <h1 className="font-medium text-md">Exclusive Products</h1>
            </div>
            <input type="text" placeholder="Search a product" className="rounded-lg border-2 border-cyan-400 text-black w-1/5 p-1 focus:outline-none"
            onChange={(event)=> context.setSearchByTitle(event.target.value)}/>
            <div className="grid gap-3 grid-cols-[repeat(auto-fit,_minmax(180px,_220px))] w-full max-w-screen-md mt-5 items-center justify-center">
                {renderViewProducts()}
            </div>
            <ProductDetail />
            <CartCard />
        </Layout>
    )
}

export default Home