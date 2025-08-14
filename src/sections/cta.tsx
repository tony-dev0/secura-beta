import Title from "../components/title";

const CTA = () => {
  return (
    <section className="max-w-[1300px] mx-auto  py-12">
      <div className="bg-[#F9BBBC] rounded-[25px] px-4 lg:px-12 py-12 lg:py-24 flex flex-col lg:flex-row justify-between lg:items-center gap-8 lg:gap-0">
        <div className="max-w-[500px] space-y-6">
          <Title
            text="Your Ride is Just a Tap Away"
            bgColor="#000000"
            textColor="#FFFFFF"
          />
          <h3 className="text-[#000000] font-bold text-4xl lg:text-5xl">
            Download Our App
          </h3>
          <p className="text-lg lg:text-xl text-[#000000]">
            Book safe, affordable rides in seconds. Track your driver, share
            your trip, and pay your way all in one app.
          </p>
        </div>
        <div className="space-y-4">
          <a href="https://secura-pwa.vercel.app/">
            <img
              src="/pngwing.com (17).png"
              alt="Google play icon"
              className="max-w-[195px] max-w-h-[100px]"
            />
          </a>
          <a href="https://secura-pwa.vercel.app/">
            <img
              src="/pngwing.com (18).png"
              alt="App Store icon"
              className="max-w-[200px] max-w-h-[100px]"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
