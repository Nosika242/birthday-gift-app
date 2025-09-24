import {GiftBox} from "./GiftBox";
import GiftCards from "./GiftCards";
import useGift from "../hooks/useGift";
import styles from "./giftList.module.css"

export default function Giftlist() {
  const gifts = GiftBox();
  const { handleSelectGift } = useGift(); 

  return (
    <div className={styles.giftCard}>
      {gifts.map((gift) => (
        <GiftCards key={gift.id} gift={gift} onSelect={handleSelectGift} />
      ))}
    </div>
  );
}


// grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6