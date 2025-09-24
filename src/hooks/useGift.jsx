

import { useContext } from "react";
import { GiftContext } from "../context/GiftContext";

export default function useGift() {
  const context = useContext(GiftContext);
  if (!context) {
    throw new Error("useGift must be used within the GiftProvider");
  }
  return context;
}
