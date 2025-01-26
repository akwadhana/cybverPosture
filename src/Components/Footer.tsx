import {
  Light,
  Header,
  youtube,
  insta,
  linkdine,
  space,
  cyberposture,
  bigcyber,
  Posture,
  
} from "../assets";
import { GradientButton } from "./Button";

const Footer: React.FC = () => {
  const words = [
    "Innovation",
    "UI design",
    "UX design",
    "Wire framing",
    "Diagramming",
    "Online whiteboard",
    "Team collaboration",
    "Design",
    "Prototyping",
    "Development features",
    "Design systems",
    "Collaboration features",
    "Design process",
    "FigJam",
    "Blog",
    "Best practices",
    "Colors",
    "Color wheel",
    "Support",
    "Developers",
    "Resource library",
  ];

  const list1 = words.slice(0, 7);
  const list2 = words.slice(7, 14);
  const list3 = words.slice(14, 22);

  const icons = [
    { src: youtube, link: "https://youtube.com" },
    { src: insta, link: "https://instagram.com" },
    { src: linkdine, link: "https://linkedin.com" },
    { src: space, link: "https://example.com" },
  ];

  return (
    <>
      <div
        className=" w-full h-full mt-20  items-center justify-center text-white"
        style={{
          backgroundImage: `url(${Light})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="">
          <h1 className=" text-[#F6F6F9] text-[40px] lg:text-[53.36px] text-center m">
            Get started. It's easy
          </h1>
          <p className="text-[#D4D4E1] text-center mt-3 px-10">
            Everything you need to remain cybersecurity compliant is just a call
            away
          </p>
        </div>
      </div>

      <div
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url(${Header})`,
          backgroundPosition: "center ",
        }}
      >
        <div className="items-center justify-center flex">
          <GradientButton text="Schedule a Call" className="mt-5" />
        </div>

        <div className="flex lg:flex-row flex-col mt-20 items-center justify-center   lg:space-x-60">
          <div className="flex  space-x-3  ">
            {icons.map((icon, index) => (
              <a
                key={index}
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Social link ${index + 1}`}
                className="  hover:shadow-md hover:scale-105  transition-transform duration-200"
              >
                <img
                  src={icon.src}
                  alt={`Icon ${index + 1}`}
                  className=" object-contain w-[24px] "
                />
              </a>
            ))}
          </div>
          <div className="flex flex-row mt-3 space-x-5 lg:space-x-60 text-[#A7A7AF]">
            <div className="ml-8">
              <p>use case</p>
            </div>
            <div className="-ml-3">
              <p>Explore</p>
            </div>
            <div className="">
              <p className="ml-4">Resources</p>
            </div>
          </div>

          <div className=" justify-end items-end flex mt-5 ">
            <div className="">
              <img
                src={cyberposture}
                alt="Cyber Posture"
                className="w-full max-w-[200px]"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex  justify-center lg:space-x-35 mt-5 leading-9">
            {/* List 1 */}
            <div>
              <h2 className="text-lg font-bold mb-2"></h2>
              <div className="list-disc ml-5">
                {list1.map((word, index) => (
                  <div key={`list1-${index}`} className="text-[#A7A7AF]">
                    {word}
                  </div>
                ))}
              </div>
            </div>

            {/* List 2 */}
            <div>
              <h2 className="text-lg font-bold mb-2"></h2>
              <div className="list-disc ml-5">
                {list2.map((word, index) => (
                  <div key={`list2-${index}`} className="text-[#A7A7AF]">
                    {word}
                  </div>
                ))}
              </div>
            </div>

            {/* List 3 */}
            <div>
              <h2 className="text-lg font-bold mb-2"></h2>
              <ul className="list-disc ml-5">
                {list3.map((word, index) => (
                  <div key={`list3-${index}`} className="text-[#A7A7AF]">
                    {word}
                  </div>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="flex mt-10 flex-col lg:flex-row lg:w-[1512px] lg:h-[153px]  "
            style={{
              backgroundSize: "cover",
            }}
          >
            <img
              src={bigcyber}
              alt="Cyber Posture"
              className=" object-cover lg:w-[1512px] lg:h-[153px]"
            />
            <img
              src={Posture}
              alt="Cyber Posture"
              className="object-cover lg:w-[1512px] lg:h-[153px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
