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
      <p className="font-cookierun text-5xl sm:text-6xl md:text-7xl text-center mb-10 sm:mb-15 md:mb-20">프로젝트</p>
      <p className="font-cookierun text-2xl sm:text-3xl md:text-4xl text-center">[사내 프로젝트]</p>
      <Carousel items={ihData} />
      <p className="font-cookierun text-2xl sm:text-3xl md:text-4xl text-center">[외주 개발]</p>
      <Carousel items={cbDta} />
      <p className="font-cookierun text-2xl sm:text-3xl md:text-4xl text-center">[자체 기획 프로젝트]</p>
      <Carousel items={sdData} />
      <p className="font-cookierun text-2xl sm:text-3xl md:text-4xl text-center">[학내 프로젝트]</p>
      <Carousel items={acData} />
    </div>
  );
}
