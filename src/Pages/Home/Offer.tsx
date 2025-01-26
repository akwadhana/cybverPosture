import { Header, Light } from "../../assets";
import Card from "../../Components/Card";

const Offer: React.FC = () => {
  const cardsData = [
    {
      title: "Compliance Readiness and Self-Assessments",
      description:
        "Ensure your organization is prepared to meet the highest standards of cybersecurity compliance. Our readiness assessments identify gaps and provide actionable recommendations",
    },
    {
      title: "Security Architecture and Design",
      description:
        "Build a resilient security infrastructure with our expert guidance. We design security frameworks that integrate seamlessly with your business operations, providing robust protection against threats.",
    },
    {
      title: "Ransomware Susceptibility Assessment",
      description:
        "Identify vulnerabilities and fortify your defenses against ransomware attacks. Our assessments help you understand your risk and implement effective prevention strategies.",
    },
    {
      title: "Technical Security Standards",
      description:
        "Adopt industry best practices with our technical security standards services. We help you develop and implement standards that ensure your systems and processes are secure",
    },
    {
      title: "Business Impact Assessment",
      description:
        "Understand the potential impact of disruptions on your operations. Our assessments provide insights into critical business functions and guide you in developing effective continuity plans.",
    },
    {
      title: "Merger And Acquisition Due Diligence",
      description:
        "Ensure your mergers and acquisitions are secure with our due diligence services. We identify cybersecurity risks and provide recommendations to protect your investments.",
    },
  ];

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Header})`,
        }}
        className="bg-cover bg-center relative"
      >
        <div className="lg:mt-30 mt-5">
          <h1 className="text-[#7DBDF8] text-[16px] mt-20 text-center">
            HOW WE WORK
          </h1>
        </div>

        <div
          className=" mt-5 absolute -top-50 w-full h-full  items-center justify-center text-white"
          style={{
            backgroundImage: `url(${Light})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="text-5xl text-center mt-5">
          <h1 className="text-white lg:px-72">
            <span className="bg-gradient-to-r from-[#09C6DE] to-[#460389] text-transparent bg-clip-text">
              We ensure your organization is protected
            </span>{" "}
            against evolving threats and meets all regulatory requirements.
          </h1>
        </div>

        <div className="grid mt-10  px-8 text-[#C7D1EA] gap-10  lg:grid-cols-3 grid-cols-1  border-[#242636]">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              className=""
              style={{ backgroundColor: "#242636", padding: "60px" }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Offer;
