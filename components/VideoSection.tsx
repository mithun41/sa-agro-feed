export default function VideoSection() {
  return (
    <section className="py-20 bg-[#0d0a07]">
      <div className="w-full px-6">
        <div className="mx-auto w-full">
          <div className="flex flex-col items-center text-center mb-10">
            <p className="text-red-700 text-xs font-bold tracking-[0.25em] uppercase mb-3">
              Featured Video
            </p>
            <h2 className="text-4xl font-black text-white tracking-tight">
              Watch Our Story
            </h2>
          </div>
          <div className="w-full aspect-video overflow-hidden rounded-[28px] shadow-2xl border border-white/10">
            <iframe
              src="https://www.youtube.com/embed/eBGlOy9DR1M?autoplay=1&mute=1&loop=1&playlist=eBGlOy9DR1M"
              title="SA Agro Feed Story Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
