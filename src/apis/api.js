const getProducts = () => {
    const response = fetch('https://fakestoreapi.com/products/').then(response => response.json())
    return response

}

export { getProducts }