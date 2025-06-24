const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#f7f7fb] relative overflow-hidden w-full">
      {/* Top Buttons */}
      <div className="flex gap-4 mt-8 mb-6 z-10">
        <a href="#" className="px-6 py-2 rounded-xl border border-[#6c63ff] text-[#22223b] font-semibold shadow hover:bg-[#f7f7fb] transition">Download CV</a>
        <a href="#about" className="px-6 py-2 rounded-xl bg-[#6c63ff] text-white font-semibold shadow hover:bg-[#5548c8] transition">About</a>
      </div>
      {/* Center Image */}
      <div className="flex flex-col items-center">
        <div className="rounded-b-[40%] overflow-hidden shadow-lg w-64 h-80 bg-black mb-6">
          <img src={myImage} alt="avatar" className="object-cover w-full h-full" />
        </div>
      </div>
      {/* Social Icons Left */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">
        <a href="https://linkedin.com/suhil-mohammed" target="_blank" rel="noopener noreferrer" className="bg-white shadow rounded-xl p-2 hover:bg-[#e0e0f7] transition">
          <i className="fab fa-linkedin text-xl text-[#22223b]"></i>
        </a>
        <a href="#" className="bg-white shadow rounded-xl p-2 hover:bg-[#e0e0f7] transition">
          <i className="fab fa-github text-xl text-[#22223b]"></i>
        </a>
        <a href="https://wa.me/96737775942" target="_blank" rel="noopener noreferrer" className="bg-white shadow rounded-xl p-2 hover:bg-[#e0e0f7] transition">
          <i className="fab fa-whatsapp text-xl text-[#22223b]"></i>
        </a>
        <div className="w-0.5 h-10 bg-[#6c63ff] mx-auto"></div>
      </div>
      {/* Scroll Down Right */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col items-center z-10">
        <span className="text-2xl text-[#22223b]">🖱️</span>
        <span className="text-xs text-[#22223b] rotate-90 mt-2">Scroll Down</span>
      </div>
    </section>
  );
}; 