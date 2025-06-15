'use client'
import "@/app/globals.css"
import { useScrollTop } from "@/hook/useScrollTop";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const atTop = useScrollTop();
  const [menuOpen, setMenuOpen] = useState(false);

  // 모바일 메뉴 열렸을 때 스크롤 방지
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-800 ${atTop ? 'bg-transparent' : 'bg-white shadow-md'}`}>
      <nav className="px-6 md:px-12 py-4 flex justify-between items-center">
        {/* 로고 */}
        <Link href="/#introduce">
          <div className="flex items-center gap-2">
            <img src="/jk-sm.png" alt="JK" width={30} height={30} className="prohibit-copy" />
            <h1 className="text-lg md:text-xl font-semibold prohibit-copy">Jaekwang Park</h1>
          </div>
        </Link>

        {/* 데스크탑 메뉴 */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li><Link href="/#introduce" className="hover:text-[#53b05b] text-lg">소 개</Link></li>
          <li><Link href="/#skills" className="hover:text-[#53b05b] text-lg">기 술</Link></li>
          <li><Link href="/#experience" className="hover:text-[#53b05b] text-lg">경 력</Link></li>
          <li><Link href="/#education" className="hover:text-[#53b05b] text-lg">학 력</Link></li>
          <li><Link href="/#projects" className="hover:text-[#53b05b] text-lg">프 로 젝 트</Link></li>
          <li><Link href="/hobby" className="hover:text-[#53b05b] text-lg text-red-500">취 미</Link></li>
        </ul>

        {/* 모바일 메뉴 버튼 */}
        <button className="md:hidden z-50" onClick={() => setMenuOpen(!menuOpen)} aria-label="메뉴 열기">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* 모바일 오버레이 메뉴 */}
      <div
        className={`
          fixed top-0 right-0 h-full w-3/4 sm:w-2/5 bg-white shadow-lg z-40
          transform transition-transform duration-300 ease-in-out
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <ul className="flex flex-col p-6 pt-20 space-y-6 text-lg font-semibold">
          <li><Link href="/#introduce" onClick={() => setMenuOpen(false)} className="hover:text-[#53b05b]">소 개</Link></li>
          <li><Link href="/#skills" onClick={() => setMenuOpen(false)} className="hover:text-[#53b05b]">기 술</Link></li>
          <li><Link href="/#experience" onClick={() => setMenuOpen(false)} className="hover:text-[#53b05b]">경 력</Link></li>
          <li><Link href="/#education" onClick={() => setMenuOpen(false)} className="hover:text-[#53b05b]">학 력</Link></li>
          <li><Link href="/#projects" onClick={() => setMenuOpen(false)} className="hover:text-[#53b05b]">프 로 젝 트</Link></li>
          <li><Link href="/hobby" onClick={() => setMenuOpen(false)} className="hover:text-[#53b05b] text-red-500">취 미</Link></li>
        </ul>
      </div>

      {/* 반투명 오버레이 클릭 시 닫힘 */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
