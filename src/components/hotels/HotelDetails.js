import { useParams } from "react-router-dom";
import hotelsData from "../../data/hotels.json";

export default function HotelDetails() {
  const { id } = useParams();

  const hotelData = hotelsData.find((hotel) => hotel.id.toString() === id);

  if (!hotelData) {
    return (
      <h2 className=" my-10 text-2xl">Hotel with such id is not found!</h2>
    );
  }

  return (
    <>
      <h1 className="my-10 text-2xl sm:text-3xl">{hotelData.name}</h1>
    </>
  );
}
