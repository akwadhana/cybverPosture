import { Header, pic, quotation } from "../../assets";
import Card2 from "../../Components/Card2";

const OurClient: React.FC = () => {
  const cardData = [
    {
      icon: pic,
      imageSrc: quotation,
      title: "Jacob Esau",
      subtitle: "CEO Cellulant group",
      description:
        "Ensure your organization is prepared to meet the highest standards of cybersecurity compliance. Our readiness assessments identify gaps and provide actionable recommendations",
    },
    {
      icon: pic,
      imageSrc: quotation,
      title: "Jacob Esau",
      subtitle: "CEO Cellulant group",
      description:
        "Ensure your organization is prepared to meet the highest standards of cybersecurity compliance. Our readiness assessments identify gaps and provide actionable recommendations",
    },
    {
      icon: pic,
      imageSrc: quotation,
      title: "Jacob Esau",
      subtitle: "CEO Cellulant group",
      description:
        "Ensure your organization is prepared to meet the highest standards of cybersecurity compliance. Our readiness assessments identify gaps and provide actionable recommendations",
    },
    {
      icon: pic,
      imageSrc: quotation,
      title: "Jacob Esau",
      subtitle: "CEO Cellulant group",
      description:
        "Ensure your organization is prepared to meet the highest standards of cybersecurity compliance. Our readiness assessments identify gaps and provide actionable recommendations",
    },
    {
      icon: pic,
      imageSrc: quotation,
      title: "Jacob Esau",
      subtitle: "CEO Cellulant group",
      description:
        "Ensure your organization is prepared to meet the highest standards of cybersecurity compliance. Our readiness assessments identify gaps and provide actionable recommendations",
    },
    {
      icon: pic,
      imageSrc: quotation,
      title: "Jacob Esau",
      subtitle: "CEO Cellulant group",
      description:
        "Ensure your organization is prepared to meet the highest standards of cybersecurity compliance. Our readiness assessments identify gaps and provide actionable recommendations",
    },
  ];

  return (
    <>
      <div className="lg:mt-30 mt-5">
        <h1 className="text-[#7DBDF8] text-[16px] mt-20 text-center">
          WHAT THEY SAID ABOUT US
        </h1>
      </div>

      <div
        style={{
          backgroundImage: `url(${Header})`,
        }}
        className="bg-cover bg-center relative"
      >
        <div className="text-center mt-5 text-[42.16px] font-[500px] ">
          <span className="bg-gradient-to-r from-[#09C6DE] to-[#460389] text-transparent bg-clip-text">
            Loved by Our Clients
          </span>{" "}
        </div>

        <div className="p-6 gap-6 grid lg:grid-cols-3 grid-cols-1">
          {cardData.map((card, index) => (
            <Card2
              key={index}
              icon={card.icon}
              imageSrc={card.imageSrc}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default OurClient;
