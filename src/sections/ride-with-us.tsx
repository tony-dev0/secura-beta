import Title from "../components/title";
import List from "../components/list";
import Button from "../components/button";

const RideWithUs = () => {
  return (
    <section className="max-w-[1300px] mx-auto px-4 py-12" id="riders">
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-0 justify-between w-full">
        <div className="flex flex-col gap-4 max-w-[450px]">
          <Title
            text="Fast, Affordable, Always Ready"
            bgColor="#CCCCCC"
            textColor="#000000"
          />
          <h3 className="text-[#000000] font-bold text-2xl lg:text-5xl">
            Ride With Us
          </h3>
          <p className="text-lg text-[#4D4D4D]">
            Wherever you are and whenever you need us, we're just a tap away.
            Our fleet of professional drivers ensures your trip is safe,
            comfortable, and on time.
          </p>
          <List
            title="Key Features:"
            texts={[
              "Real-time ride tracking",
              "Multiple ride options (economy, premium, group)",
              "Fare estimates before you ride",
              "Friendly, professional drivers",
            ]}
          />
          <a href="https://secura-pwa.vercel.app/"> <Button text="Book a Ride" dark={true} /> </a>
        </div>
        <div className="max-w-[650px] max-h-[740px]">
          <img
            src="/Frame22.png"
            alt="Smiling man enjoying car test drive"
            className="w-full h-auto rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default RideWithUs;
