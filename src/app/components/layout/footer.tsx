'use client'
import "@/app/globals.css"
import Image from "next/image"

export default function Footer() {

  return (
    <footer
      className="w-full bg-white z-50 py-4"
      style={{ boxShadow: '0 -4px 10px rgba(0,0,0,0.2)' }}
    >
      <div className="text-center text-sm text-gray-600">
        <p className="mb-2">© 2025 Jaekwang Park. All rights reserved.</p>
        <div className="flex justify-center gap-4 text-sm">
          <a href="mailto:jkpark125@gmail.com" className="hover:text-[#53b05b] transition-colors duration-300">
            <div className="flex flex-row items-center gap-1">
            <img src="/mail.png" alt="mail" className="prohibit-copy" width={16} height={16} />
              <p>jkpark125@gmail.com</p>
            </div>
          </a>
          <a href="https://github.com/JaeKwang" target="_blank" className="hover:text-[#53b05b] transition-colors duration-300">
            <div className="flex flex-row items-center gap-1">
              <img src="/github.png" alt="github" className="prohibit-copy" width={16} height={16} />
              <p>GitHub</p>
            </div>
          </a>
        </div>
      </div>
    </footer>
  )
}
