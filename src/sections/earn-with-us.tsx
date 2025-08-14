import Title from "../components/title";
import List from "../components/list";
import Button from "../components/button";

const EarnWithUs = () => {
  return (
    <section className="max-w-[1300px] mx-auto px-4 py-12" id="drivers">
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-0 justify-between w-full">
        <div className="flex flex-col gap-4 max-w-[450px]">
          <Title
            text="Drive. Earn. Be Your Own Boss"
            bgColor="#CCCCCC"
            textColor="#000000"
          />
          <h3 className="text-[#000000] font-bold text-2xl lg:text-5xl">
            Earn With Us
          </h3>
          <p className="text-lg text-[#4D4D4D]">
            Turn your car into an income source. With flexible hours,
            competitive earnings, and full support, you choose when and how much
            you work.
          </p>
          <List
            title="Drivers Benefits"
            texts={[
              "Set your own schedule",
              "Earn money on your terms",
              "Get support when you need it",
            ]}
          />
          <Button text="Start Driving Today" dark={true} />
        </div>
        <div className="max-w-[650px] max-h-[740px]">
          <img
            src="/smiling-man-enjoying-car-test-drive-showroom 1.png"
            alt="Smiling man enjoying car test drive"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default EarnWithUs;
