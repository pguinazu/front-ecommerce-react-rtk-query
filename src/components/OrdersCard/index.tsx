import { ChevronRightIcon, ShoppingBagIcon, CalendarIcon } from "@heroicons/react/24/solid";
import { Moment } from "moment";

const OrdersCard = (props: { totalPrice: any; totalProducts: any, date: Moment }) => {
    const { totalPrice, totalProducts, date } = props
    return (
        <div className="flex justify-between items-center my-3 border border-spacing-0.5 rounded-lg px-4 py-1">
            <p>
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <CalendarIcon className='h4 w-4 text-black cursor-pointer'/>
                        <span className="text-black text-md py-0.5 m-2">{date.format('ll')}</span>
                    </div>
                    <div className="flex flex-row">
                        <ShoppingBagIcon className='h4 w-4 text-black cursor-pointer'/>
                        <span className="text-black text-md py-0.5 ml-2">{totalProducts}</span>
                    </div>
                </div>
            </p>
            <p className="ml-10">
                <div className="flex flex-row">
                    <span className="text-black text-lg font-bold px-2 py-0.5 m-2">${totalPrice?.toFixed(2)}</span>
                    <ChevronRightIcon className='h4 w-4 text-black cursor-pointer' />
                </div>
            </p>
        </div>
    )
}

export default OrdersCard