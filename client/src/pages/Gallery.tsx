export default function Gallery() {
  return (
    <section className="mx-4 md:mx-16 mt-48">
      <h1 className="text-5xl text-[white] text-center">Our Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[250px] md:grid-flow-dense">
        <div className="bg-green-400 rounded-md md:col-span-2 relative overflow-hidden">
          <img
            src="picture.jpg"
            className="
      w-full
      h-auto
      md:absolute md:inset-0
      md:h-full md:w-full
      object-cover
    "
          />
        </div>
        <div className="bg-green-400 rounded-md relative overflow-hidden">
          <img
            src="unclecar.jpg"
            className="
      w-full
      h-auto
      md:absolute md:inset-0
      md:h-full md:w-full
      object-cover
    "
          />
        </div>
        <div className="bg-green-400 rounded-md">3</div>
        <div className="bg-green-400 rounded-md md:col-span-2 md:row-span-2 relative overflow-hidden">
          <img
            src="picture2.jpg"
            className="
      w-full
      h-auto
      md:absolute md:inset-0
      md:h-full md:w-full
      object-cover
    "
          />
        </div>
        <div className="text-white text-3xl rounded-md flex items-center justify-center">
          TEXT
        </div>
        <div className="bg-green-400 rounded-md md:row-span-2 relative overflow-hidden">
          <img
            src="suspension.jpg"
            className="
      w-full
      h-auto
      md:absolute md:inset-0
      md:h-full md:w-full
      object-fit
    "
          />
        </div>
        <div className="bg-green-400 rounded-md">7</div>
        <div className="bg-green-400 rounded-md">8</div>
      </div>
    </section>
  );
}
