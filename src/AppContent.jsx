import GiftForm from "./components/GiftForm";
import ThankYou from "./components/ThankYou";
import Giftlist from "./components/GiftList";
import useGift from "./hooks/useGift";

export default function AppContent() {
  const { isOpen, selectedGift, thankYou } = useGift();

  return (
    <div className="min-h-screen bg-pink-50 bg-[url(/image/background_1.jpeg)]  bg-size-[auto_200px]  bg-fixed bg-blend-screen "> 
      <h1 className=" text-xl md:text-3xl font-bold text-gray-700 mb-6 pt-4 text-center text-shadow-lg">
        Welcome to My Birthday Gift Registry!
      </h1>
      <div>
        <p className="text-sm md:text-xl font-bold text-purple-900 mb-6 text-center text-shadow-lg">
          Select a Gift to Celebrate with Me
        </p>
      </div>

      <Giftlist />
      {isOpen && selectedGift && <GiftForm gift={selectedGift} />}
      {thankYou && <ThankYou />}
    </div>
  );
}


