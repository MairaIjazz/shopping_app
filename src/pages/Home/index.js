import React from "react";
import Navbar from "../../components/Common/Navbar";
import Banner from "../../components/Banner";
import Unstitched from "../../components/Unstitched";
import Products from "../../components/Common/Products";
import Footer from "../../components/Common/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Unstitched />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
