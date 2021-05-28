export const addPizzaToCart = (pizzaObj) => ({
  type: 'ADD_PIZZA_CART',
  payload: pizzaObj,
});

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

export const plusItemCart = (id, price) => ({
  type: 'PLUS_ITEM_CART',
  payload: { id, price },
});
