import React from "react";
import { Light, Header } from "../../assets";
import { GradientButton,} from "../../Components/Button";

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
  
          <button className="relative p-[2px] rounded-full bg-gradient-to-r from-[#460389] to-[#09C6DE]">
  <span className="block px-6 py-3 rounded-full bg-[#11121B] text-white">
    Get a Quote
  </span>
</button>




        </div>
      </div>
    </div>
  );
};

export default Hero;
