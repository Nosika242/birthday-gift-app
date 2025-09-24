
import useGift from "../hooks/useGift";

export default function ThankYou() {
  const { thankYou } = useGift();

  if (!thankYou) return null;

  
  return (
    <div className="fixed inset-0 bg-[url(/image/background_16.jpeg)] bg-no-repeat bg-cover flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md animate-bounce">
        <h2 className="text-2xl font-bold text-pink-600 mb-4">🎉 Thank You!</h2>
        <p className="mb-2">
          For celebrating with me! Remain blessed in the Lord. 🙏
        </p>
        <p>Your gift request has been sent 💖</p>
      </div>
    </div>
  );
}
