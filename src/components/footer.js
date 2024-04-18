import { IoBag } from "react-icons/io5";
function Footer(){
    return(
        <div className="Footer">
            <div className="mart">
            <h4><IoBag size={25} style={{position:'relative', top:'-2px'}}/>Mart</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            </div>
            <div className="AboutUS">
                <h5>About Us</h5>
                <p>Careers</p>
                <p>Our Stores</p>
                <p>Our Cares</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>
            <div className="CustomerCare">
            <h5>Customer Care</h5>
                <p>Help Center</p>
                <p>How to Buy</p>
                <p>Track Your Order</p>
                <p>Corporate & Bulk Purchasing</p>
                <p>Returns & Refunds</p>
            </div>
            <div className="Contactus">
                <h5>Contact Us</h5>
                <p>70 Washington Square South, New York, NY 10012, United States</p>
                <p>Email: example@gmail.com</p>
                <p>Phone: +1 1123 456 780</p>
            </div>
        </div>
    )
}
export default Footer;