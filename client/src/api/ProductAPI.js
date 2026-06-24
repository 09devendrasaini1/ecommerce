import { useEffect, useState } from 'react'
import axios from 'axios'

const ProductAPI = () => {

    const [products, setProducts] = useState([]) 

    const getProducts = async () => {
        try {
            const res = await axios.get('/api/products')

            console.log("API Data:", res.data.products)
            
            const updatedProducts = res.data.products.map(p => ({
                ...p,
                checked: false
            }))

            setProducts(updatedProducts)

        } catch (error) {
            console.log("Error:", error)
        }
    }  

    useEffect(() => {
        getProducts()
    }, [])

    const handleCheck = (id) => {
        const updated = products.map(p =>
            p._id === id ? { ...p, checked: !p.checked } : p
        )
        setProducts(updated)
    }

    return {
        products: [products, setProducts],
        handleCheck   
    }
}

export default ProductAPI