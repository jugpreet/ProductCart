import React, { useEffect, useState } from 'react'
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Col, Button
} from 'reactstrap'
import { useHistory } from 'react-router-dom'
import { getProducts } from '../apis/api'
import cart from '../assets/cart.png'
import Cart from '../Components/Cart'
const Product = () => {
    const history = useHistory()
    const [products, setProducts] = useState([])
    const [searchProduct, setSearchProduct] = useState([])
    const [cartData, setCartData] = useState([])
    useEffect(() => {
        (async () => {
            const data = await getProducts()
            setProducts(data)
        })()
    }, [])

    const searchItem = (e) => {
        const search = e.target.value
        setSearchProduct(search)
        console.log(search)
        let currentList = []
        if (search === '') {
            currentList = products
        }
        currentList = products.filter((data) => data.title.toLowerCase().includes(search.toLowerCase()))
        setProducts(currentList)
    }

    const addToCart = (e) => {
        setCartData((prev) => [...prev, e])
    }

    const gotToCart = () => {
        console.log('reached')
        history.push('/cart')
        return
    }
    return (
        <div>
            <ul className="ul">
                <li className="logo"><h1>QuickKart</h1></li>
                <li className="li"><div className="imagebox"><img src={cart} className="cart" alt="cart" onClick={() => gotToCart()} /></div></li>
                <li className="li"><button onClick={() => history.push('/contact')}>Contact</button></li>
                <li className="li"><button onClick={() => history.push('/about')}>About</button></li>
                <li className="li"><button onClick={() => history.push('/product')}>Home</button></li>

                <li className="searchbar"> <input type="text" placeholder="Search.." value={searchProduct} onChange={searchItem} /></li>
            </ul>
            <div className="row">
                {products.map((data) => {
                    return (<Col sm='2'>
                        <Card body>
                            {/* <CardImg top src={data.image} alt="Card image cap" /> */}
                            <CardBody>
                                <CardTitle tag="h5">{data.title}</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">${data.price}</CardSubtitle>
                                <div style={{ justifyContent: "space-between", display: "flex" }}>
                                    <span className="wishlist">Add To WishList</span>
                                    <span className="wishlist" onClick={() => addToCart(data.id)}>Add To Cart</span>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>)
                })}
            </div>

        </div>
    )
}
export default Product