'use client'
import { useEffect, useState } from 'react'

export default function HeroVideo() {
  const [video, setVideo] = useState(null)

  useEffect(() => {
    const url = process.env.NEXT_PUBLIC_PEXELS_VIDEO || ''
    if (url) setVideo(url)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
      {video ? (
        <video className="h-[260px] w-full object-cover" autoPlay muted loop playsInline preload="auto">
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <div className="h-[220px] w-full bg-gradient-to-r from-indigo-100 via-white to-purple-100" />
      )}
    </div>
  )
}
