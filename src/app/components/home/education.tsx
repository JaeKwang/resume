'use client'
import "@/app/globals.css"

export default function Education() {
  
  return (
    <div
      className="flex flex-col md:flex-row items-center
      justify-between gap-12 md:gap-0 px-6 md:px-20 py-16 relative"
    >
      <img
        src="/profile.jpg"
        alt="Main visual"
        className="w-64 md:w-80 object-cover"
      />
      <div className="text-right max-w-sm text-gray-700 text-sm leading-relaxed">
        <p className="mb-2 font-medium">
        간단한 텍스트를 추가 및 편집하려면 클릭하세요.
        </p>
        <p>사용자에게 자신을 소개해보세요.</p>
        <p className="mt-6 text-xs text-gray-400">info@mypage.com</p>
      </div>
    </div>
  )
}
