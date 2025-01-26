const Card2 = ({
  icon,
  imageSrc,
  title,
  subtitle,
  description,
}: {
  icon: string;
  imageSrc: string;
  title: string;
  subtitle?: string;
  description: string;
}) => {
  return (
    <div
      className="p-4 mx-auto border lg:w-[402.12px] lg:h-[277.66px] border-[#242636] rounded-tr-2xl shadow-lg bg-[#26262699] lg:px-[41.03px
] pt-[27.36px] pb-[41.03px] "
    >
      <div className=" flex  justify-end items-end">
        <img src={icon} alt="Icon" className="w-[54.71px] h-[49.92px]" />
      </div>
      <div className=" flex gap-5 items-center mb-4">
        <img
          src={imageSrc}
          alt={title}
          className="lg:w-[64px] lg:h-[64px] lg:mx-5 rounded-md mb-4"
        />

        <div>
          <h1 className="text-xl font-semibold text-[#C7D1EA]">{title}</h1>
          {subtitle && (
            <p className="text-sm text-[#ADAEB1] mb-2">{subtitle}</p>
          )}
        </div>
      </div>

      <p className="text-[#A7A7AF] w-[400] lg:mx-5 text-[12.31px]">
        {description}
      </p>
    </div>
  );
};

export default Card2;
