import { Cyber, Layer, Susu, Lante } from "../../assets";

const Industries = () => {
  const industries = ["Banks", "Government", "IT", "Fin Tech"];

  const imageUrls = [Cyber, Layer, Susu, Lante, Cyber, Cyber];

  return (
    <>
      <div className="lg:mt-30">
        <h1 className="text-[#7DBDF8] text-[16px] text-center">
          CATERING FOR ALL INDUSTRIES
        </h1>
      </div>

      <div className="overflow-hidden whitespace-nowrap mt-6">
        <div
          className="flex gap-8 items-center text-white text-xl lg:text-8xl font-bold animate-slide"
          style={{ animation: "slide 10s linear infinite" }}
        >
          {industries.map((industry, index) => (
            <p key={index} className="flex gap-4">
              {industry}{" "}
              {index < industries.length - 1 && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#09C6DE] to-[#460389]">
                  •
                </span>
              )}
            </p>
          ))}

          {industries.map((industry, index) => (
            <p key={`repeat-${index}`} className="flex gap-4">
              {industry}{" "}
              {index < industries.length - 1 && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#09C6DE] to-[#460389]">
                  •
                </span>
              )}
            </p>
          ))}
        </div>
        <style>
          {`
            @keyframes slide {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-100%);
              }
            }
          `}
        </style>

        <div className="m-10">
          <h1 className="text-[#7DBDF8] text-[16px] text-center">
            ORGANIZATIONS THAT TRUST US
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center">
          {imageUrls.map((url, index) => (
            <div
              key={index}
              className="w-[300px] h-[100px] lg:w-[149.65px] lg:h-[79.34px] px-6 border  border-white flex justify-center items-center my-4 lg:my-0"
            >
              <img
                src={url}
                alt={`Image ${index + 1}`}
                className="lg:w-[134.92.px] lg:h-[43.66px] w-[100px] h-auto"
              />
            </div>
          ))}
        </div>

        
      </div>

      
    </>
  );
};

export default Industries;
