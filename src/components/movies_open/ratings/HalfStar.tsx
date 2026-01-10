import { FaStarHalf } from "react-icons/fa6";

export default function HalfStar() {
  return (
    <div className="half-star relative">
      <FaStarHalf className="text-[#E50000] absolute h-[24px] w-fit" />
      <FaStarHalf className="text-[#999999] scale-x-[-1] h-[24px] w-fit" />
    </div>
  );
}
