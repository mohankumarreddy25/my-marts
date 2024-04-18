import { newproducts } from "./assets/products";
import { useParams } from 'react-router-dom';

import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/cartContext';

import Header from "./header/Header";
import Footer from "./footer";

import table from './assets/Images/table.jpg'
import { FaStar } from "react-icons/fa";

import { LuPlus } from "react-icons/lu";
import { IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Cart from "./Cart/Cart";

const ProductDetails = ({updateCartValue }) => {
  const {itemId} = useParams();
  const { cartItems, addItemToCart, updateItemQuantity, state, dispatch} = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [isNewItem, setIsNewItem] = useState(1); // Assume it's a new item initially

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const cartItem = cartItems.find(cItem => cItem.id === parseInt(itemId, 10));

    const isItemInCart = !!cartItem;

    const product = { id: itemId, name: 'Dummy Product', price: 10.99 };
    // Find the item in the cart with the matching productId
    // const cartItem = cartItems.find(cItem => cItem.id === parseInt(itemId, 10));

    // Check if the item is already in the cart
    // const isItemInCart = !!cartItem;

    // If it's already in the cart, set isNewItem to false
    setIsNewItem(!isItemInCart);

    // Set the quantity based on the cartItem or default to 1
    setQuantity(cartItem ? cartItem.quantity : 1);
  }, [itemId, cartItems]);




const handleQuantityChange = (e) => {
  const inputQuantity = parseInt(e.target.value, 10);
  setQuantity(isNaN(inputQuantity) ? 1 : inputQuantity);
};

 const handleAddToCart = () => {
    const productToAdd = {
      id: selectedCard.id,
      name: selectedCard.productName,
      price: selectedCard.price,
      quantity: parseInt(inputValue, 10) || 1, // Use the input value or default to 1
      img: selectedCard.imgUrl
    };

    if (isNewItem) {
      addItemToCart(productToAdd);
      setIsNewItem(false);
    } else {
      updateItemQuantity(itemId, productToAdd.quantity);
    }

    setQuantity(1);
    setInputValue(0); // Reset input value
  };
 

  const cartItem = cartItems.find(cItem => cItem.id === parseInt(itemId, 10));
  const isItemInCart = !!cartItem;

  // const selectedCard = isItemInCart ? cartItem : newproducts.find((card) => card.id === itemId);
  const selectedCard = newproducts.find((card) => card.id === itemId);


 

  const recommendedProducts = newproducts.filter((p) => p.category === selectedCard.category && p.id !== itemId);

  return (
    <div className="product-details">
      <div className="Pagebackground">
          <Header/>
          <img src={table} id="table"></img>
          <h1 id="producttitle">{selectedCard.productName}</h1></div>
      <div className="productInfo">
            <div className="productImg">
              <img src={selectedCard.imgUrl} id="product"></img>
            </div>
            <div className="productDescription">
              <h4>{selectedCard.productName}</h4>
              <div className="star">{Array.from({ length:5 }).map((_, index) => (
                   <FaStar key={index} style={{marginRight:"5px"}} size={15}/>
              ))}</div>
              <div className="Rating">{selectedCard.avgRating} ratings</div>

              <div className="priceCategory">
                  <h5 style={{fontSize:'23px'}}>${selectedCard.price}</h5>
                  <p style={{position:'relative', top:'5px'}}>category:{selectedCard.category}</p>
              </div>
              <p style={{color:'black'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!</p>
               <input type="number" id="Count" value={inputValue} onChange={handleInputChange} min="1"  />
               
               <button id="AddToCart" onClick={handleAddToCart} disabled={!isNewItem}>Add To Cart</button>
            </div>

            
      </div>
      

      <div className="detailedDescription">
        <p style={{color:'black', fontWeight:'500'}}>Description</p> 
        <p>{selectedCard.description}</p>
      </div>

{/* ---------------------     recommendedProducts     ----------------------- */}
<p style={{fontSize:'25px', padding:'20px 0px 0px 80px', margin:'0px', fontWeight:'500'}}>You might also like</p>
<div className="recommendedProducts" style={{marginBottom:'40px'}}>

{recommendedProducts.map((product) => (         

            <div className="displayCard" id='ecard' key={product.id} >
        <div className="samplediv" >
          <div className="discountBg" style={{visibility:'hidden'}}>{product.discount}% off</div>
          <span className="heart"><IoHeartOutline/></span>
        </div>
     <div className="cbody">
        <div className="Dimage">

    <Link to={`/items/${product.id}`} className="product-card">
      <div><img src={product.imgUrl} alt={product.productName} /></div>
      
    </Link>
          
        </div>
        <div className='prohductInfo'>
            <p>{product.productName}
            <div className="star">{Array.from({ length:5 }).map((_, index) => (
        <FaStar key={index} style={{marginRight:"5px"}} size={15}/>
      ))}</div></p>
            
            <div style={{display:"flex", justifyContent:"space-between"}}><h5>${product.price}</h5>
            <div className="Addplus"><LuPlus style={{position:"relative", left:"5.5px", top:"-1px"}}/></div>
            </div>
            </div>
    </div>
    </div>
          ))}
</div>

      <Footer/>      
    </div>
  );
};

export default ProductDetails;