import React from "react";
import { IoCar } from "react-icons/io5";
import { IoCard } from "react-icons/io5";
import { FaShieldAlt } from "react-icons/fa";
import { IoHeadset } from "react-icons/io5";

const Data = [
    {
      icon: <IoCar name="car"/>,
      title: "Free Shipping",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#fdefe6",
    },
    {
      icon: <IoCard name="card"/>,
      title: "Safe Payment",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#ceebe9",
    },
    {
      icon: <FaShieldAlt name="shield-half-outline"/>,
      title: "Secure Payment",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#e2f2b2",
    },
    {
      icon: <IoHeadset name="headset"/>,
      title: " Back Guarantee",
      subtitle: "Lorem ipsum dolor sit amet.",
      bg: "#d6e5fb",
    },
  ];
  
const Options=()=>{
    return(
        <div className="displayOptions">
            
           {Data.map((item, index) => (
        
          <div className="OptionsCard" id='ecard' style={{backgroundColor:item.bg}}>
          <div className="iconBg">{item.icon}</div>
      <div className="cbody">
          <h5>{item.title}</h5>
          <div className='bookDetails'>
              {item.subtitle}              
          </div>
      </div>
      </div>

      ))}
            {/* <div className="card1">
                <div id='circle'><IoCar size={23}/></div>
                <p id="CardTitle">Free Shipping</p>
                <p id='Cardinfo'>Lorem ipsum dolor sit amet.</p>
            </div> */}


            {/* <div className="card2">
                <div id='circle'><IoCard size={23}/></div>
                <p id="CardTitle">Safe Payment</p>
                <p id='Cardinfo'>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="card3">
                <div id='circle'><FaShieldAlt size={23}/></div>
                <p id="CardTitle">Secure Payment</p>
                <p id='Cardinfo'>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="card4">
                <div id='circle'><IoHeadset size={23}/></div>
                <p id="CardTitle">Back Guarntee</p>
                <p id='Cardinfo'>Lorem ipsum dolor sit amet.</p>
                </div> */}
        </div>)
    
}
export default Options;