export default function Home() {
  return (
    <>
      {/* Video Hero Section */}
      <section className="relative min-h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/GTR drive.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex items-center justify-center h-full">
          {/* <h2 className="text-white text-4xl">Hero Content Here</h2> */}
        </div>
      </section>
      <section className="min-h-screen">
        <h2 className="text-4xl text-center font-bold text-[white] p-8">
          Our Expertise
        </h2>
      </section>
      <section className="bg-[#00032F]">
        <h2 className="text-4xl text-center font-bold text-[white] p-8">
          No Hype, Just Facts
        </h2>
        <div className="text-[white] text-2xl flex justify-between flex-col items-center gap-8">
          <div>25+ Years of Dedication</div>
          <div>999+ Vehicles Serviced</div>
          <div>97% Customer Satisfaction</div>
          <div>150+ Perfomance Upgrades</div>
        </div>
      </section>
      <section className="min-h-screen">
        <h2 className="text-4xl text-center font-bold text-[white] p-8">
          RPM Advantage
        </h2>
      </section>
    </>
  );
}
