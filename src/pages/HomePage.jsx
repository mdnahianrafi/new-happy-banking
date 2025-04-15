import React from "react";
import MobileContainer from "../components/MobileContainer";

import LoginForm from "../components/LoginForm";
import Image from "../components/Image";
import Logo from "../assets/logo.svg";
import StickyNav from "../components/StickyNav";


const HomePage = () => {
  return (
    <div className="container mx-auto">
      <div className="md:flex md:justify-center ">
        <MobileContainer>
          <Image imgSrc={Logo} imgAlt="logo.png " className="px-16 py-3" />
          <LoginForm />
     

          <StickyNav className="md:top-[89%] lg:top-[78%] xl:top-[68%]  2xl:top-[52%] h-14 md:w-[356px] screen-3xl-custom" />
     
        </MobileContainer>
      </div>
    </div>
  );
};

export default HomePage;
