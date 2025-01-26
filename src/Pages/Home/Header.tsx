import React from "react";
import { Light, Header } from "../../assets";
import { GradientButton, NonGradientButton } from "../../Components/Button";

const Hero: React.FC = () => {
  return (
    <div className="text-center relative">
      <div
        style={{
          backgroundImage: `url(${Header})`,
        }}
        className=" lg:h-[90vh] h-[70vh] bg-cover bg-center"
      ></div>

      <div
        className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: `url(${Light})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <h2 className="lg:text-[49px] text-xl mt-15 font-light text-center">
          LET'S HELP YOU STAY
        </h2>
        <div className="flex flex-col items-center ">
          <h1 className="lg:text-[248px] text-[72px] font-bold text-center">
            Secured․
          </h1>
          <p className="text-[20px] font-light leading-8 mb-6 text-center max-w-lg">
            Expert Cybersecurity Solutions Tailored to Protect Your Organization
            from Emerging Threats
          </p>
        </div>

        <div className="flex mt-5 space-x-4">
          <GradientButton text={"Schedule a Call"} />
          <NonGradientButton text={"Get a Quote"} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
