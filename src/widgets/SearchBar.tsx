import { IconSearch } from "@tabler/icons-react";


export default function SearchBar() {
  return (
    <div className="w-full max-w-2xl mx-auto border-1 border-gray-200 flex items-center rounded-full overflow-clip px-4 py-2 shadow-lg shadow-gray-200">
      <input className="w-full text-lg focus:outline-none px-3" type="text" placeholder="Buscar destinos" />
      <button className="bg-red-500 rounded-full p-2">
        <IconSearch 
          aria-label="Ícone de busca"
          size={32}
          color="white"
        />
      </button>
    </div>
  );
}
