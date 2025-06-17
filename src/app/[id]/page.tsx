import { fetchDataById } from "@/utils/api";
import AccommodationDetails from "@/widgets/AccommodationDetails";
import AccommodationImages, { Photos } from "@/widgets/AccommodationImages";
import AccommodationTestimonials from "@/widgets/AccommodationTestimonials";
import Footer from "@/widgets/Footer";
import SearchBar from "@/widgets/SearchBar";
import TopBar from "@/widgets/TopBar";
import { notFound } from "next/navigation";

interface PageProps {
  id: string;
}

export default async function Page({ params }: { params: PageProps }) {
  const { id } = await params;
  const accommodation = await fetchDataById(id);

  if (!accommodation) {
    notFound();
  }

  return (
    <div>
      <header className="container mx-auto">
        <TopBar />
        <SearchBar />
      </header>

      <hr className="my-6 opacity-10" />

      <main className="container mx-auto py-6">
        <h1 className="text-3xl font-semibold mb-2">{accommodation.title}</h1>
        <AccommodationImages photos={accommodation.photos} />
        <div className="flex flex-col md:flex-row">
          <AccommodationDetails
            description={accommodation.location.description}
          />
          <AccommodationTestimonials testimonials={accommodation.testimonials} />
        </div>
      </main>

      <footer className="bg-gray-100">
        <Footer />
      </footer>
    </div>
  );
}
