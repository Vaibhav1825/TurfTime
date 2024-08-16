import Section from "./Section";
import Heading from "./Heading";
import { changingRoom, check, parking, canteen} from "../assets";
import { brainwaveServices, brainwaveServicesIcons  } from "../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

import Generating from "./Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Our Services"
          text="Experience the ultimate in turf booking with our state-of-the-art facilities and top-notch services"
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-4/5 h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={canteen}
              />

              {/* <video src={canteenmp4} */}
              {/* <video src={""}                //put image 
               className="  top-2 object-cover md:object-right"
                width={600}
                alt="Smartest AI"
                height={880}
                muted
                autoPlay
                loop
                 ></video> */}
            </div>

            <div className="relative z-1 max-w-[18rem] ml-auto">
              <h4 className="h4 mb-4">Canteen Facility</h4>
              <p className="body-2 mb-[3rem] text-n-3">
              Variety of snacks and beverages available
              </p>
              <ul className="body-2">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <img
                  src={changingRoom}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Changing Room Facility</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                Separate male and female changing rooms
                </p>
              </div>

              
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Parking Area</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                Provides sufficient space to park vehicles
                </p>
               
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={parking}           //put image
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />               
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
