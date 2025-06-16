import SearchBar from "@/widgets/SearchBar";
import TopBar from "@/widgets/TopBar";

export default function Home() {
  return (
    <>
      <header>
        <TopBar />
        <SearchBar />
      </header>
      <hr className="mt-5 opacity-10"/>
      <div className="border-green-600 border-2 mt-10">Área conteúdos</div>
      <div className="border-blue-600 border-2">Rodapé</div>
    </>
  );
}
