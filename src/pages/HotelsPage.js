import HotelsList from "../components/hotels/HotelsList";
import hotelsData from "../data/hotels.json";

export default function HotelsPage() {
  return (
    <>
      <h1 className="text-center text-3xl font-semibold my-9 md:text-5xl">
        Hotels
      </h1>
      <HotelsList hotels={hotelsData} />
    </>
  );
}
