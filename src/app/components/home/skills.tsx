'use client'
import "@/app/globals.css"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function Skills() {
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
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -200 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col items-center gap-16 py-12"
    >
      <div className="flex flex-col items-center gap-16 py-16">
        <p className="font-cookierun text-6xl">기술스택</p>
        <div className="flex flex-col gap-4">
          <p className="font-noonnu text-3xl">[로보틱스]</p>
          <p className="font-noonnu text-4xl">
            C++, MFC, ROS, ROS2, Python, PyQT<br/>
            Serial, TCP/UDP, CAN, MQTT, Modbus<br/>
            2D/3D SLAM, FSM<br/>
          </p>
          <br/>
          <p className="font-noonnu text-3xl">[블록체인]</p>
          <p className="font-noonnu text-4xl">
            Solidity, Hardhat, Ethers, Web3, Pinata<br/>
            OpenSea
          </p>
          <br/>
          <p className="font-noonnu text-3xl">[웹/모바일]</p>
          <p className="font-noonnu text-4xl">
            AWS, EC2, Vercel, React, NextJS, Flutter<br/>
            Express, NginX, MySQL<br/>
          </p>
          <br/>
          <p className="font-noonnu text-3xl">[게임개발]</p>
          <p className="font-noonnu text-4xl">
            Unity3D, Phaser3<br/>
          </p>
          <br/>
          <p className="font-noonnu text-3xl">[ETC]</p>
          <p className="font-noonnu text-4xl">
            Matlab, Jira, Github, Bitbucket<br/>
          </p>
        </div>
      </div>
    </motion.div>
  )
}
