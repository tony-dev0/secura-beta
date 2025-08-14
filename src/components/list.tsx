const List = ({ title, texts }: { title: string; texts: string[] }) => {
  return (
    <div>
      <p className="text-[#000000] font-bold text-2xl">{title}</p>
      <ul className="list-inside ml-2 list-disc marker:text-[#4D4D4D]">
        {texts.map((text, index) => (
          <li className=" text-[#4D4D4D] text-base" key={index}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
