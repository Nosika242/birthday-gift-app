import { GiftProvider } from "./context/GiftContext";
import AppContent from "./AppContent";

export default function App() {
  return (
    <GiftProvider>
      <AppContent />
    </GiftProvider>
  );
}
