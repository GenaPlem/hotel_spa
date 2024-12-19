import { useParams } from "react-router-dom";

export default function HotelDetails() {
  const { id } = useParams();

  return <p>{id}</p>;
}
