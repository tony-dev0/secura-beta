import Title from "../components/title";
import Button from "../components/button";
import { featuresData } from "../assets/data";

const SafetyFeatures = () => {
  return (
    <section className="max-w-[1300px] mx-auto px-4 py-12" id="safety">
      <div className="flex flex-col gap-6">
        <Title
          text="Your safety, Our Priority"
          bgColor="#CCCCCC"
          textColor="#000000"
        />
        <h3 className="text-[#000000] font-bold text-2xl lg:text-5xl">
          Our Safety Features
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center gap-6">
          {featuresData.map((feature, index) => (
            <div key={index} className="relative">
              <img
                src={feature.image}
                alt={feature.text}
                className="md:max-w-[404px] md:max-h-[404px] w-full h-full rounded-[20px]"
              />
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-[15px] py-1.5 px-6 h-fit bg-white flex items-center w-fit gap-2">
                <div
                  style={{ backgroundColor: feature.bgColor }}
                  className=" p-1.5 rounded-full"
                >
                  <img
                    src={feature.icon}
                    alt={feature.text}
                    className="h-6 w-6"
                  />
                </div>
                <p className="text-sm">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Button text="Learn More About Safety" dark={true} />
        </div>
      </div>
    </section>
  );
};

export default SafetyFeatures;
