import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import './styles.css'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'
import { Link } from 'react-router-dom'
import moment from 'moment'

const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext)
  const products = context.productsInCart
  const date = moment()

  const handleCheckout = () => {
    const orderToAdd = {
      id: self.crypto.randomUUID(),
      date: date,
      products: products,
      totalProducts: products?.length,
      totalPrice: totalPrice(products)
    }
    context.setOrder([...context.order, orderToAdd])
    context.setProductsInCart([])
    context.closeCheckoutSideMenu()
  }

  const handleDeleteProduct = (id: string) => {
    const filteredProducts = context.productsInCart.filter((product: any) => product.id !== id)
    context.setProductsInCart(filteredProducts)
  }

  return (
    <aside className={context?.isCheckoutSideMenuOpen ? `checkout-side-menu flex flex-col fixed right-0 border border-spacing-0.5 rounded-lg bg-white` : 'hidden'}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <button className='cursor-pointer' onClick={() => context.closeCheckoutSideMenu()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className='px-6 overflow-y-scroll flex-1'>
        {
          products?.map((product: any) => (
            <OrderCard key={product.id} product={product} handleDelete={handleDeleteProduct} />
          ))
        }
      </div>
      <div className='px-6 mt-2 mb-3'>
        <p className='flex justify-between items-center'>
          <span className='font-light'>Total:</span>
          <span className='font-bold text-3 mr-5'>${totalPrice(products)}</span>
        </p>
        <Link to={'/my-orders/last'}>
          <button className='bg-black py-3 text-white w-full rounded-lg mt-3' onClick={() => handleCheckout()}>
            Checkout
          </button>
        </Link>
      </div>

    </aside>
  )
}

export default CheckoutSideMenu