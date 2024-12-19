import { Link } from "react-router-dom";

export default function HotelCard({ hotel }) {
  return (
    <article className="relative p-2 flex flex-col justify-between overflow-hidden transition duration-300 transform border-sky-500 border rounded-xl hover:scale-105">
      <div>
        <img
          src={hotel.imageUrl}
          alt=""
          className="object-cover w-full h-auto"
        />
        <h2 className="m-1 text-sm font-bold md:text-xl line-clamp-2">
          {hotel.name}
        </h2>
      </div>

      <p className="mb-2 font-bold">{hotel.location}</p>
      <p className="mb-2 text-xs font-bold">Rate: {hotel.rating}/5</p>

      <p className="mb-2 text-xs font-bold">
        Available Dates:
        <br />
        {hotel.datesOfTravel.map((date, index) => (
          <span key={`date-${index}`} className="block pt-1 font-normal">
            {date}
            <br />
          </span>
        ))}
      </p>
      <p className="mb-2 text-xs font-bold">{hotel.boardBasis}</p>
      <p className="mb-2 text-xs font-bold">
        Available Rooms:
        <br />
        {hotel.rooms.map((room, index) => (
          <span key={`room-${index}`} className="block pt-1 font-normal">
            {room.roomType}: {room.amount}
            <br />
          </span>
        ))}
      </p>
      <Link
        to={`/hotels/${hotel.id}`}
        className="absolute inset-0 z-10"
        aria-label="Read more"
      />
    </article>
  );
}
