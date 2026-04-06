'use client'

import { useEffect, useState } from 'react'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale'
}

export function FadeIn({ children, delay = 0, direction = 'up' }: FadeInProps) {
  const [visible, setVisible] = useState(false)
  const [ref, setRef] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref) observer.observe(ref)
    return () => observer.disconnect()
  }, [ref, delay])

  const transforms: Record<string, string> = {
    up: 'translateY(30px)',
    down: 'translateY(-30px)',
    left: 'translateX(30px)',
    right: 'translateX(-30px)',
    scale: 'scale(0.9)',
  }

  return (
    <div
      ref={setRef}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : transforms[direction],
        transition: 'all 0.6s ease-out',
      }}
    >
      {children}
    </div>
  )
}

export function SlideIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [visible, setVisible] = useState(false)
  const [ref, setRef] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref) observer.observe(ref)
    return () => observer.disconnect()
  }, [ref, delay])

  return (
    <div
      ref={setRef}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : 'translateX(-50px)',
        transition: 'all 0.5s ease-out',
      }}
    >
      {children}
    </div>
  )
}

export function Pulse({ children }: { children: React.ReactNode }) {
  return (
    <span className="animate-[pulse_2s_ease-in-out_infinite]">
      {children}
    </span>
  )
}