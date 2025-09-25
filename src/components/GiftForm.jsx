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
            className=" p-2 hover:border-emerald-50  shadow-sm border border-slate-200 rounded-b-3xl  outline-0 shadow-gray-300 focus:border-purple-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-2 hover:border-emerald-50 shadow-sm border border-slate-200  rounded-bl-3xl  outline-0 shadow-slate-300 focus:border-purple-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50 "
            required
          />
          <textarea
            name="note"
            placeholder="Send a Review (optional)"
            className="border-2 p-2 rounded shadow-sm border-purple-50  hover:border-emerald-50 outline-0 shadow-slate-300 focus:border-purple-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
          />
          <div className="flex gap-2 mt-4">
            <button
              type="submit"
              className="flex-1 bg-pink-500 text-white py-2 rounded hover:bg-pink-600 rounded-r-2xl"
            >
              Send Request
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex-1 bg-gray-300 py-2  hover:bg-gray-400 rounded-l-2xl"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
