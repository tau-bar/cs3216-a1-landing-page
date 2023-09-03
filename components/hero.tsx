import HomePageScreenshot from "@/public/images/home-page.png";
import FoodDetails from "@/public/images/food-details.png";
import Pasta from "@/public/images/pasta.png";
import Dish from "@/public/images/dish.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        data-aos="fade-left"
        data-aos-delay="300"
        className="absolute right-0 transform top-72 pointer-events-none -z-1"
        aria-hidden="true"
      >
        <Image
          className="animate-float invisible md:visible xl:w-[600px] lg:w-84 w-72"
          src={Pasta}
        />
      </div>

      <div
        data-aos="fade-right"
        data-aos-delay="450"
        className="absolute left-0 xl:left-0 transform bottom-0 pointer-events-none -z-1 rotate-12"
        aria-hidden="true"
      >
        <Image
          className="animate-float invisible md:visible xl:w-[500px] lg:w-84 md:w-72"
          src={Dish}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              The{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3BA284] to-[#90DFBF]">
                Ultimate
              </span>{" "}
              Food Companion
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Don't know what food is good on campus? FoodPrints is here to
                elevate your dining experience on campus!
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="btn text-white bg-[#3BA284] hover:bg-green-800 w-full mb-4 sm:w-auto sm:mb-0"
                    href="#newsletter"
                  >
                    Join our Beta test!
                  </a>
                </div>
                <div>
                  <a
                    className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    href="#features"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="flex justify-center w-full">
            <Image
              data-aos="fade-up"
              data-aos-delay="600"
              className="drop-shadow-special md:w-[250px] max-sm:w-[100px]"
              src={HomePageScreenshot}
            />
            <Image
              data-aos="fade-up"
              data-aos-delay="750"
              className="drop-shadow-special ml-12 md:w-[250px] max-sm:w-[100px]"
              src={FoodDetails}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
