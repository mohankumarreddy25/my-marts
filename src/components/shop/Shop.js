import React,{useState} from 'react';
import table from '../assets/Images/table.jpg';
import { newproducts } from '../assets/products';

import { FaStar } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";
import { IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import Header from '../header/Header';
import Footer from '../footer';



function Shop(){
    const[data, setData] = useState(newproducts);
    const[search,setSearch] =useState('');
    const filterResult = (catItem) => {
        const result = newproducts.filter((curData) => {
            return curData.category === catItem;
        });
        setData(result);
    };

    const handleSearch = (event) => {
        const searchValue = event.target.value;
        setSearch(searchValue);
        const filteredData = newproducts.filter((product) =>
            product.productName.toLowerCase().includes(searchValue.toLowerCase())
        );
        setData(filteredData);
    };

    return(
        <>

        <div className='Pagebackground'>

                <img src={table} alt="" className='halfImage' id="table"/>
                <h1 id="producttitle">Product</h1>

        <div className='dropdown-Container'>
                    <div className='row'>
                        <select className='dropdown' onChange={(e) => filterResult(e.target.value)}>
                            <option value="">Filter By Category</option>
                            <option value="sofa">sofa</option>
                            <option value="chair">chair</option>
                            <option value="watch">watch</option>
                            <option value="mobile">Mobile</option>
                            <option value="wireless">wireless</option>
                        </select>
                       
                    </div>
                </div>
        <div className='searchbar'>
            <input type="text" value={search} onChange={handleSearch}  placeholder='Search....'  />

            
        </div>

       </div>
       <div className='productcards' style={{marginBottom:'40px'}}>

{data.map((values) => {

    return(
        <>
        
  <div className="displayCard" id='ecard' key={values.id} >
        <div className="samplediv" >
          <div className="discountBg" style={{visibility:'hidden'}}>{values.discount}% off</div>
          <span className="heart"><IoHeartOutline/></span>
        </div>
     <div className="cbody">
        <div className="Dimage">

    <Link to={`/items/${values.id}`} className="product-card">
      <div><img src={values.imgUrl} alt={values.productName} /></div>
      
    </Link>
          
        </div>
        <div className='prohductInfo'>
            <p>{values.productName}
            <div className="star">{Array.from({ length:5 }).map((_, index) => (
        <FaStar key={index} style={{marginRight:"5px"}} size={15}/>
      ))}</div></p>
            
            <div style={{display:"flex", justifyContent:"space-between"}}><h5>${values.price}</h5>
            <div className="Addplus"><LuPlus style={{position:"relative", left:"5.5px", top:"-1px"}}/></div>
            </div>
            </div>
    </div>
    </div>
        
        </>
    )
})}          
    </div>

    <Footer />
       
        </>
    )
}

export default Shop;

