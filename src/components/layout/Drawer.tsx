"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Destinations from "../DrawerNavigations/Destination/Destinations";
import Sidebar from "./Sidebar";

interface DrawerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, setIsOpen }) => {
  const [selectedMenu, setSelectedMenu] = useState("Destinations");

  const mainMenuItems = ["Destinations", "Journeys", "Stays", "Stories"];

  const handleMenuSelect = (item: string) => {
    setSelectedMenu(item);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex h-full w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 backdrop-blur-md "
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative z-10 w-full sm:w-80 md:w-96 lg:w-1/3 h-full border-r border-stone-200 bg-primary"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Sidebar
              setIsOpen={setIsOpen}
              isOpen={isOpen}
              mainMenuItems={mainMenuItems}
              handleMenuSelect={handleMenuSelect}
              selectedMenu={selectedMenu}
            />
          </motion.div>

          <motion.div
            className="hidden sm:block flex-1 h-full overflow-y-auto relative z-10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            {selectedMenu === "Destinations" && <Destinations />}
            {selectedMenu === "Journeys" && (
              <div className="p-6 bg-stone-50 min-h-screen">
                <h2 className="text-2xl font-light text-stone-800 mb-4">
                  Journeys
                </h2>
                <p className="text-stone-600">
                  Discover amazing journeys around the world.
                </p>
              </div>
            )}
            {selectedMenu === "Stays" && (
              <div className="p-6 bg-stone-50 min-h-screen">
                <h2 className="text-2xl font-light text-stone-800 mb-4">
                  Stays
                </h2>
                <p className="text-stone-600">
                  Find comfortable accommodations for your travels.
                </p>
              </div>
            )}
            {selectedMenu === "Stories" && (
              <div className="p-6 bg-stone-50 min-h-screen">
                <h2 className="text-2xl font-light text-stone-800 mb-4">
                  Stories
                </h2>
                <p className="text-stone-600">
                  Read inspiring travel stories from around the globe.
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
