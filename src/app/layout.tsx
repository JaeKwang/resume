import Image from "next/image"
import "./globals.css"

export const metadata = {
  title: 'Jaekwang Park',
  description: `Jaekwang Park's Resume`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="scroll-smooth bg-gray-100 text-gray-900">
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50 overflow-hidden">
          <nav className="px-12 py-8 flex justify-between items-center whitespace-nowrap gap-8">
            <a href="#introduce">
              <div className="flex items-center shrink-0">
                <Image src="/jk-sm.png" alt="JK" width={30} height={30} className="prohibit-copy" />
                <h1 className="text-xl font-semibold prohibit-copy">Jaekwang Park</h1>
              </div>
            </a>
            <ul className="flex space-x-8 text-sm font-medium">
              <li><a href="#introduce" className="hover:text-[#53b05b] transition-colors duration-300 text-lg">소 개</a></li>
              <li><a href="#experience" className="hover:text-[#53b05b] transition-colors duration-300 text-lg">경 력</a></li>
              <li><a href="#education" className="hover:text-[#53b05b] transition-colors duration-300 text-lg">학 력</a></li>
              <li><a href="#projects" className="hover:text-[#53b05b] transition-colors duration-300 text-lg">프 로 젝 트</a></li>
              <li><a href="#skills" className="hover:text-[#53b05b] transition-colors duration-300 text-lg">기 술</a></li>
            </ul>
          </nav>
        </header>
        <main className="pb-16">
          {children}
        </main>

        <footer
          className="w-full bg-white z-50 py-4"
          style={{ boxShadow: '0 -4px 10px rgba(0,0,0,0.2)' }}
        >
          <div className="text-center text-sm text-gray-600">
            <p className="mb-2">© 2025 Jaekwang Park. All rights reserved.</p>
            <div className="flex justify-center gap-4 text-sm">
              <a href="mailto:jkpark125@gmail.com" className="hover:text-[#53b05b] transition-colors duration-300">
                <div className="flex flex-row items-center gap-1">
                <Image src="/mail.png" alt="mail" className="prohibit-copy" width={16} height={16} />
                  <p>jkpark125@gmail.com</p>
                </div>
              </a>
              <a href="https://github.com/JaeKwang" target="_blank" className="hover:text-[#53b05b] transition-colors duration-300">
                <div className="flex flex-row items-center gap-1">
                  <Image src="/github.png" alt="github" className="prohibit-copy" width={16} height={16} />
                  <p>GitHub</p>
                </div>
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
