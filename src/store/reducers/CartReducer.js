// after showing products then we have to show them in cart
const initState = {
  products: [],
  totalPrice: 0,
  totalQuantities: 0,
};

const CartReducer = (state = initState, action) => {
  let findPro;
  let index;
  switch (action.type) {
    case "ADD_TO_CART":
      //   console.log(action.payload.product.id);when we will add to cart it will increase and will show in console
      //   we can also get data like below one by destructuring which is in productDetail

      const { product, quantity } = action.payload;
      //   console.log(product.id, quantity);
      // the object which is already there donot add it again
      const check = state.products.find(
        (pr) => pr.id === product.id
        // action.payload.product.id
      );
      if (check) {
        return state;
      } else {
        const tPrice = state.totalPrice + product.price * quantity;
        // console.log(tPrice);
        const Tquantities = state.totalQuantities + quantity;
        product.quantity = quantity;
        // so that it will update quantity
        return {
          // now it will show data in redux
          ...state,
          products: [...state.products, product],
          totalPrice: tPrice,
          totalQuantities: Tquantities,
        };
      }
    // the quantity which we want to increase we will find
    // it in initstate products array
    case "INC":
      findPro = state.products.find((product) => product.id === action.payload);
      index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      findPro.quantity += 1;
      state.products[index] = findPro;
      return {
        ...state,
        totalPrice: state.totalPrice + findPro.price,
        totalQuantities: state.totalQuantities + 1,
      };

    // the quantity which we want to increase we will find
    // it in initstate products array

    case "DEC":
      findPro = state.products.find((product) => product.id === action.payload);
      // we want to findout product from its index
      index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      if (findPro.quantity > 1) {
        findPro.quantity -= 1;
        state.products[index] = findPro;
        return {
          ...state,
          totalPrice: state.totalPrice - findPro.price,
          totalQuantities: state.totalQuantities - 1,
        };
      } else {
        return state;
      }
    case "REMOVE":
      findPro = state.products.find((product) => product.id === action.payload);
      // if not equal throw it out if equal then put it in filter variable
      const filter = state.products.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        products: filter,
        totalPrice: state.totalPrice - findPro.price * findPro.quantity,
        totalQuantities: state.totalQuantities - findPro.quantity,
      };

    //  if no case match then default will return state
    default:
      return state;
  }
};
// now we will access this CartReducer in store index.js

export default CartReducer;
