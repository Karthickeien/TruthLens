import React, { useEffect, useState } from "react";
import "./Home.scss";
import Tabs from "../../components/Tabs/Tabs";

import IMG from '../../assets/undraw_surveillance_re_8tkl.svg'
const Home = () => {
  return (
    <div className="home">
      <div className="sec-1">
        <h1 className="main-txt">
          Expose the <span className="grad">Reality</span> : Reveal <br></br>
          Deepfake Media
        </h1>

        <Tabs />
      </div>
      <div className="img-sec">
        <img src={IMG} className="main-img" alt="" />
      </div>
    </div>
  );
};

export default Home;
