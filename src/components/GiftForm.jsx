import emailjs from "@emailjs/browser";
import useGift from "../hooks/useGift";

export default function GiftForm({ gift }) {
  const { setIsOpen, handleSuccess } = useGift();

  const handleSend = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsOpen(false);
        handleSuccess();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blue-200 bg-[url(/image/background_21.jpeg)]  bg-no-repeat bg-cover bg-blend-screen">
      <div className="bg-white p-6 rounded-xl shadow-lg w-96 relative">
        <h2 className="text-xl font-bold mb-4">🎁 {gift?.name}</h2>
        <form onSubmit={handleSend} className="flex flex-col gap-3">
          {/* hidden inputs for emailjs */}
          <input type="hidden" name="gift" value={gift?.name} />
          <input type="hidden" name="price" value={gift?.price} />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border p-2 rounded"
            required
          />
          <textarea
            name="note"
            placeholder="Add a note (optional)"
            className="border p-2 rounded"
          />
          <div className="flex gap-2 mt-4">
            <button
              type="submit"
              className="flex-1 bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
            >
              Send Request
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex-1 bg-gray-300 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
