"use client"
export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-green-300 transition-colors">Twitter</a>
          <a href="#" className="hover:text-green-300 transition-colors">Telegram</a>
          <a href="#" className="hover:text-green-300 transition-colors">Discord</a>
        </div>
        <p className="text-sm text-green-400">
          $GRINCHGUY © {new Date().getFullYear()} | All rights reserved
        </p>
      </div>
    </footer>
  )
}