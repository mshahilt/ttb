import React from "react";

export default function Footer() {


  return (
    <footer className="bg-black text-white font-lufgaLight">
      <div className="max-w-screen mx-auto flex flex-col lg:flex-row border-t border-gray-800 px-12">
        <div className="lg:w-1/2 w-full border-r border-gray-800 py-12">
          <div className="flex items-center mb-6 px-6">
            <img src="/assets/icons/logo.svg" alt="Logo" className="w-32 h-32" />
            <div className="ml-4">
              <h2 className="text-3xl font-semibold leading-tight">TOURISTS TRAVEL</h2>
              <div className="text-3xl font-semibold">
                BUREAU <span className="text-sm align-bottom">UK LTD</span>
              </div>
            </div>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-md px-6">
            Discover the world’s most captivating places, from hidden gems to popular hotspots.
            Explore our curated selection of destinations that inspire adventure and wanderlust.
            Start planning your next journey today!
          </p>
          <div className="grid grid-cols-3 gap-4 w-52 mb-10 px-6">
            {[
              "/assets/icons/instagram.svg",
              "/assets/icons/facebook.svg",
              "/assets/icons/linkedin.svg",
              "/assets/icons/whatsapp.svg",
              "/assets/icons/threds.svg",
            ].map((src, idx) => (
              <a
                key={idx}
                href="#"
                className="border border-white rounded-full p-3 w-12 h-12 flex items-center justify-center"
              >
                {src && <img src={src} alt="" className="w-7 h-7" />}
              </a>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-6 px-6">
            <button className="bg-white text-black px-8 py-4 text-sm font-semibold hover:bg-gray-200 transition w-full">
              Explore Destinations
            </button>
          </div>
        </div>

        <div className="lg:w-1/2 w-full flex flex-col justify-between py-12">
          <div className="flex justify-between mb-10 pl-6 pr-36">
            <div>
              <h3 className="text-2xl font-semibold mb-4 font-kugile">Discover</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white">About us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Stay</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Tours</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 font-kugile">Travel</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-white">Destinations</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Hotels</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Villas</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Explore UK</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 font-kugile">languages</h3>
              <ul className="space-y-3 text-sm capitalize">
                <li><a href="#" className="text-gray-300 hover:text-white">English</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Arabic</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">French</a></li>
              </ul>
            </div>
            <div/>
          </div>
          <div className="border-t border-gray-800 pt-6 px-6">
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your e-mail Address"
                className="flex-1 bg-black border border-white text-white placeholder-gray-400 px-4 py-3 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-black px-8 py-4 font-semibold text-sm hover:bg-gray-200 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="px-6 mx-12 py-6 border-t border-gray-800 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center max-w-screen">
        <p>© Copyright Tourists Travel Bureau UK LTD. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Cookie Policy</a>
          <a href="#" className="hover:text-white">Imprint</a>
        </div>
      </div>
    </footer>
  );
}
