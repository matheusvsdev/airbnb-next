import { IconSearch } from "@tabler/icons-react";


export default function SearchBar() {
  return (
    <div className="w-full max-w-2xl mx-auto border-1 border-gray-200 flex items-center rounded-full overflow-clip px-4 py-2 shadow-lg shadow-gray-200">
      
      <div className="flex w-full justify-around">
        
        <div className="flex flex-col items-start cursor-pointer">
          <label className="text-sm font-semibold">Onde</label>
          <input className="w-32 text-sm focus:outline-none border-r-1 border-gray-300" type="text" placeholder="Buscar destinos" />
        </div>

        <div className="flex flex-col items-start">
          <label className="text-sm font-semibold">Check-in</label>
          <input className="w-32 text-sm focus:outline-none border-r-1 border-gray-300" type="text" placeholder="Insira as datas" />
        </div>
        
        <div className="flex flex-col items-start">
          <label className="text-sm font-semibold">Checkout</label>
          <input className="w-32 text-sm focus:outline-none border-r-1 border-gray-300" type="text" placeholder="Insira as datas" />
        </div>
        
        <div className="flex flex-col items-start">
          <label className="text-sm font-semibold">Quem</label>
          <input className="w-20 text-sm focus:outline-none" type="text" placeholder="Hóspedes" />
        </div>
      </div>

      <button className="bg-red-500 rounded-full p-2 cursor-pointer hover:bg-red-600">
        <IconSearch 
          aria-label="Ícone de busca"
          size={32}
          color="white"
        />
      </button>
    </div>
  );
}
