export default function HotelCard({ hotel }) {
  // console.log(hotel)

  return (
    <article className="relative flex flex-col justify-between overflow-hidden transition duration-300 transform border-sky-500 border rounded-xl hover:scale-105">
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
        {hotel.datesOfTravel.map((date) => (
          <span className="block pt-1 font-normal">
            {date}
            <br />
          </span>
        ))}
      </p>
      <p className="mb-2 text-xs font-bold">{hotel.boardBasis}</p>
      <p className="mb-2 text-xs font-bold">
        Available Rooms:
        <br />
        {hotel.rooms.map((room) => (
          <span className="block pt-1 font-normal">
            {room.roomType}: {room.amount}
            <br />
          </span>
        ))}
      </p>
    </article>
  );
}
