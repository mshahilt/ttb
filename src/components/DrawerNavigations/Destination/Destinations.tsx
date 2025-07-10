import { countries, destinations, ICountry } from "@/data/home";
import { ChevronRight } from "lucide-react";
import Destination from "./Destination";
import { useState } from "react";

const Destinations: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<ICountry>({name: "Europe", images: ['/assets/images/drawer/europe1.jpg', '/assets/images/drawer/europe2.jpg']});

  const handleCountrySelect = (country: ICountry) => {
    setSelectedCountry(country);
  };

  return (
    <div className="bg-transparent-50 min-h-screen">

    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 bg-stone-50">
      <div className="flex gap-1 mb-4 lg:mb-6">
      <div className="w-1/2">
        <img
          src={selectedCountry?.images[0]}
          alt="Coastal village"
          className="w-full h-32 lg:h-48 object-cover pr-2 pt-4 pb-4 pl-4"
        />
      </div>
      <div className="w-1/2">
        <img
          src={selectedCountry?.images[1]}
          alt="Coastal cave"
          className="w-full h-32 lg:h-48 object-cover pl-2 pt-4 pb-4 pr-4"
        />
      </div>
    </div>
        <div className="space-y-4 px-6">
          {countries.map((country, index) => (
            <div
              key={index}
              className="border-b border-stone-200 last:border-b-0"
            >
              <button
                onClick={() => handleCountrySelect(country)}
                className="w-full flex items-center justify-between py-3 lg:py-4 text-left hover:bg-stone-100 transition-colors group"
              >
                <span className="text-stone-800 text-sm lg:text-base font-normal">
                  {country.name}
                </span>
                <ChevronRight 
                  size={16} 
                  className="text-stone-400 group-hover:text-stone-600 transition-colors" 
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full mt-80 lg:w-1/2 bg-stone-50">
        <Destination
          destination={destinations}
          selectedDestinationCountry={selectedCountry}
        />
      </div>
    </div>
  </div>

  );
};

export default Destinations;