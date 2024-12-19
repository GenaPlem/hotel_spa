export default function HotelCard() {
  return (
    <article className="relative flex flex-col justify-between overflow-hidden transition duration-300 transform shadow-neon rounded-xl hover:scale-105">
      <div>
        <img src="" alt="" className="object-cover w-full h-auto" />
        <h2 className="m-1 text-sm font-bold md:text-xl line-clamp-2">
          Hotel Pacific
        </h2>
      </div>

      <p className="mb-2 font-bold">Dublin</p>
      <p className="mb-2 text-xs">Rate: 4.5/5</p>

      <p className="mb-2 text-xs ">Dates</p>
      <p className="mb-2 text-xs ">All inclusive</p>
      <p className="mb-2 text-xs ">Rooms</p>
    </article>
  );
}
