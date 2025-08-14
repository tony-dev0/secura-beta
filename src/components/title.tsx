const Title = ({
  text,
  bgColor,
  textColor,
}: {
  text: string;
  bgColor: string;
  textColor: string;
}) => {
  return (
    <div
      style={{ backgroundColor: bgColor, color: textColor }}
      className="font-medium text-sm lg:text-sm py-3 px-[15px] h-fit rounded-full w-fit"
    >
      {text}
    </div>
  );
};

export default Title;
