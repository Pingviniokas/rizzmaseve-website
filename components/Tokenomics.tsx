// components/Tokenomics.tsx
"use client"
import { useEffect } from 'react'
import gsap from 'gsap'

export default function Tokenomics() {
  useEffect(() => {
    gsap.from(".tokenomics-card", {
      scrollTrigger: {
        trigger: ".tokenomics-section",
        start: "top center",
        toggleActions: "play none none reverse"
      },
      scale: 0.8,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power4.out"
    })
  }, [])

  return (
    <section className="tokenomics-section relative py-32 bg-[#0a0a1f]">
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-center text-5xl font-bold mb-20">
          <span className="bg-gradient-to-r from-[#00ff00] via-[#ff1493] to-[#00ff00] text-transparent bg-clip-text">
            Santa's Tokenomics
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="tokenomics-card relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ff1493] to-[#00ff00] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
            <div className="relative p-8 rounded-2xl bg-[#0a0a1f]/90 border border-[#ff1493]/20">
              <h3 className="text-2xl font-bold mb-6 text-[#ff1493]">Token Distribution</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Total Supply</span>
                  <span className="text-[#ff1493]">1,000,000,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Presale</span>
                  <span className="text-[#ff1493]">60%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Liquidity</span>
                  <span className="text-[#ff1493]">40%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="tokenomics-card relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ff00] to-[#ff1493] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
            <div className="relative p-8 rounded-2xl bg-[#0a0a1f]/90 border border-[#00ff00]/20">
              <h3 className="text-2xl font-bold mb-6 text-[#00ff00]">Tax Structure</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Buy Tax</span>
                  <span className="text-[#00ff00]">5%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sell Tax</span>
                  <span className="text-[#00ff00]">5%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}