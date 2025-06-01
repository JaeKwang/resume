"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from 'next/image'

interface CarouselItem {
  title: string;
  description?: string;
  image?: string;
  badge?: string;
  uri: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

export default function Carousel({ items }: CarouselProps) {
  const [index, setIndex] = useState(0);
  const length = items.length;
  const router = useRouter();

  const prev = () => setIndex((prev) => (prev - 1 + length) % length);
  const next = () => setIndex((prev) => (prev + 1) % length);

  return (
    <div className="relative w-full max-w-5xl mx-auto mb-24">
      {/* 3D 덱 구조 */}
      <div className="relative h-[500px] flex items-center justify-center overflow-visible perspective-[1200px]">
        {items.map((item, i) => {
          const offset = i - index;
          const absOffset = Math.abs(offset);
          const isActive = offset === 0;

          const translateX = offset * 300;
          const translateZ = -absOffset * 80;
          const scale = isActive ? 1 : 0.95;
          const zIndex = 10 - absOffset;

          return (
            <motion.div
              key={i}
              onClick={() =>
                index === i ? router.push(item.uri) : setIndex(i)
              }
              className={`absolute w-[320px] h-[400px] bg-white rounded-xl shadow-xl overflow-hidden cursor-pointer transition-all duration-500`}
              style={{
                transform: `
                  translateX(${translateX}px)
                  translateZ(${translateZ}px)
                  scale(${scale})
                `,
                transformStyle: "preserve-3d",
                transformOrigin: "center center",
                zIndex: zIndex,
              }}
            >
              {/* 카드 내용 */}
              {/* 이미지 */}
              <div className="relative h-[230px]">
                <Image
                  src={item.image ?? ''}
                  alt={item.title}
                  fill
                  className="w-full h-full object-cover prohibit-copy"
                />
                {item.badge && (
                  <span className="absolute top-2 right-2 bg-white text-xs text-gray-700 font-semibold px-2 py-1 rounded shadow">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* 텍스트 */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {item.description ||
                    "Your content goes here. Edit or remove this text."}
                </p>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm hover:bg-purple-700">
                  More
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 좌우 버튼 */}
      <div className="absolute top-1/2 -translate-y-1/2 z-50 pointer-events-none w-full">
        <div className="flex justify-between px-[calc(50%-160px-48px)] pointer-events-auto">
          <button
            onClick={prev}
            className="bg-purple-600 hover:bg-purple-400 rounded-full p-3 shadow-lg text-xl text-white"
          >
            {`<`}
          </button>
          <button
            onClick={next}
            className="bg-purple-600 hover:bg-purple-400 rounded-full p-3 shadow-lg text-xl text-white"
          >
            {`>`}
          </button>
        </div>
      </div>

      {/* 페이지네이션 */}
      <div className="flex justify-center space-x-2">
        {items.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-purple-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
