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
      <img src={hotelData.imageUrl} alt="" />
      <h1 className="my-10 text-2xl sm:text-3xl">{hotelData.name}</h1>
      <div className="flex justify-between">
        <p className="text-left text-xl">
          Hotel located in{" "}
          <span className="font-bold">{hotelData.location}</span>
        </p>
        <p>
          Rating: <span className="font-bold">{hotelData.rating}/5</span>
        </p>
      </div>
      <p className="text-left py-3 font-bold">{hotelData.boardBasis}</p>
      <div className="my-5 flex flex-wrap justify-between gap-2">
        <div className="flex gap-4">
          <p>Available dates: </p>
          {hotelData.datesOfTravel.map((date, index) => (
            <p
              key={`date-${index}`}
              className="block p-1 text-xs text-black rounded-md sm:text-sm bg-sky-400"
            >
              {date}
            </p>
          ))}
        </div>
        <div className="flex gap-2">
          <p className="font-bold">Rooms:</p>

          {hotelData.rooms.map((room, index) => (
            <span
              key={`room-${index}`}
              className="block font-b p-1 text-xs text-black rounded-md sm:text-sm bg-sky-400"
            >
              {room.roomType}: <span className="font-bold">{room.amount}</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
