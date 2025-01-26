import { tunder, expert, hand, excellence, Header } from "../../assets";

const OurWork: React.FC = () => {
  const cardData = [
    {
      imageSrc: tunder,
      title: "Proactive Approach",
      description:
        "We stay ahead of emerging threats to ensure your organization is always protected.",
    },
    {
      imageSrc: expert,
      title: "Expertise",
      description:
        "Our team of seasoned professionals brings deep industry knowledge and experience.",
    },
    {
      imageSrc: excellence,
      title: "Tailored Solutions",
      description:
        "We understand that every organization is unique. Our solutions are customized to meet your specific needs.",
    },
    {
      imageSrc: hand,
      title: "Commitment to Excellence",
      description:
        "We are dedicated to delivering the highest quality services and achieving the best outcomes for our clients.",
    },
  ];

  return (
    <>
      <div className="lg:mt-30 mt-5">
        <h1 className="text-[#7DBDF8] text-[16px] text-center">HOW WE WORK</h1>
      </div>

      <div className="text-5xl text-center mt-5">
        <h1 className="text-white lg:px-72">
          <span className="bg-gradient-to-r from-[#09C6DE] to-[#460389] text-transparent bg-clip-text">
            We ensure your organization is protected
          </span>{" "}
          against evolving threats and meets all regulatory requirements.
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-6 p-6  md:justify center md:items-center">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="max-w-sm rounded-xl lg:mt-5 overflow-hidden h-[415.44px] shadow-lg border border-[#292B3D]  bg-gradient-to-r from-[#7C82B11F] to-[#11121B00]"
          >
            <div className="w-[178px] h-48 mx-auto mt-10 lg:mt-15 border rounded-xl border-[#292B3D] bg-gradient-to-r from-[#09C6DE1A] to-[#4603891A] flex items-center justify-center overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={card.imageSrc}
                alt={card.title}
              />
            </div>

            <div className="p-4 lg:mt-5">
              <h1 className="text-2xl text-center text-[#B2BBD1] font-semibold mb-2">
                {card.title}
              </h1>
              <p className="text-[#B2BBD1] px-10.5 text-[12px] text-center">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div
          style={{
            backgroundImage: `url(${Header})`,
          }}
          className="h-[9vh] bg-cover bg-center"
        ></div>
      </div>
    </>
  );
};

export default OurWork;
