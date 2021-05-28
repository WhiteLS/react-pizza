const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };

      const allPizzas = [].concat.apply([], Object.values(newItems));
      const totalPrice = allPizzas.reduce((sum, obj) => obj.price + sum, 0);

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice,
      };
    }

    case 'PLUS_ITEM_CART': {
      const newObjItems = [...state.items[action.payload], state.items[action.payload][0]];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: newObjItems.reduce((sum, obj) => obj.price + sum, 0),
        },
      };

      const allPizzas = [].concat.apply([], Object.values(newItems));
      const totalPrice = newItems.reduce((sum, obj) => obj.price + sum, 0);

      return {
        ...state,
        items: newItems,
        totalCount: allPizzas.length,
        totalPrice,
      };
    }

    case 'CLEAR_CART': {
      return { items: {}, totalPrice: 0, totalCount: 0 };
    }

    default:
      return state;
  }
};

export default cart;
