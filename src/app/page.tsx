import Accommodations from "@/widgets/Accommodations";
import HorizontalNavbar from "@/widgets/HorizontalNavbar";
import SearchBar from "@/widgets/SearchBar";
import TopBar from "@/widgets/TopBar";

export default function Home() {
  return (
    <>
      <header className="container mx-auto">
        <TopBar />
        <SearchBar />
      </header>

      <hr className="my-3 opacity-10"/>

      <main className="container mx-auto">
        <HorizontalNavbar />
        <Accommodations />
      </main>

      <footer className="container mx-auto">
        Rodapé
      </footer>
    </>
  );
}
