import { fetchData } from "@/utils/api";
import Accommodations from "@/widgets/Accommodations";
import Footer from "@/widgets/Footer";
import HorizontalNavbar from "@/widgets/HorizontalNavbar";
import SearchBar from "@/widgets/SearchBar";
import TopBar from "@/widgets/TopBar";

export default async function Home() {

  const data = await fetchData()

  return (
    <>
      <header className="container mx-auto">
        <TopBar />
        <SearchBar />
      </header>

      <hr className="my-6 opacity-10" />

      <main className="container mx-auto">
        <HorizontalNavbar icons={data.icons}/>
        <Accommodations accommodations={data.accommodation}/>
      </main>

      <footer className="bg-gray-100">
        <Footer />
      </footer>
    </>
  );
}
