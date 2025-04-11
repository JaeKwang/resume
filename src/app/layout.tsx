import Image from "next/image"
import "./globals.css"
import Header from "@/app/components/layout/header"
import Footer from "./components/layout/footer"

export const metadata = {
  title: 'Jaekwang Park',
  description: `Jaekwang Park's Resume`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-gray-100 text-gray-900">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
