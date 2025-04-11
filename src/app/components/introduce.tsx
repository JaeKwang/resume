
'use client'

export default function Introduce() {
  return (
    <div
      className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-20 py-16"
    >
      {/* 왼쪽: 메인 이미지 (강조 테두리 박스) */}
      <div className="flex justify-center items-center">
        <div>
          <img
            src="/profile.jpg"
            alt="Main visual"
            className="w-64 md:w-80 object-cover"
          />
        </div>
      </div>

      {/* 가운데: 이미지 콜라주 */}
      <div className="grid grid-cols-2 gap-2 max-w-sm">
        <img src="/act1.jpg" className="object-cover w-full h-full" />
        <img src="/act1.jpg" className="object-cover w-full h-full" />
        <img src="/act1.jpg" className="object-cover w-full h-full" />
        <img src="/act1.jpg" className="object-cover w-full h-full" />
      </div>

      {/* 오른쪽: 소개 문구 */}
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
