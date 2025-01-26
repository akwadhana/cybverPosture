type CardProps = {
    title: string;
    description: string;
    className?: string;
    style?: React.CSSProperties; 
  };
  
  const Card: React.FC<CardProps> = ({ title, description, }) => {
    return (
      <div className=" mt-10 lg:h-[300px] rounded-2xl overflow-hidden shadow-lg border border-[#242636] bg-[#00000066]">
        <div className="p-4">
          <h1 className="lg:text-[23.63px] lg:w-[303px] mt-10 mx-5 lg:mx-6 font-semibold mb-2">{title}</h1>
          <p className="text-[#A7A7AF] lg:mt-5 lg:mx-5 mx-5">{description}</p>
        </div>
      </div>
    );
  };
  
  export default Card;
  