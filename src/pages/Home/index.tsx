import { useState, useContext } from 'react'
import Card from "../../components/Card"
import Layout from "../../components/Layout"
import ProductDetail from '../../components/ProductDetail';
import { ShoppingCartContext } from '../../context';
import { useGetProductsQuery } from '../../services/productsService';

function Home() {
  
  const context = useContext(ShoppingCartContext)

  const { data: products } = useGetProductsQuery()
  const [filteredByTitleProducts, setFilteredByTitleProducts] = useState<any>([])

  const handleChange = (title: string) => {
    const fileredProducts = products?.filter((product: any) => product?.title?.toLowerCase().includes(title?.toLowerCase()))
        setFilteredByTitleProducts([fileredProducts])
  }

  const renderHomeCards = () => {
    if (filteredByTitleProducts?.length) {
      return (
        filteredByTitleProducts[0]?.map((product: any, index: any) => (
          <Card key={index} product={product} />
        ))
      )
    } else {
      return (
        products?.map((product: any, index: any) => (
          <Card key={index} product={product} />
        ))
      )
    }
  }

  return (
    <Layout>
      <div className='flex items-center justify-center w-80 relative mb-4'>
        <h1 className='font-semibold'>Exclusive Products</h1>
      </div>
      <input 
        className='rounded-lg border border-spacing-0.5 w-1/4 p-4 mb-8 focus:outline-none'
        type="text" 
        placeholder='Search a product'
        onChange={(event) => handleChange(event.target.value)}
      />
      <div className='grid gap-20 grid-cols-4 w-full max-w-screen-lg'>
        {renderHomeCards()}
      </div>
      {context?.isProductDetailOpen &&
        <ProductDetail />
      }
    </Layout>
  )
}

export default Home