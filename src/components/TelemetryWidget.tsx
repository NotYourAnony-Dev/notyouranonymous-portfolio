'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function TelemetryWidget() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((r) => (r + 2) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      className="fixed bottom-8 right-8 glass-heavy p-6 rounded-2xl w-64 z-40"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      {/* Vinyl Player */}
      <div className="flex items-center justify-center mb-6">
        <motion.div
          className="w-24 h-24 rounded-full border-4 border-gradient-to-r from-neon-crimson to-deep-purple bg-dark-secondary flex items-center justify-center"
          style={{ rotate: rotation }}
        >
          <div className="w-12 h-12 bg-dark-bg rounded-full" />
        </motion.div>
      </div>

      {/* System Stats */}
      <div className="space-y-4 mono text-xs">
        <div className="flex justify-between items-center">
          <span className="text-gray-400">CORE_LOAD</span>
          <div className="flex items-center gap-2">
            <span className="text-neon-crimson">14%</span>
            <div className="w-16 h-1 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-neon-crimson to-deep-purple"
                animate={{ width: ['14%', '18%', '14%'] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400">LATENCY</span>
          <span className="text-deep-purple animate-pulse-glow">22ms</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-400">THREADS</span>
          <span className="text-neon-crimson">ACTIVE</span>
        </div>
      </div>

      {/* Pulse indicator */}
      <div className="mt-4 h-0.5 bg-gradient-to-r from-transparent via-neon-crimson to-transparent rounded-full" />
    </motion.div>
  )
}
