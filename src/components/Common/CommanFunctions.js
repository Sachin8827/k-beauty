export const calculatePrice = (cart) => {
    let sum = 0;
    const prices = cart?.map((item) => item.quantity * item.product.price);
    return prices?.reduce((sum, price) => sum + price, 0);
};