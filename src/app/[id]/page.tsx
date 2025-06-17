import AccommodationDetails from "@/widgets/AccommodationDetails";
import AccommodationImages, { Photos } from "@/widgets/AccommodationImages";
import AccommodationTestimonials from "@/widgets/AccommodationTestimonials";
import Footer from "@/widgets/Footer";
import SearchBar from "@/widgets/SearchBar";
import TopBar from "@/widgets/TopBar";

interface PageProps {
  id: string;
}

interface Location {
  description: string;
}

interface Accommodation {
  slug: string;
  title: string;
  photos: Photos[];
  location: Location;
}

export default async function Page({ params }: { params: PageProps }) {
  const response = await fetch("https://web.codans.com.br/airbnb");
  const data = await response.json();
  const accommodations: Accommodation[] = data.accommodation;

  const accommodation = accommodations.find((item) => item.slug === params.id);

  if (!accommodation) {
    return <p>Acomodação não encontrada.</p>;
  }

  return (
    <>
      <header className="container mx-auto">
        <TopBar />
        <SearchBar />
      </header>

      <hr className="my-6 opacity-10" />

      <main className="container mx-auto py-6">
        <h1 className="text-3xl font-semibold">{accommodation.title}</h1>
        <AccommodationImages photos={accommodation.photos} />
        <div className="flex flex-col md:flex-row">
            <AccommodationDetails description={accommodation.location.description} />
            <AccommodationTestimonials />
        </div>
      </main>

      <footer className="bg-gray-100">
        <Footer />
      </footer>
    </>
  );
}
