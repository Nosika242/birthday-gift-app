import useGift from "../hooks/useGift";
import { formatNaira } from "./GiftBox";

export default function GiftCards({ gift }) {
  const { handleSelectGift } = useGift();
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 transition">
      <img
        src={gift.image}
        alt={gift.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{gift.name}</h3>
        <p className="text-pink-600 font-semibold">{formatNaira(gift.price)}</p>
        <button
          className="cursor-pointer mt-3 w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600"
          onClick={() => handleSelectGift(gift)}
        >
          Gift Me 🎁
        </button>
      </div>
    </div>
  );
}
