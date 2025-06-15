"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from "lucide-react";

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
              <div className="relative h-[240px]">
                <Image
                  src={item.image ?? ''}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-4">
                  {item.description ||
                    "Your content goes here. Edit or remove this text."}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* 좌우 버튼 */}
      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-[12%] pointer-events-none w-[130%]">
        <div className="flex justify-between pointer-events-auto">
          <button
            onClick={prev}
            className="bg-[#53b05b] hover:bg-[#337939] rounded-full w-12 h-12 flex items-center justify-center shadow-lg shadow-gray-800 text-white"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="bg-[#53b05b] hover:bg-[#337939] rounded-full w-12 h-12 flex items-center justify-center shadow-lg shadow-gray-800 text-white"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* 페이지네이션 */}
      <div className="flex justify-center space-x-2">
        {items.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-[#337939]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
