import Button from "../components/button";

const heroSection = () => {
  return (
    <div className="lg:min-h-[600px]">
      <div className="max-w-[1320px] mx-auto px-4 py-6 lg:py-2 flex flex-col items-center lg:flex-row justify-between">
        <div
          className="w-full lg:pr-5 lg:max-w-[600px] sm:max-w-[520px] lg:mt-[-100px] max-md:mt-10 max-md:px-4"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <h1 className="text-4xl lg:text-[55px] font-bold text-[#1B1B20] leading-tight lg:leading-[65px] mb-6">
            Your Ride, Your Way Anytime, Anywhere
          </h1>

          <p className="text-[#666666] text-base lg:text-lg mb-8 leading-relaxed">
            From pickup to drop-off, we've got you covered with verified
            drivers, secure routes, and in-app emergency features.
          </p>

          <div className="flex gap-3" data-aos="fade-up" data-aos-delay="500">
            <a href="https://secura-pwa.vercel.app/">
              {" "}
              <Button text="Book a Ride" dark={true} />{" "}
            </a>
            <a href="https://secura-pwa.vercel.app/become-a-driver">
              {" "}
              <Button text="Become a Driver" dark={false} />{" "}
            </a>
          </div>
        </div>

        <div
          className="w-full md:mt-12 lg:mt-0 lg:block order-first lg:order-last"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <div className="relative w-full">
            <img
              src="/banner.png"
              alt="Booking a Ride Hero"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/10 to-white/50 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default heroSection;
