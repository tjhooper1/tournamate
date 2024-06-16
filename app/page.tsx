export default function Home() {
  return (
    <main className="w-full p-24">
      <Header />
    </main>
  );
}

const Header = () => {
  return (
    <header className="flex justify-center text-center">
      <span className="absolute mx-auto flex border p-3 text-3xl font-extrabold text-primary blur-xl md:text-6xl">
        TOURNAMATE
      </span>
      <h1 className="border-2 border-purple-400 p-3 text-3xl font-extrabold text-primary md:text-6xl">
        TOURNAMATE
      </h1>
    </header>
  );
};
