import React, { createContext, useReducer,useState,useEffect } from 'react';

const CartContext = createContext();

const initialState = {
cartItems: [], 
  inputValue:''
};

const cartReducer = (state=initialState, action) => {
  
  switch (action.type) {
    case 'ADD_ITEM':
      
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),};

        // return { items: (state.items || []).filter(item => item.id !== action.payload) };
      
    case 'INCREASE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case 'DECREASE_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
        ).filter(item => item.quantity > 0),
      };
      
      case 'ADD_TO_CART':
        // const { id, quantity } = action.payload;
        const { id, quantity, productName, imgUrl } = action.payload;
        const existingProduct = state.cartItems.find(item => item.id === id);
  
        if (existingProduct) {
          // If the product already exists in the cart, increase the quantity
          return {
            ...state,
            cartItems: state.cartItems.map(item =>
              item.id === id ? { ...item, quantity: item.quantity + quantity } : item
            ),
            totalCount: state.totalCount + action.payload.quantity, // Update total count
          };
        } 
        
        else {
          // If the product is not in the cart, add it with the specified quantity
          return {
            ...state,
            cartItems: [...state.cartItems, { ...action.payload }],
          };
        }
  
      
        case 'UPDATE_ITEM_QUANTITY':
          // const { id, quantity } = action.payload;
    
          return {
            ...state,
            cartItems: state.cartItems.map(item =>
              item.id === id ? { ...item, quantity: quantity } : item  
            ),
          };

      case 'SET_INPUT_VALUE':
      return {
        ...state,
        inputValue: action.payload,
      };

    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [cartValue, setCartValue] = useState(0);
  const [uniqueProductCount, setUniqueProductCount] = useState(0);

  
 useEffect(() => {
    // Calculate the total quantity whenever the cart items change
    const newTotalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
    setCartValue(newTotalQuantity);
  }, [state.cartItems]);

 
  const increaseItemQuantity = (itemId) => {
    // Instead of updating quantity directly in the cart items, dispatch an action
    dispatch({ type: 'INCREASE_QUANTITY', payload: itemId, newProductAdded: false });
  };

  const decreaseItemQuantity = (itemId) => {
    // Instead of updating quantity directly in the cart items, dispatch an action
    dispatch({ type: 'DECREASE_QUANTITY', payload: itemId, newProductAdded: false });
  };

  const addItemToCart = (item) => {
    // Check if the product is already in the cart
    const isProductInCart = state.cartItems.some(cartItem => cartItem.id === item.id);

    if (!isProductInCart) {
      // If it's a new product, add it to the cart and set newProductAdded to true
      dispatch({ type: 'ADD_TO_CART', payload: item, newProductAdded: true });
      setUniqueProductCount((prevCount) => prevCount + 1);
    } else {
      // If it's an existing product, just update the quantity
      dispatch({ type: 'INCREASE_QUANTITY', payload: item.id, newProductAdded: false });
    }
    
  };


const removeItemFromCart = (itemId) => {
  // Remove the item from the cart
  dispatch({ type: 'REMOVE_ITEM', payload: itemId });

  // Decrease uniqueProductCount by 1 when an item is removed
  setUniqueProductCount((prevCount) => prevCount - 1);
};

  const setInputValue = (value) => {
    dispatch({ type: 'SET_INPUT_VALUE', payload: value });
  };

  const getTotalQuantity = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  
  const getTotalAmount = () => {
    return state.cartItems.reduce((total, item) => {
      const itemTotal = (item.price || 0) * (item.quantity || 0);
      console.log('Cart Items:', state.cartItems);
      return total + itemTotal;
    }, 0).toFixed(2);
  };
  

  return (
    <CartContext.Provider
      value={{
        
        cartItems: state.cartItems,
        inputValue: state.inputValue,
        addItemToCart,
        removeItemFromCart,
        increaseItemQuantity,
        decreaseItemQuantity,
        setInputValue,
        getTotalAmount,
        uniqueProductCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
