const Button = ({ text, dark }: { text: string; dark?: boolean }) => {
  return (
    <>
      <button
        className={
          dark
            ? "bg-black text-white px-6 py-2 rounded-3xl w-fit hover:text-black hover:bg-white hover:border-2 hover:border-grey transition-all duration-100"
            : "bg-white text-black border-2 border-grey px-6 py-2 rounded-3xl w-fit hover:bg-black hover:text-white transition-all duration-100"
        }
      >
        {text}
      </button>
    </>
  );
};

export default Button;
