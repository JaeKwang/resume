'use client'
import "@/app/globals.css"
import { motion } from "framer-motion"

const experienceList = [
  {
    year: "2018~2025 (휴직중)",
    title: "로봇 제어 SW 개발",
    description:
      "ROS 기반 자율주행 로봇의 경로 계획 및 제어 알고리즘 개발. 실시간 센서 데이터 처리 및 로컬 맵핑 시스템 설계.",
  },
  {
    year: "2023",
    title: "스마트컨트랙트 설계 및 배포",
    description:
      "Solidity 기반 ERC20, ERC721, ERC1155 컨트랙트 작성 및 Chainlink VRF를 활용한 무작위 NFT 민팅 기능 구현.",
  },
  {
    year: "2021",
    title: "재무 컨설턴트 활동",
    description:
      "개인 및 스타트업 대상 재무 플랜 수립, 리스크 분석 및 포트폴리오 전략 수립. 금융 상품 구조와 블록체인 금융 연결 고도화.",
  },
]

export default function Experience() {
  return (
    <div className="px-6 py-50">
      <h2 className="text-4xl font-bold text-center mb-16">경력</h2>
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {experienceList.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="border-l-4 border-gray-300 pl-6 relative"
          >
            <div className="absolute left-[-10px] top-1 w-4 h-4 bg-blue-500 rounded-full" />
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500 mb-1">{item.year}</p>
            <p className="text-gray-700">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
