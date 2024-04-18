

import { FaStar } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";
import { IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function ProductCard({newproducts}){
    const Notify=()=>{
        toast.success("Added 1 item to cart")
    }

    const mobileProducts = newproducts.filter((product) => product.category === 'sofa');
    return(
        <div className="BestSales" style={{backgroundColor:'rgb(244, 247, 253)'}}>
            <h1>Best Sales</h1>
        <div className="DiscountProducts">
             
            {mobileProducts.map((item, index) => (
        
        <div className="displayCard" id='ecard'>
        <div className="samplediv">
          <div className="discountBg" style={{visibility:'hidden'}}>{item.discount}% off</div>
        <div className="heartIcon"><IoHeartOutline/></div>
        </div>
     <div className="cbody">
        <div className="Dimage">
        <Link to={`/items/${item.id}`} className="product-card">
            <div><img src={item.imgUrl} alt={item.productName} /></div>
      
        </Link>
          {/* <div><img src={item.imgUrl}></img></div> */}
        </div>
        <div className='prohductInfo'>
            <p>{item.productName}
            <div className="star">{Array.from({ length:5 }).map((_, index) => (
        <FaStar key={index} style={{marginRight:"5px"}} size={15}/>
      ))}</div></p>
            
            <div style={{display:"flex", justifyContent:"space-between"}}><h5>${item.price}</h5>
            <div className="Addplus" onClick={Notify}><LuPlus style={{position:"relative", left:"5.5px", top:"-1px"}}/></div>
            </div>
            </div>
    </div>
    </div>

    ))}
        </div>
        </div>
    )

}
export default ProductCard;