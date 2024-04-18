
import React,{useContext,useState} from "react";
import { FaStar } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";
import { IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { newproducts } from "../assets/products";
import { ToastContainer, toast } from "react-toastify";
import { CartContext } from "../../context/cartContext";


function NewArrivals(){
    const { addItemToCart,cartItems,increaseItemQuantity } = useContext(CartContext);
    const [addedProducts, setAddedProducts] = useState({});
   

    const mobileProducts = newproducts.filter((product) => product.category === 'wireless'||product.category === 'mobile');
    const Notify=()=>{
        toast.success("Product has been added to Cart!", {style:{fontSize:'15px'}})
    }
    const handleAddToCart = (item, quantity) => {
        const isProductInCart = cartItems.some(it => it.id === item.id);
  
      if (!isProductInCart && !addedProducts[item.id]) {
        // If the product is not in the cart, increase the count
      
        console.log('Adding to Cart:', item);
        addItemToCart({
          id: item.id,
          name: item.productName,
          img: item.imgUrl,
          price: item.price,
          quantity: quantity,
        });
      setAddedProducts(prevProducts => ({
        ...prevProducts,
        [item.id]: true,
      }));
    } else{
      increaseItemQuantity(1);
    }
      
    };

    return(
        <div className="newArrivals">
            <h1>New Arrivals</h1>
        <div className="DiscountProducts">
             
            {mobileProducts.map((item, index) => (
        
        <div className="displayCard" id='ecard'>
        <div className="samplediv">
          <div className="discountBg" style={{visibility:'hidden'}}>{item.discount}% off</div>
        <div className="heart"><IoHeartOutline/></div>
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
            <div className="Addplus" onClick={Notify}><LuPlus style={{position:"relative", left:"5.5px", top:"-1px"}} onClick={() => handleAddToCart(item, 1)}/></div>
            </div>
            </div>
    </div>
    </div>

    ))}
        </div>
        </div>
    )
}
export default NewArrivals;

