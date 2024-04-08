import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home';
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import SignIn from '../SignIn'
import NotFound from '../NotFound'
import Navbar from '../../components/Navbar';
import '../../App.css'
import { ShoppingCartContextProvider } from '../../context';
import CheckoutSideMenu from '../../components/CheckoutSideMenu';
import Clothes from '../Clothes';
import Jewelery from '../Jewelery';
import Electronics from '../Electronics';

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/clothes',
      element: <Clothes />
    },
    {
      path: '/jewelery',
      element: <Jewelery />
    },
    {
      path: '/electronics',
      element: <Electronics />
    },
    {
      path: '/my-account',
      element: <MyAccount />
    },
    {
      path: '/my-orders',
      element: <MyOrders />
    },
    {
      path: '/my-orders/last',
      element: <MyOrder />
    },
    {
      path: '/my-orders/:id',
      element: <MyOrder />
    },
    {
      path: '/sign-in',
      element: <SignIn />
    },
    {
      path: '/*',
      element: <NotFound />
    }
  ])
  return routes;
}

const App = () => {
  return (
    <ShoppingCartContextProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartContextProvider>
  )
}

export default App
