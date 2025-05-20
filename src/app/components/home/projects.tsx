"use client";
import "@/app/globals.css";
import Carousel from "./Carousel";
import acData from "@/data/ACProject.json";
import ihData from "@/data/IHProject.json";
import cbDta from "@/data/CBProject.json";
import sdData from "@/data/SDProject.json";

export default function Projects() {
  return (
    <div className="px-6 py-24">
      <h2 className="text-4xl font-bold text-center mb-16">프로젝트</h2>
      <h2 className="text-2xl font-bold text-center">[학내 프로젝트]</h2>
      <Carousel items={acData} />
      <h2 className="text-2xl font-bold text-center">[사내 프로젝트]</h2>
      <Carousel items={ihData} />
      <h2 className="text-2xl font-bold text-center">[외주 개발]</h2>
      <Carousel items={cbDta} />
      <h2 className="text-2xl font-bold text-center">[자체 기획 프로젝트]</h2>
      <Carousel items={sdData} />
    </div>
  );
}
