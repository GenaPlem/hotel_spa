import { useState } from "react";
import HotelsList from "../components/hotels/HotelsList";
import hotelsData from "../data/hotels.json";

export default function HotelsPage() {
  const [hotels, setHotels] = useState(hotelsData);

  return (
    <>
      <h1 className="text-center text-3xl font-semibold my-9 md:text-5xl">
        Hotels
      </h1>
      <HotelsList hotels={hotels} />
    </>
  );
}
