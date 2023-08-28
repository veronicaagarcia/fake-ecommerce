/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react"
import HeaderHome from "../../Components/HeaderHome"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"
import CartCard from "../../Components/CartCard"

function Home () {
    const [products, SetProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => SetProducts(data))
    }, [])

    return (
        <HeaderHome>
            Home
            <div className="grid gap-3 grid-cols-3 w-5/12 mt-5 max-w-screen-md">
                {products.map((product) => (

                    <Card key= {product.id} data={product} />

                ))}
            </div>
            <ProductDetail />
            <CartCard />
        </HeaderHome>
    )
}

export default Home