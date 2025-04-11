'use client'
import "@/app/globals.css"
import { useScrollTop } from "@/hook/useScrollTop";
import Image from "next/image"

export default function Header() {
  const atTop = useScrollTop();

  return (
    <header className={
        `fixed top-0 left-0 w-full ${atTop ? 'bg-transparent' : 'bg-white'}
        shadow-md z-50 overflow-hidden transition-colors duration-800`
    }>
      <nav className="px-12 py-8 flex justify-between items-center whitespace-nowrap gap-8">
        <a href="/#introduce">
          <div className="flex items-center shrink-0 gap-2">
            <Image src="/jk-sm.png" alt="JK" width={30} height={30} className="prohibit-copy" />
            <h1 className="text-xl font-semibold prohibit-copy">Jaekwang Park</h1>
          </div>
        </a>
        <ul className="flex space-x-8 text-sm font-medium">
          <li><a href="#introduce" className="hover:text-[#53b05b] transition-colors duration-300 text-lg">소 개</a></li>
          <li><a href="#skills" className="hover:text-[#53b05b] transition-colors duration-300 text-lg">기 술</a></li>
          <li><a href="#experience" className="hover:text-[#53b05b] transition-colors duration-300 text-lg">경 력</a></li>
          <li><a href="#education" className="hover:text-[#53b05b] transition-colors duration-300 text-lg">학 력</a></li>
          <li><a href="#projects" className="hover:text-[#53b05b] transition-colors duration-300 text-lg">프 로 젝 트</a></li>
          <li><a href="/hobby" className="hover:text-[#53b05b] transition-colors duration-300 text-lg">취 미</a></li>
        </ul>
      </nav>
    </header>
  )
}
