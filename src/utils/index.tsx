/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: array of objects
 * @returs {number} total price
 */
export const totalPrice = (products: any) => {
    let sum = 0
    products.map((product: any) => sum += product.price)
    return sum
}