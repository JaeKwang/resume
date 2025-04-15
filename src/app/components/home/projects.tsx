'use client'
import "@/app/globals.css"
import Carousel from "./Carousel"
import data from "@/data/projects.json"

export default function Projects() {

  return (
    <div className="px-6 py-24">
      <h2 className="text-4xl font-bold text-center mb-16">프로젝트</h2>
      <Carousel items={data} />
    </div>
  )
}
