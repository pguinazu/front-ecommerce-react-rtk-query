import { XMarkIcon } from "@heroicons/react/24/solid"

const OrderCard = (props: { product: any; handleDelete: any }) => {
    const { product, handleDelete } = props
    let titleClassName 
    let renderXMarkIcon

    if (handleDelete) {
        renderXMarkIcon = <XMarkIcon
            className='h4 w-4 text-black cursor-pointer'
            onClick={() => handleDelete(product?.id)}
        />
        titleClassName = 'text-sm font-light w-32'
    } else {
        titleClassName = 'text-sm font-light w-full'
    }


    return (
        <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img className="w-full h-full rounded-lg object-cover" src={product?.image} alt={product?.title} />
                </figure>
                <p className={titleClassName}>{product?.title}</p>
            </div>
            <p className='text-md font-bold'>${product?.price}</p>

            {renderXMarkIcon}
        </div>
    )
}

export default OrderCard