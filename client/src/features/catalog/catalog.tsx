import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Product } from "../../Interface/IProduct";
import ProductList from "./productList";

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/Products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <>
            <ProductList products={products} />
            <Button variant='contained'>Add new product</Button>
        </>
    )
}