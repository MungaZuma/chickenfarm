import Image from "next/image";
import Card from "./ui/Card";

export default function Home() {
  return (
    <main className="flex-col min-w-fit m-5">
      <div>Dashboard</div>
      <div className="flex justify-between">
        <Card />
        <Card />
        <Card />
      </div>

      <div></div>
      <div></div>
    </main>
  );
}
