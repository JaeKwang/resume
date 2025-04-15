'use client'
import "@/app/globals.css"
import { motion } from 'framer-motion'

const educationList = [
  {
    year: "2016 ~ 2021",
    title: "○○대학교 기계공학부 (로봇 전공)",
    description:
      "자율주행 및 제어 시스템 이론 중심 교육. 프로젝트 기반 캡스톤 디자인으로 로봇 경로 제어 구현.",
  },
  {
    year: "2022",
    title: "Solidity 스마트 컨트랙트 실무 과정 (패스트캠퍼스)",
    description:
      "ERC20, ERC721, Chainlink VRF 등 실전 Web3 개발 교육 이수. 메인넷 배포 및 NFT 프로젝트 경험 병행.",
  },
  {
    year: "2023",
    title: "Phaser 3 게임 개발 강의 (인프런)",
    description:
      "Canvas, Scene, 애니메이션 구성 등 웹 기반 게임 제작 핵심 과정 수료.",
  },
  {
    year: "지속 중",
    title: "자율학습 – Web3, ROS, TypeScript, 금융/투자",
    description:
      "블록체인 DeFi, 고급 TS 패턴, ROS 기반 SLAM 및 금융 데이터 기반 리스크 모델링 등 분야별 지식 지속 확장 중.",
  },
]

export default function Education() {
  return (
    <div className="px-6 py-24">
      <h2 className="text-4xl font-bold text-center mb-16">학력 및 교육</h2>
      <div className="max-w-4xl mx-auto flex flex-col gap-12">
        {educationList.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="border-l-4 border-blue-300 pl-6 relative"
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
