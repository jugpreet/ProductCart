import React, { createContext } from 'react';


const GlobalContext = createContext()

const GlobalProvider = () => {
    const [cartData, setCartData] = useState([])
    const [productData, setproductData] = useState([])


    const value = useMemo(() => ({
        cartData,
        setCartData,
        productData, setproductData
    }), [cartData, productData])


    return (
        <GlobalContext.Provider value={value}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalProvider