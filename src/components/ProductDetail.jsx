import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        const fetchProductDetail = async () => {
            const response = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
        }

        fetchProductDetail()
    }, [id])

    if (!product) {
        return <div>Loading....</div>
    }

    return (
        <div className='product-detail'>
            <h1>{product.title}</h1>
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.description}</p>
            <p className='price'>Price : {product.price} $</p>
        </div>
    )
}

export default ProductDetail
