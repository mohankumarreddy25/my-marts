
import headeset from '../assets/Images/wireless-01.png';
const Discount = () => {
    return (
      <div className="discount">
        <div className="discountInfo"><h1>50% Off For Your First Shopping</h1>
        <p>Lorem ipsum dolor sit amet, consectuter adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis</p>
        <p id="visitCollection">Visit Collection</p>
      </div>
        <div className="discountGadget">
          <img src={headeset} id="headSetImg"></img>
        </div>
      </div>
    );
  };
  
  export default Discount;
  