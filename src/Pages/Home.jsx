import React from "react";
import Header from "../Components/Header";
import Search from "../Components/Search";
import IntroPost from "../Components/IntroPost";
import Blogs from "../Components/Blogs";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col gap-4 justify-center">
      <Header />
      <Search />
      <IntroPost />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
