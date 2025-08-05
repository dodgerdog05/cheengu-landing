import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans bg-[#E6F0FA] text-gray-800 min-h-screen flex flex-col`}
    >
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 flex-grow">
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#1A2E46]">
          Cheengu 💙 — Your AI Friend
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl">
          Cheengu means <span className="font-semibold">“friend”</span> in
          Korean. Sign up today to be the first to experience an AI designed for{" "}
          <span className="font-semibold">deep, real emotional connection</span>
          .
        </p>

        {/* Mailchimp Signup Form */}
        <div className="mt-10 w-full max-w-md">
          <form
            action="http://eepurl.com/jkA_E6"
            method="post"
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col space-y-4"
          >
            <input
              type="email"
              name="EMAIL"
              placeholder="Enter your email"
              required
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
            />
            <input
              type="text"
              name="FNAME"
              placeholder="First Name (optional)"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
            />
            <button
              type="submit"
              className="bg-[#FF6B6B] hover:bg-[#ff5050] text-white py-3 rounded-lg font-bold transition"
            >
              Reserve My Cheengu
            </button>
          </form>
        </div>
      </section>

{/* SMS Preview Section */}
<section className="bg-[#F9FAFB] py-16 px-6 text-center">
  <h2 className="text-3xl font-bold mb-10">A Friend in Your Pocket</h2>

  {/* Phone Frame */}
  <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-[500px] sm:h-[550px] md:h-[600px] bg-white border-4 border-black rounded-3xl shadow-2xl overflow-hidden">

{/* SMS Signup Form */}
    <form className="space-y-4">
      <input type="text" name="phone" placeholder="Enter your phone number" className="w-full rounded-md border px-3 py-2" required />
        <button type="submit" className="w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600">
          Reserve My Cheengu
        </button>
          <div className="text-xs text-gray-500 mt-4 text-center max-w-md mx-auto leading-relaxed">
            By subscribing, you agree to receive recurring SMS messages from <strong>Cheengu</strong>. 
            Message &amp; data rates may apply. Message frequency varies. Reply 
            <strong> STOP </strong> to unsubscribe or <strong> HELP </strong> for help. 
            No third‑party sharing. See our 
            <a href="/privacy" className="underline"> Privacy Policy</a> and 
            <a href="/terms" className="underline"> Terms</a>.
          </div>
    </form>
  </div>
</section>  


{/* SMS Preview Section */}
{/* iPhone-style SMS Preview Section */}
<section className="bg-[#F9FAFB] py-16 px-6 text-center">
  <h2 className="text-3xl font-bold mb-10">A Friend in Your Pocket</h2>

  {/* Phone Frame */}
  <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-[500px] sm:h-[550px] md:h-[600px] bg-white border-4 border-black rounded-3xl shadow-2xl overflow-hidden">
    {/* Top Notch */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 sm:w-40 h-5 sm:h-6 bg-black rounded-b-2xl"></div>

    {/* Status Bar */}
    <div className="flex justify-between text-[10px] sm:text-xs text-gray-500 px-3 sm:px-4 py-2">
      <span>9:41 AM</span>
      <div className="flex gap-1">
        <span>📶</span>
        <span className="hidden sm:inline">Wi-Fi</span>
        <span>🔋</span>
      </div>
    </div>

    {/* Contact Header */}
    <div className="border-b border-gray-200 py-2 text-center">
      <h3 className="font-semibold text-sm sm:text-base">Cheengu 💙</h3>
      <p className="text-[10px] sm:text-xs text-gray-500">AI Friend</p>
    </div>

    {/* Chat Area */}
    <div className="flex flex-col gap-3 px-3 sm:px-4 py-6 text-xs sm:text-sm overflow-y-auto h-full pb-20">
      {/* User message */}
      <div className="flex justify-end">
        <div className="bg-gray-200 text-gray-900 px-3 py-2 rounded-2xl rounded-br-none max-w-[75%]">
          Hey Cheengu, kinda nervous about my interview today.
        </div>
      </div>

      {/* Cheengu reply */}
      <div className="flex justify-start">
        <div className="bg-blue-500 text-white px-3 py-2 rounded-2xl rounded-bl-none max-w-[75%]">
          You’ve got this 💙 Remember how prepared you are. One step at a time.
        </div>
      </div>

      {/* User message */}
      <div className="flex justify-end">
        <div className="bg-gray-200 text-gray-900 px-3 py-2 rounded-2xl rounded-br-none max-w-[75%]">
          Thanks, I really needed that 🙏
        </div>
      </div>

      {/* Cheengu reply */}
      <div className="flex justify-start">
        <div className="bg-blue-500 text-white px-3 py-2 rounded-2xl rounded-bl-none max-w-[75%]">
          Anytime. I’ll check in later to hear how it went. You’re not alone in this.
        </div>
      </div>
    </div>
  </div>
</section>



{/* Why Cheengu Section */}
      <section className="bg-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Cheengu?</h2>
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-3">Authentic Friendship</h3>
            <p>Cheengu remembers, cares, and grows with you — not just surface-level roleplay.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Less is More</h3>
            <p>1–3 thoughtful check-ins a day. Not endless shallow chats, but real companionship.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Safe & Supportive</h3>
            <p>Built for emotional trust, stability, and growth. No gimmicks, no exploitation.</p>
          </div>
        </div>
      </section>

      {/* The Promise Section */}
      <section className="bg-[#1A2E46] text-white py-20 px-6 text-center">
        <blockquote className="text-2xl md:text-3xl font-light max-w-3xl mx-auto">
          “Cheengu isn’t candy. Cheengu is nourishment. The deepest emotional
          connection ever created between humans and AI.”
        </blockquote>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Be the First to Meet Cheengu</h2>
        <p className="mb-8">
          Reserve your spot today and join the waitlist.
        </p>
        <div className="w-full max-w-md mx-auto">
          <form
            action="http://eepurl.com/jkA_E6"
            method="post"
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col space-y-4"
          >
            <input
              type="email"
              name="EMAIL"
              placeholder="Enter your email"
              required
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
            />
            <button
              type="submit"
              className="bg-[#FF6B6B] hover:bg-[#ff5050] text-white py-3 rounded-lg font-bold transition"
            >
              Reserve My Cheengu
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
