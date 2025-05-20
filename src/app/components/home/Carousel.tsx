'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface CarouselItem {
  title: string
  image?: string
  uri: string
}

interface CarouselProps {
  items: CarouselItem[]
}

export default function Carousel({ items }: CarouselProps) {
  const [index, setIndex] = useState(0)
  const length = items.length
  const router = useRouter()

  const prev = () => setIndex((prev) => (prev - 1 + length) % length)
  const next = () => setIndex((prev) => (prev + 1) % length)

  return (
    <div className="relative w-[300px] py-16">
      {/* 카드 wrapper */}
      <div className="relative h-[300px] flex items-center justify-center overflow-visible">
        {items.map((item, i) => {
          const offset = i - index
          const isActive = offset === 0

          return (
            <motion.div
              key={i}
              onClick={() => (index === i) ? router.push(item.uri) : setIndex(i)}
              className={`absolute w-[240px] h-[300px] rounded-xl text-white flex items-center justify-center
                text-2xl font-bold shadow-xl transition-all duration-500 cursor-pointer
                ${isActive ? 'hover:scale-110 z-10' : 'z-0'}`}
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: `translateX(${offset * 280}px) scale(${isActive ? 1 : 0.8})`,
                opacity: isActive ? 1 : 0.5,
              }}
            >
              <div>
                
              </div>
              {item.title}
            </motion.div>
          )
        })}
      </div>

      {/* 좌우 버튼 */}
      <div className="absolute top-1/2 left-0 right-0 flex justify-between -translate-y-1/2 z-50 pointer-events-none">
        <button
          onClick={prev}
          className="bg-white hover:bg-gray-200 rounded-full p-4 shadow-lg text-xl pointer-events-auto"
        >
          ◀
        </button>
        <button
          onClick={next}
          className="bg-white hover:bg-gray-200 rounded-full p-4 shadow-lg text-xl pointer-events-auto"
        >
          ▶
        </button>
      </div>
    </div>
  )
}
