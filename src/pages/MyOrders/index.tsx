import { useContext } from 'react'
import Layout from '../../components/Layout'
import OrdersCard from '../../components/OrdersCard'
import { ShoppingCartContext } from '../../context'
import { Link } from 'react-router-dom'

function MyOrders() {

  const context = useContext(ShoppingCartContext)
  const orders = context.order

  return (
    <Layout>
      <div className='flex items-center justify-center w-80 relative'>
        <h1 className='font-semibold'>My orders</h1>
      </div>
      {
        orders?.map((order: any) => (
            <Link key={order?.id} to={`/my-orders/${order?.id}`}>
              <div className='min-w-80 max-w-80'>
                <OrdersCard
                  date={order.date}
                  totalPrice={order.totalPrice}
                  totalProducts={order.totalProducts}
                />
              </div>
            </Link>
        ))
      }
    </Layout>
  )
}

export default MyOrders