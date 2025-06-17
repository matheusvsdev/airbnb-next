"use client";

import { useState } from "react";
import { IconSearch } from "@tabler/icons-react";

export default function SearchBar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="w-full max-w-sm md:max-w-2xl mx-auto border-1 border-gray-200 flex items-center rounded-full overflow-clip px-4 py-2 shadow-lg shadow-gray-200">
      <div className="flex w-full justify-around">
        <div className="flex flex-col items-start cursor-pointer border-r-1 border-gray-300">
          <label className="text-sm font-semibold">Onde</label>
          <input
            className="w-32 text-sm focus:outline-none"
            type="text"
            placeholder="Buscar destinos"
            onFocus={() => setShowSearch(true)}
            onBlur={() => setShowSearch(false)}
          />
        </div>

        <div className="hidden md:flex flex-col items-start border-r-1 border-gray-300">
          <label className="text-sm font-semibold">Check-in</label>
          <input
            className="w-32 text-sm focus:outline-none"
            type="text"
            placeholder="Insira as datas"
            onFocus={() => setShowSearch(true)}
            onBlur={() => setShowSearch(false)}
          />
        </div>

        <div className="hidden md:flex flex-col items-start border-r-1 border-gray-300">
          <label className="text-sm font-semibold">Checkout</label>
          <input
            className="w-32 text-sm focus:outline-none"
            type="text"
            placeholder="Insira as datas"
            onFocus={() => setShowSearch(true)}
            onBlur={() => setShowSearch(false)}
          />
        </div>

        <div className="hidden md:flex flex-col items-start">
          <label className="text-sm font-semibold">Quem</label>
          <input
            className="w-20 text-sm focus:outline-none"
            type="text"
            placeholder="Hóspedes"
            onFocus={() => setShowSearch(true)}
            onBlur={() => setShowSearch(false)}
          />
        </div>
      </div>

      <div className="flex w-[135px] justify-end">
        <button
          className={`flex items-center rounded-full p-2 cursor-pointer transition-all duration-300 ${
            showSearch ? "font-semibold bg-red-500 px-4" : "bg-red-500 p-2"
          }`}
        >
          {showSearch && <span className="text-white text-sm">Buscar</span>}
          <IconSearch
            aria-label="Ícone de busca"
            size={32}
            color="white"
            className={`transition-transform duration-300 ${
              showSearch ? "scale-65" : "scale-100"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
