const initState = {
  products: [
    {
      id: 1,
      name: "Western Touch",
      price: 4000,
      img: "/model1.jpg",
      desc:
        "Lorem ipsum dolor sit amet,  qui officia deserunt mollit anim id est laborum qui officia deserunt mollit anim id est laborum ",
      quantity: 1,
    },
    {
      id: 2,
      name: "Ethnic",
      price: 4000,
      img: "/model2.jpg",
      desc:
        "Lorem ipsum dolor sit amet,  qui officia deserunt mollit anim id est laborum qui officia deserunt mollit anim id est laborum",
      quantity: 1,
    },
    {
      id: 3,
      name: "Real Glory",
      price: 4000,
      img: "/model3.jpg",
      desc:
        "Lorem ipsum dolor sit amet,  qui officia deserunt mollit anim id est laborum qui officia deserunt mollit anim id est laborum",
      quantity: 1,
    },
    {
      id: 4,
      name: "Rachna",
      price: 4000,
      img: "/model1.jpg",
      desc:
        "Lorem ipsum dolor sit amet,  qui officia deserunt mollit anim id est laborum qui officia deserunt mollit anim id est laborum",
      quantity: 1,
    },
    {
      id: 5,
      name: "Gul Bakht",
      price: 4000,
      img: "/model2.jpg",
      desc:
        "Lorem ipsum dolor sit amet,  qui officia deserunt mollit anim id est laborum qui officia deserunt mollit anim id est laborum",
      quantity: 1,
    },
    {
      id: 6,
      name: "Ethereal",
      price: 4000,
      img: "/model3.jpg",
      desc:
        "Lorem ipsum dolor sit amet,  qui officia deserunt mollit anim id est laborum qui officia deserunt mollit anim id est laborum",
      quantity: 1,
    },
    {
      id: 7,
      name: "Elegant ",
      price: 4000,
      img: "/model1.jpg",
      desc:
        "Lorem ipsum dolor sit amet,  qui officia deserunt mollit anim id est laborum qui officia deserunt mollit anim id est laborum",
      quantity: 1,
    },
    {
      id: 8,
      name: "Soothing",
      price: 4000,
      img: "/model2.jpg",
      desc:
        "Lorem ipsum dolor sit amet,  qui officia deserunt mollit anim id est laborum qui officia deserunt mollit anim id est laborum",
      quantity: 1,
    },
    {
      id: 9,
      name: "Western Touch",
      price: 4000,
      img: "/model3.jpg",
      desc:
        "Lorem ipsum dolor sit amet,  qui officia deserunt mollit anim id est laborum qui officia deserunt mollit anim id est laborum",
      quantity: 1,
    },
    {
      id: 10,
      name: "Ethnic",
      price: 4000,
      img: "/model1.jpg",
      desc:
        "Lorem ipsum dolor sit amet,  qui officia deserunt mollit anim id est laborum qui officia deserunt mollit anim id est laborum",
      quantity: 1,
    },
  ],

  product: {},
};

const ProductsReducer = (state = initState, action) => {
  switch (action.type) {
    case "PRODUCT":
      return {
        ...state,
        product: state.products.find(
          (product) => product.id === parseInt(action.id)
        ),
      };
    default:
      return state;
  }
};

export default ProductsReducer;
