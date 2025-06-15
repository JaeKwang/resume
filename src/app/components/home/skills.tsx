'use client'
import "@/app/globals.css"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function Skills() {

  return (
    <div className="flex flex-col items-center px-4 sm:px-6 py-20 sm:py-25 md:py-30 gap-12">
      <p className="font-cookierun text-5xl sm:text-6xl md:text-7xl text-center mb-2 sm:mb-4 md:mb-6">기술스택</p>

      <div className="flex flex-col gap-8 text-center max-w-4xl">
        {[
          {
            title: "[로보틱스]",
            content: "C++, MFC, ROS, ROS2, Python, PyQT, Serial, TCP/UDP, CAN, MQTT, Modbus, 2D/3D SLAM, FSM"
          },
          {
            title: "[블록체인]",
            content: "Solidity, Hardhat, Ethers, Web3, Pinata, OpenSea"
          },
          {
            title: "[웹/모바일]",
            content: "AWS, EC2, Vercel, React, NextJS, Flutter, Express, NginX, MySQL"
          },
          {
            title: "[게임개발]",
            content: "Unity3D, Phaser3"
          },
          {
            title: "[AI]",
            content: "Google Colab, CNN, Yolo Network"
          },
          {
            title: "[ETC]",
            content: "Matlab, Jira, Github, Bitbucket"
          }
        ].map(({ title, content }) => (
          <div key={title} className="space-y-2 sm:space-y-4 md:space-y-6">
            <p className="font-noonnu text-3xl sm:text-4xl md:text-5xl">{title}</p>
            <p className="font-noonnu text-2xl sm:text-3xl md:text-4xl whitespace-pre-line">{content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
