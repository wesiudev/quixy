import { SquareOfBalls } from "../accents/SquareOfBalls";
import { GridElement } from "./GridElement";
export interface IService {
  index: number;
  serviceName: string;
  serviceDesc: string;
  serviceImage: string;
  offerImage?: string;
}

export const ServicesGrid = ({ services }: { services: IService[] }) => {
  return (
    <div className="w-full h-max flex flex-col justify-center items-center pt-24 bg-gradient-to-b from-rose-300 via-rose-100 to-rose-300 relative">
      <span className="font-pars text-5xl text-white pb-6 text-center">
        Oferowane usługi manicure
      </span>
      <div className="relative w-[90vw] lg:w-3/4 py-12">
        {/* accent */}
        <SquareOfBalls />
        {/* actual grid */}
        <div className="gap-3 md:gap-5 lg:gap-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {services.map((item: IService, i: number) => (
            <GridElement
              key={i}
              index={i}
              serviceImage={item.serviceImage}
              serviceDesc={item.serviceDesc}
              serviceName={item.serviceName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
