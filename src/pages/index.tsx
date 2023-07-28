import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/component/Header";
import Stats from "@/component/Stats";
import Service from "@/component/Services";
import Card from "@/component/Card";
import { gymLoc } from "../../Data/gymLoc";
import Footer from "@/component/Footer";

export default function Home() {
  return (
    <main>
      <div>
        <title>Your fitness buddy</title>
        <Header />
        <Stats />
        {/* <Service/> */}
        <div className="flex flex-wrap justify-evenly md:flex-row  rounded-xl">
          {gymLoc &&
            gymLoc.map((items: any, i: number) => (
              <Card items={items} key={i} />
            ))}
        </div>
        <Footer />
      </div>
    </main>
  );
}
