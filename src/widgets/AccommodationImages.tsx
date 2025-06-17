import Image from "next/image";

export type Photos = {
  id: string;
  source: string;
  description: string;
};

interface AccommodationImagesProps {
  photos: Photos[];
}

export default function AccommodationImages({
  photos,
}: AccommodationImagesProps) {
  return (
    <div className="grid grid-cols-6 gap-2">
      {photos.slice(0, 9).map((photo, index) => {
        const firstPhoto = index == 0 ? "col-span-2 row-span-2" : "";

        return (
          <div key={index} className={`${firstPhoto}`}>
            <Image
              className="w-full aspect-square object-cover"
              src={photo.source}
              alt={photo.description}
              width={1280}
              height={720}
            />
          </div>
        );
      })}
    </div>
  );
}
