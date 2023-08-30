/**
 * 
 * ESTA FUNCION CALCULA EL PRECIO TOTAL DE NUESTRA NUEVA ORDEN
 * @param {Array} products cartProduct: Array of Objects 
 * @returns {number} Total price
 */

export const totalPrice = (products) => {
    let sum = 0
    products.forEach(product => sum += product.price)
    return sum
} 