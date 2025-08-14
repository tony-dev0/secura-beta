import Card from "../components/about-card";
import { aboutCardsData } from "../assets/data";
import Title from "../components/title";

const About = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-4 py-8 about" id="about">
      <Title text="Booking made Simple" bgColor="#CCCCCC" textColor="#000000" />
      <h3 className="font-bold text-3xl mt-3">How it Works</h3>
      <div className="mt-7 flex max-md:justify-center justify-start">
        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center lg:gap-15 gap-10">
          <div className="about-img max-w-[600px] lg:max-w-[500px]">
            <img src="/Frame21.png" alt="About image" className="w-full" />
          </div>
          <div className="relative about-cards grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center">
            <div className="absolute bg-img w-full h-full z-10 line left-10"></div>
            {aboutCardsData.map((card, index) => (
              <Card
                key={index}
                title={card.text}
                text={card.description}
                img={card.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
