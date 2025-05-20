'use client'
import "@/app/globals.css"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function Introduce() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="flex flex-row items-center justify-between gap-64 px-6 py-16 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-right max-w-lg text-gray-700 text-sm leading-relaxed"
      >
        <p className="mb-2 font-cookierun font-extrabold text-8xl">
          JaeKwang Park
        </p>
        <p className="mt-6 text-lg">
          자율주행 로봇 제어 소프트웨어에 특화된 엔지니어이자,<br />
          재무컨설턴트로서의 경험을 바탕으로 전통 금융부터<br />
          블록체인 기반 디지털 금융까지 폭넓게 이해하는 개발자입니다.<br />
          기술과 예술의 경계를 넘나드는 뮤지컬 배우 출신이기도 합니다.
        </p>
        <p className="mt-4 font-light text-sm italic text-gray-400">
          #로봇제어 #스마트컨트랙트 #컴퓨터비전<br />
          #AI #게임개발 #재무컨설팅 #뮤지컬배우
        </p>
        <p className="mt-4 text-xs text-gray-400">jkpark125@gmail.com</p>
      </motion.div>

      <motion.img
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.5 }}
        src="/profile.jpg"
        alt="Profile"
        className="w-80 object-cover prohibit-copy"
      />
    </div>
  )
}
