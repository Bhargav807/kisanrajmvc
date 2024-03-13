import React from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import { Toaster } from "react-hot-toast";
import "./Homepage.css";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {

    const navigate=useNavigate();

  return (
    <>
      <Header />
      <Toaster />
      <div
        className="container"
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          minHeight: "60vh",
        }}
      >
        <div
          className="searcher m-2 text-center"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <input type="text" placeholder="enter product" className="m-2" />
          <input type="text" placeholder="enter location" className="m-2" />
          
        </div>
        <div>
          <button className="btn btn-md btn-outline-info m-2" style={{width:"4rem",padding:"0.3rem",borderRadius:"0.4rem"}} onClick={()=>{navigate("/dashboard/user/buy-commodity")}}>Buy</button>
          <button className="btn btn-md btn-outline-info m-2" style={{width:"4rem",padding:"0.3rem",borderRadius:"0.4rem"}} onClick={()=>{navigate("/dashboard/user/sell-commodity")}}>Sell</button>
          <button className="btn btn-md btn-outline-info m-2" style={{width:"4rem",padding:"0.3rem",borderRadius:"0.4rem"}} onClick={()=>{navigate("/dashboard/user/hire-equipment")}}>Hire</button>
        </div>
      </div>
      <Footer />
    </>
  );
};
