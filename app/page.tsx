import { Button } from "@/components/ui/button";
import { CirclePlusIcon, ZapIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="p-24">
      <div className="flex justify-center text-center">
        <span className="absolute mx-auto flex border p-3 text-3xl font-extrabold text-primary blur-xl md:text-6xl">
          TOURNAMATE
        </span>
        <h1 className="border-2 border-purple-400 p-3 text-3xl font-extrabold text-primary md:text-6xl">
          TOURNAMATE
        </h1>
      </div>
      <div className="my-12 flex flex-grow flex-col justify-between sm:flex-row">
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <Button className="flex gap-3 text-white">
            <CirclePlusIcon />
            Create New Tournament
          </Button>
        </div>
        <div className="my-12 flex flex-col items-center gap-3 sm:my-0 sm:flex-row">
          <Button className="flex gap-3 text-white">
            <ZapIcon />
            View All Tournaments
          </Button>
        </div>
      </div>
    </main>
  );
}
