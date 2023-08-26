/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react"
import HeaderHome from "../../Components/HeaderHome"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail"

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
            <div className="grid gap-6 grid-cols-3 w-full max-w-screen-md">
                {products.map((product) => (

                    <Card key= {product.id} data={product} />

                ))}
            </div>
            <ProductDetail />
        </HeaderHome>
    )
}

export default Home