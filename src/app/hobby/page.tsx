'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import musicalList from '@/data/hobby.json'

export default function Hobby() {
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState<'image' | 'video'>('image')
  const [modalSrc, setModalSrc] = useState('')

  const openModal = (type: 'image' | 'video', src: string) => {
    setModalType(type)
    setModalSrc(src)
    setShowModal(true)
  }

  return (
    <section id="hobby" className="px-6 py-24 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-16 mt-16">🎭 뮤지컬 활동</h2>

      <div className="space-y-16 max-w-5xl mx-auto">
        {musicalList.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-start gap-8 bg-white p-6 rounded-xl shadow-lg"
          >
            {/* 공연 정보 */}
            <div className="md:w-1/3 space-y-2">
              <p className="text-sm text-gray-400">{m.date}</p>
              <h3 className="text-2xl font-bold text-purple-700">
                <span className="text-xl font-bold text-purple-700">[{m.type}]</span> {m.title}
              </h3>
              <p className="text-gray-700 text-lg">역할: <span className="font-semibold">{m.role}</span></p>
            </div>

            {/* 미디어 갤러리 */}
            <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {m.media.map((media, idx) => (
                <div
                  key={idx}
                  onClick={() => openModal(media.type, media.src)}
                  className="relative w-full h-40 rounded-lg overflow-hidden shadow-md cursor-pointer group"
                >
                  {media.type === 'image' ? (
                    <Image
                      src={media.src}
                      alt="gallery image"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <>
                      <Image
                        src={media.thumbnail || '/default-video-thumb.jpg'}
                        alt="video thumbnail"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/60 p-2 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 모달 */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-lg overflow-hidden max-w-2xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black/80 rounded-full px-2 py-1 text-sm"
            >
              ✕
            </button>
            {modalType === 'image' ? (
              <Image src={modalSrc} alt="modal image" width={800} height={500} className="w-full object-contain" />
            ) : (
              <div className="w-full aspect-video">
                <iframe
                  src={modalSrc}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}