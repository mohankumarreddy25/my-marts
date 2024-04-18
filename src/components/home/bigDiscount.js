import React from "react";
import { FaStar } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";
import { IoHeartOutline } from "react-icons/io5";

import { discoutProducts } from "../assets/products";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { CartContext } from "../../context/cartContext";
import { useContext,useEffect,useState,useParams } from "react";
import { newproducts } from "../assets/products";
function BigDiscount(){
    const { addItemToCart,cartItems,increaseItemQuantity } = useContext(CartContext);
    // const [addedProducts, setAddedProducts] = useState({});
    const [isNewProductAdded, setIsNewProductAdded] = useState(false);

        const Notify=()=>{
        toast.success("Product has been added to Cart!", {style:{fontSize:'15px'}});
    }
    const handleAddToCart = (item, quantity) => {
      const isProductInCart = cartItems.some(it => it.id === item.id);

        
    
      console.log('Adding to Cart:', item);
      addItemToCart({
        id: item.id,
        name: item.productName,
        img: item.imgUrl,
        price: item.price,
        quantity: quantity,
      });

  setIsNewProductAdded(1);
  };


    useEffect(()=>{

    },[,cartItems]

    )
    return(
        <div className="BDiscount" style={{backgroundColor:'rgb(244, 247, 253)', height:'max-content'}}>
            <h1>Big Discount</h1>
        <div className="DiscountProducts"> 
            {discoutProducts.map((item, index) => (
        
        <div className="displayCard" id='ecard' key={item.id}>
        <div className="samplediv">
          <div className="discountBg">{item.discount}% off</div>
          <span className="heart"><IoHeartOutline/></span>
        </div>
     <div className="cbody">
        <div className="Dimage">

    <Link to={`/items/${item.id}`} className="product-card">
      <div><img src={item.imgUrl} alt={item.productName} /></div>
      
    </Link>
          
        </div>
        <div className='prohductInfo'>
            <p>{item.productName}
            <div className="star">{Array.from({ length:5 }).map((_, index) => (
        <FaStar key={index} style={{marginRight:"5px"}} size={15}/>
      ))}</div></p>
            
            <div style={{display:"flex", justifyContent:"space-between"}}><h5>${item.price}</h5>
            <button className="Addplus" onClick={Notify}><LuPlus style={{position:"relative", top:"-2px"}}  onClick={() => handleAddToCart(item, 1)}/></button>
            </div>
            </div>
    </div>
    </div>
    ))}
        </div>
        </div>
    )

            
          }
export default BigDiscount;