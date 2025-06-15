'use client'
import "@/app/globals.css"
import { motion } from "framer-motion"

const experienceList = [
  {
    year: "2018 ~ 2025 (휴직중)",
    title: "[포테닛] 로봇 제어 SW 개발",
    description:
      "이기종 로봇들을 하나의 제어 플랫폼에서 통합 관리할 수 있도록 Windows 및 Linux OS 기반 제어 소프트웨어를 개발하였으며, 센서통신을 위한 프로토콜(CAN, TCP/IP, Modbus 등)과 실시간 제어 알고리즘을 구현하여 자율주행 물류로봇의 상용화를 지원했습니다.",
  },
  {
    year: "2022",
    title: "[신한라이프] 개인 대상 재무 포트폴리오 설계",
    description:
      "고객의 재무 상황과 생애 목표를 고려하여 맞춤형 자산관리 전략을 설계하고, 은퇴·보험·세금 등 다양한 재무 이슈를 상담하며 장기적 관점에서의 포트폴리오 관리를 수행했습니다.",
  },
  {
    year: "2018",
    title: "[아이비에스아이티] SW 유지보수 및 작업환경 세팅",
    description:
      "BMW 사무실 내 PC 세팅의 자동화를 위한 스크립트 작성, 버전 관리 도입(Git), 통합 개발 환경(IDE, 빌드 툴 등) 구성 등을 통해 개발자의 생산성을 향상시켰습니다.",
  },
]

export default function Experience() {
  return (
    <div className="px-4 sm:px-6 py-12">
      <p className="font-cookierun text-5xl sm:text-6xl md:text-7xl text-center py-10 sm:py-15 md:py-20">경력</p>
      <div className="max-w-3xl mx-auto flex flex-col gap-8 sm:gap-12">
        {experienceList.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="border-l-4 border-gray-300 pl-5 sm:pl-6 relative"
          >
            <div className="absolute left-[-8px] top-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-blue-500 rounded-full" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2">{item.title}</h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-500 mb-4">{item.year}</p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 whitespace-pre-line">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}