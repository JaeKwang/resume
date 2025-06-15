'use client'
import "@/app/globals.css"
import { motion } from 'framer-motion'

const educationList = [
  {
    year: "2024 ~ 2025",
    title: "멋쟁이사자처럼 블록체인부트캠프 이수",
    description:
      "Solidity, Hardhat, Web3.js, IPFS 등의 기술을 활용한 스마트 컨트랙트 실습과 DApp 프로젝트를 수행하며, 블록체인 네트워크의 구조 및 분산원장 기술에 대한 심도 깊은 이론과 실무 경험을 쌓았습니다.",
  },
  {
    year: "2016 ~ 2018",
    title: "충남대학교 컴퓨터공학과 (석사)",
    description:
      "2차원 RGB+D 데이터의 처리 효율 향상을 위한 알고리즘을 연구하였고, 멀티미디어 학회(2016)에서 「야외 RGB+D 데이터베이스 구축을 위한 깊이 영상 신뢰도 측정 기법」을 제안하였습니다. 또한 한국컴퓨터종합학술대회(KCC 2017)에는 「픽셀 단위의 빠른 아핀변환행렬 보간법」 논문을 발표하며, 영상 내 좌표계 보정 및 변환 성능에 최적화된 기법을 제안했습니다.",
  },
  {
    year: "2012 ~ 2016",
    title: "충남대학교 컴퓨터공학과 (학사)",
    description:
      "GROW (Game, Robot, Wearable Computer) 학술동아리에서 활동하며 Unity 기반 게임 및 Arduino를 활용한 로봇 프로토타입을 개발하였고, 학내외 경진대회에 다수 참가했습니다. 게임팀 교육부장을 맡아 팀원 교육 및 프로젝트 기획을 주도했습니다."
  },
  {
    year: "2009 ~ 2012",
    title: "동방고등학교",
  },
]

export default function Education() {
  return (
      <div className="px-4 sm:px-6 py-12">
        <p className="font-cookierun text-5xl sm:text-6xl md:text-7xl text-center py-10 sm:py-15 md:py-20">학력 및 교육</p>
        <div className="max-w-3xl mx-auto flex flex-col gap-8 sm:gap-12">
          {educationList.map((item, idx) => (
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
