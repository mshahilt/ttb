import { destinations, ICountry, IDestinations } from "@/data/home";
import { useEffect, useState } from "react";

interface DestinationProps {
  destination: IDestinations[];
  selectedDestinationCountry: ICountry | undefined;
}

const Destination: React.FC<DestinationProps> = ({ 
  destination = destinations, 
  selectedDestinationCountry 
}) => {
  const [selectedDestination, setSelectedDestination] = useState<IDestinations | undefined>();

  useEffect(() => {
    if (selectedDestinationCountry) {
      const found = destination.find((elem) => elem.country === selectedDestinationCountry.name);
      setSelectedDestination(found);
    }
  }, [destination, selectedDestinationCountry]);

  if (!selectedDestination) {
    return (
      <div className="bg-stone-50 min-h-screen flex items-center justify-center">
        <p className="text-stone-500">Select a destination to view details</p>
      </div>
    );
  }

  return (
    <div className="bg-transparent min-h-screen">
      <div className="px-4 lg:px-6">
        <div className="space-y-4">
          {selectedDestination.cities.map((dest, index) => (
            <div
              key={index}
              className="border-b border-stone-200 last:border-b-0"
            >
              <button className="w-full text-left py-3 lg:py-4 hover:bg-stone-100 transition-colors">
                <span className="text-stone-800 text-sm lg:text-base font-normal">
                  {dest}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destination