import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext<any>(null)

export const ShoppingCartContextProvider = ({children}: any) => {
    // Shopping Cart - Increment counter
    const [count, setCount] = useState<number>(0)

    // Product Detail - Open Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState<boolean>(false)
    const openProducDetail = () => setIsProductDetailOpen(true)
    const closeProducDetail = () => setIsProductDetailOpen(false)
    const addProduct = () => setCount(count + 1);
    
    // Product Detail - Product to show
    const [productToShow, setProductToShow] = useState({})
    
    // Shopping cart - Add products to cart
    const [productsInCart, setProductsInCart] = useState<Array<Object>>([])
    console.log('productos agregados al carrito: ', productsInCart)

    // Shopping cart - Order
    const [order, setOrder] = useState<Array<Object>>([])
    console.log('orderToAdd: ', order);
    

    // Checkout Side Menu - Open/Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState<boolean>(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    return (
        <ShoppingCartContext.Provider value = {{
            count,
            setCount,
            addProduct,
            isProductDetailOpen,
            openProducDetail,
            closeProducDetail,
            productToShow,
            setProductToShow,
            productsInCart,
            setProductsInCart,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}