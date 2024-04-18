import { useState } from "react";
import Header from "./header/Header";
import Discount from "./home/discount";
import Options from "./home/options";
import BigDiscount from "./home/bigDiscount";
import NewArrivals from "./home/newArrivals";
import BestSales from "./home/bestSales";
import Footer from "./footer";
import Carousel from "./carousel/carousel";
import {SliderData} from './assets/products';
import { ProductProvider } from "../context/productContext";

const Home=()=>{
    // const SliderData=[
    //     { id: 1, content: 'Item 1 Content', image: 'https://placekitten.com/800/400' },
    //     { id: 2, content: 'Item 2 Content', image: 'https://placekitten.com/800/401' },
    //     // Add more items as needed
    //   ];
    return(
        <div>
            <Header/>
            {/* <Discount/> */}
            <Carousel items={SliderData}/>
            <Options/>
            <BigDiscount/>
            <NewArrivals/>
            <BestSales/>
            <Footer/>
        </div>
    )
}
export default Home;