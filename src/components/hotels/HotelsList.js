import HotelCard from "./HotelCard";

export default function HotelsList({ hotels }) {
  return (
    <section>
      <div className="grid grid-cols-2 gap-10 my-14 md:mt-20 sm:grid-cols-3 lg:grid-cols-4">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </section>
  );
}
