const Card = ({
  title,
  text,
  img,
}: {
  title: string;
  text: string;
  img: string;
}) => {
  return (
    <div className="first-card bg-[#f6f2f2] px-4 rounded-2xl max-w-[350px] lg:w-[270px] h-[250px]">
      <div className="w-full mb-3">
        <img src={img} alt="" className="mx-auto" width={30} />
      </div>
      <h3 className="font-bold text-lg text-center">{title}</h3>
      <p className="text-center">{text}</p>
    </div>
  );
};

export default Card;
