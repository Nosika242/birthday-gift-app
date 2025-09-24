import { createContext, useState } from "react";

const GiftContext = createContext();

function GiftProvider({ children }) {
  const [selectedGift, setSelectedGift] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [thankYou, setThankYou] = useState(false);

  const handleSelectGift = (gift) => {
    setSelectedGift(gift);
    setIsOpen(true);
  };

  const handleSuccess = () => {
    setThankYou(true);
    setTimeout(() => setThankYou(false), 10000);
  };

  const GiftValues = {
    selectedGift,
    isOpen,
    thankYou,
    setIsOpen,
    handleSelectGift,
    handleSuccess,
  };
  return (
    <div>
      <GiftContext.Provider value={GiftValues}>{children}</GiftContext.Provider>
    </div>
  );
}

export { GiftContext, GiftProvider };
