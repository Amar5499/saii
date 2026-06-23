const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f8f5ee] px-8">
      <div className="absolute top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-green-100 blur-3xl opacity-70" />

      <div className="relative z-10 max-w-md text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.5em] text-emerald-700">
          A Letter For
        </p>

        <h1 className="text-4xl font-light tracking-tight text-stone-700">
          My Dear Dearest Kunju ❤️
        </h1>

        <div className="mx-auto my-8 h-px w-24 bg-emerald-700/30" />

        <p className="text-xl leading-relaxed text-stone-700">
          Korach karyangal paraya korach romatic aayikala n vech njan... Awmmmmm
        </p>

     <p className="mt-4 text-stone-500 leading-8">
  Scroll aak mole thazhot
  <br />
  Mandachareee....
  <br />
  Undachakeeeeeee....
  <br />
  Kunjipeneeee......
</p>

        <div className="mt-16 flex justify-center">
          <div className="animate-bounce text-2xl text-emerald-700">
            ↓
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;