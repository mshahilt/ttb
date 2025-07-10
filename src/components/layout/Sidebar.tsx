import { Star, X } from "lucide-react";

interface SidebarProps {
  isOpen?: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  mainMenuItems: string[];
  handleMenuSelect: (item: string) => void;
  selectedMenu: string;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  setIsOpen, 
  mainMenuItems, 
  handleMenuSelect, 
  selectedMenu 
}) => {
  const discoverItems = [
    'The Exclusive Collection',
    'Idea',
    'Offers',
    'Journey Finder'
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={14}
        className={index < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
      />
    ));
  };

  return (
    <div className="w-full h-full overflow-y-auto bg-primary">
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-between p-4 lg:p-6 pb-4">
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 hover:bg-stone-200 rounded-full transition-colors"
            aria-label="Close sidebar"
          >
            <X size={20} className="text-stone-600" />
          </button>
        </div>

        <div className="px-4 lg:px-6 pb-4">
          <span className="text-sm text-stone-500 uppercase tracking-wide">Menu</span>
        </div>

        <nav className="flex-1">
          <ul className="space-y-4 lg:space-y-6 mb-8 lg:mb-14 font-kugile px-8">
            {mainMenuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleMenuSelect(item)}
                  className={`block w-full text-left text-lg lg:text-4xl font-light text-stone-800 hover:text-stone-600 transition-colors ${
                    selectedMenu === item ? 'ml-2 lg:ml-6' : ''
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-8 lg:mt-20 border-stone-200 border-t border-b py-12">
            <h3 className="px-4 lg:px-6 text-sm text-stone-500 uppercase tracking-wide mb-4 lg:mb-6">
              Discover
            </h3>
            <ul className="px-4 lg:px-6 space-y-3 lg:space-y-4">
              {discoverItems.map((item, index) => (
                <li key={index}>
                  <button className="block w-full text-left text-sm lg:text-base text-stone-700 hover:text-stone-900 transition-colors">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="px-4 lg:px-6 pb-6 lg:pb-8">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              {renderStars(5)}
            </div>
            <span className="text-xs lg:text-sm text-stone-600 ml-2">5.0/1230 reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar