import { useParams } from "react-router-dom";
import hotelsData from "../../data/hotels.json";

export default function HotelDetails() {
  const { id } = useParams();
  console.log(hotelsData);

  const hotelData = hotelsData.find((hotel) => hotel.id.toString() === id);

  console.log(hotelData);

  return (
    <>
      <h1 className="my-10 text-2xl sm:text-3xl">{hotelData.name}</h1>
    </>
  );
}
