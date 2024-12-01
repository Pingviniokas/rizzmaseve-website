// components/Features.tsx
"use client"
import { useEffect, useState } from 'react'
import { FaCopy } from 'react-icons/fa'

export default function Features() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "F6zgVJ1Kj7DBa8RyCsPPsgpXJ35z6MDG88cwqA1Wpump"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative py-32 bg-[#0a0a1f]">
      <div className="container mx-auto px-4">
        {/* Contract Address */}
        <div className="mb-12 max-w-3xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="space-y-2">
                <h3 className="text-lg text-green-400 font-semibold">
                  Contract Address
                </h3>
                <p className="text-white/80 font-mono text-sm md:text-base break-all">
                  {contractAddress}
                </p>
              </div>
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-2 px-6 py-3 bg-red-500/20 hover:bg-red-500/30 
                         text-red-400 rounded-xl transition-all duration-300"
              >
                <FaCopy className="text-lg" />
                <span>{copied ? "Copied!" : "Copy Address"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* DexScreener Embed */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
          <style>{`
            #dexscreener-embed{
              position:relative;
              width:100%;
              padding-bottom:125%;
            }
            @media(min-width:1400px){
              #dexscreener-embed{
                padding-bottom:65%;
              }
            }
            #dexscreener-embed iframe{
              position:absolute;
              width:100%;
              height:100%;
              top:0;
              left:0;
              border:0;
              border-radius: 1rem;
            }
          `}</style>
          <div id="dexscreener-embed">
            <iframe 
              src="https://dexscreener.com/solana/A2uE7tab4cBpP7u2PspM4UvoohFgJ5VbjEA8FDUEaSJ1?embed=1&loadChartSettings=0&chartLeftToolbar=0&chartDefaultOnMobile=1&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"
              title="DexScreener Chart"
            />
          </div>
        </div>
      </div>
    </section>
  )
}