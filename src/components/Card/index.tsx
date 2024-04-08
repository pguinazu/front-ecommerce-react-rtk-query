import { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import { CheckIcon, PlusIcon } from '@heroicons/react/24/solid'

function Card(product: any) {

    const context: any = useContext(ShoppingCartContext)

    const showProduct = (productDetail: any) => {
        context.closeCheckoutSideMenu()
        context.openProducDetail()
        context.setProductToShow(productDetail)
    }

    const addProduct = (e: React.MouseEvent<Element, MouseEvent>) => {
        e.stopPropagation()
        context.addProduct()
        context.setProductsInCart([...context.productsInCart, product?.product])
        context.closeProducDetail()
        context.openCheckoutSideMenu()
    }

    const renderIcon = (id: string) => {
        const isInCart = context.productsInCart.filter((product: any) => product.id === id).length > 0
        if (isInCart) {
            return (
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
                    <CheckIcon className="h-6 w-6 text-black"></CheckIcon>
                </div>
            )
        } else {
            return (
                <div onClick={(event) => addProduct(event)}
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
                    <PlusIcon className="h-6 w-6 text-black"></PlusIcon>
                </div>
            )
        }
        
    }

    return (
        <div
            className="bg-white border border-spacing-0.5 cursor-pointer w-56 h-60 rounded-lg"
            onClick={() => showProduct(product.product)}>
            <figure className="relative border-b-spacing-0.5 mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs px-2 py-0.5 m-2">{product?.product?.category}</span >
                <img className="w-full h-full object-cover rounded-lg" src={product?.product?.image} alt={product?.product?.title} />
                <hr />
                {renderIcon(product?.product?.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light px-2 mt-1 block w-100 overflow-hidden whitespace-nowrap overflow-ellipsis">
                    {product?.product?.title}
                </span>
                <span className="text-lg font-medium px-2">
                    ${product?.product?.price}
                </span>
            </p>
        </div>
    )
}

export default Card