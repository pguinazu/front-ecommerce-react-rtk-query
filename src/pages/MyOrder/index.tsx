import { useContext } from "react"
import Layout from "../../components/Layout"
import { ShoppingCartContext } from "../../context"
import OrderCard from "../../components/OrderCard"
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'

const MyOrder = () => {
  const context = useContext(ShoppingCartContext)
  
  const showOrder = () => {
    const orderLastProducts = context.order[context.order.length - 1]?.products
    const currentPath = window.location.pathname
    const index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
    const selectedOrder = context.order?.filter((order: any) => order.id === index)

    if (selectedOrder?.length) {
      return (
        selectedOrder[0]?.products?.map((product: any) => (
          <div>
            <OrderCard
              key={product.id}
              product={product} handleDelete={undefined}
            />
          </div>
        ))
      )
    } else {
      return (
        orderLastProducts?.map((product: any) => (
          <div>
            <OrderCard
              key={product.id}
              product={product} handleDelete={undefined}
            />
          </div>
        ))
      )
    }
  }



  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-6'>
        <Link to={'/my-orders'} className='absolute left-0'>
          <ChevronLeftIcon className='h4 w-4 text-black cursor-pointer' />
        </Link>
        <h1 className='font-semibold'>My order</h1>

      </div>
      <div className='min-w-2xl max-w-2xl'>
        {showOrder()}

      </div>
    </Layout>
  )
}

export default MyOrder