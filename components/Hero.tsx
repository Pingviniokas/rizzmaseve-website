// components/Hero.tsx
"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FaTelegram, FaTwitter } from 'react-icons/fa'
import { BiLineChart } from 'react-icons/bi'

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    // Countdown Timer
    const calculateTimeLeft = () => {
      const christmas = new Date('December 25, 2024 00:00:00').getTime()
      const now = new Date().getTime()
      const difference = christmas - now

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      })
    }

    // Snow Effect
    const createSnowflake = () => {
      const snowflake = document.createElement('div')
      snowflake.className = 'snowflake'
      snowflake.innerHTML = '❄'
      snowflake.style.left = Math.random() * 100 + 'vw'
      snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'
      snowflake.style.opacity = Math.random().toString()
      snowflake.style.fontSize = Math.random() * 20 + 10 + 'px'
      document.getElementById('snowfall')?.appendChild(snowflake)
      
      setTimeout(() => snowflake.remove(), 5000)
    }

    const timer = setInterval(calculateTimeLeft, 1000)
    const snowInterval = setInterval(createSnowflake, 100)

    return () => {
      clearInterval(timer)
      clearInterval(snowInterval)
    }
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0a1f]">
      {/* Snowfall Container */}
      <div id="snowfall" className="fixed inset-0 pointer-events-none z-50" />
      
      {/* Banner Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/banner.png"
          alt="RizzmasEve Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      {/* Round Logo */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
          <Image
            src="/images/logo.jpg"
            alt="RizzmasEve Logo"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Social Links */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-end gap-6 items-center backdrop-blur-md bg-black/30 rounded-full px-6 py-3">
            <a href="#" target="_blank" rel="noopener noreferrer"
               className="text-white hover:text-red-500 transition-all duration-300
                        [text-shadow:0_0_10px_rgba(239,68,68,0.8)] group">
              <BiLineChart className="text-2xl group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"
               className="text-white hover:text-green-400 transition-all duration-300
                        [text-shadow:0_0_10px_rgba(74,222,128,0.8)] group">
              <FaTelegram className="text-2xl group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer"
               className="text-white hover:text-red-500 transition-all duration-300
                        [text-shadow:0_0_10px_rgba(239,68,68,0.8)] group">
              <FaTwitter className="text-2xl group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center pt-48 md:pt-56">
        <div className="hero-content text-center p-10 
                       backdrop-blur-m bg-black/60 border-2 border-white/10 rounded-3xl
                       shadow-[0_0_50px_rgba(0,0,0,0.7)] mx-4">
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-bold">
                <span className="text-red-500 [text-shadow:0_0_10px_rgba(239,68,68,0.8),0_0_20px_rgba(239,68,68,0.5)]">
                  Rizzmas
                </span>
                <span className="text-green-400 [text-shadow:0_0_10px_rgba(74,222,128,0.8),0_0_20px_rgba(74,222,128,0.5)]">
                  Eve
                </span>
              </h1>
              <p className="text-2xl md:text-3xl text-white font-medium
                          [text-shadow:0_0_10px_rgba(255,255,255,0.7)]">
                The Most Festive Token on Solana
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
              {Object.entries(timeLeft).map(([key, value]) => (
                <div key={key} className="bg-black/30 backdrop-blur-md rounded-xl p-4 border border-white/10">
                  <div className="text-4xl font-bold text-red-500">{value}</div>
                  <div className="text-sm text-green-400 uppercase">{key}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-8 justify-center pt-6">
              <button className="px-12 py-4 text-xl bg-red-500 text-white font-bold rounded-full 
                               hover:bg-red-600 transform hover:scale-105 transition-all duration-300
                               shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:shadow-[0_0_30px_rgba(239,68,68,0.7)]">
                Buy Now
              </button>
              <button className="px-12 py-4 text-xl bg-green-500 text-white font-bold rounded-full
                               hover:bg-green-600 transform hover:scale-105 transition-all duration-300
                               shadow-[0_0_20px_rgba(74,222,128,0.5)] hover:shadow-[0_0_30px_rgba(74,222,128,0.7)]">
                Chart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}