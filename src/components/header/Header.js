import { Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { IoBag } from "react-icons/io5";
import { HiMiniShoppingCart } from "react-icons/hi2";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const Header=()=>{
  const { uniqueProductCount } = useContext(CartContext);


    return(
        <div className="headerContent">
               <nav class="navbar navbar-expand-lg fixed-top" style={{backgroundColor:"white"}}>
               <h4 id='title'><IoBag size={25} style={{position:'relative', top:'-2px'}}/>Mart</h4>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      
      <Link className="nav-item nav-link" to="/" style={{color:'black'}}>Home</Link>
      <Link className="nav-item nav-link" to="/shop" style={{color:'black'}}>Shop</Link>
      <Link className="nav-item nav-link" to="/cart" style={{color:'black'}}>Cart</Link>
      <Link className="" to='/'><BsFillPersonFill style={{position:'relative', top:'6px', color:'black'}} size={22}/></Link>
      <Link className="" to='/cart'><HiMiniShoppingCart style={{position:'relative', top:'6px', left:'15px', color:'black'}} size={22}/></Link>
    <span style={{backgroundColor:'navy',position:'relative',top:'5px',left:'-13px', width:'15px', height:'15px', borderRadius:'50%', fontSize:'12px', textAlign:'center', color:'white'}}>{uniqueProductCount}</span>
    </div>
  </div>
</nav>

        </div>
    )
}
export default Header;