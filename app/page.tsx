export default function Home() {
  return (

    <main className="fixed inset-0 z-[999999] bg-[#05070D] flex flex-col items-center justify-center px-6 text-center">

      <div className="text-center">

        {/* LOGO */}
        <img
          src="/logo.png"
          alt="PolyVerb AI"
          className="h-10 md:h-44 lg:h-27 ml-40 md:ml-40 lg:ml-73 mb2"
        />

        {/* MESSAGE */}
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
          Official Launch Tomorrow
        </p>

      </div>

    </main>

  );
}