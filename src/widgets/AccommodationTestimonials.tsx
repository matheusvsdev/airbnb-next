import { IconStarFilled } from "@/assets/icons";
import { Testimonials } from "@/types/AirbnbData";
import Image from "next/image";

interface TestimonialsProps {
  testimonials: Testimonials[];
}

export default async function AccommodationTestimonials(
  props: TestimonialsProps
) {
  const testimonials = props.testimonials;
  
  return (
    <div className="w-full py-4">
      <h2 className="text-xl font-semibold">Depoimentos</h2>
      <div className="flex items-center gap-2">
        <IconStarFilled className="size-4" />
        <span>4.9 (400+ avaliações)</span>
      </div>

      {testimonials.map((testimonial, index) => (
        <div className="flex flex-row gap-2 py-4 items-center" key={index}>
          <Image
            className="aspect-square object-center rounded-full"
            src={testimonial.image}
            alt={testimonial.name}
            width={48}
            height={48}
          />

          <div>
            <span className="font-semibold">{testimonial.name}</span>
            <p>{testimonial.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
