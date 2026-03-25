import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  baseVx: number
  baseVy: number
  size: number
  color: string
}

const COLORS = [
  "#3b82f6",
  "#60a5fa",
  "#818cf8",
  "#a78bfa",
  "#38bdf8",
]

export function FloatingParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext("2d")!

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // 🔥 MORE PARTICLES
    particlesRef.current = Array.from({ length: 220 }, () => {
      const baseVx = (Math.random() - 0.5) * 0.6
      const baseVy = (Math.random() - 0.5) * 0.6

      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: baseVx,
        vy: baseVy,
        baseVx,
        baseVy,
        size: Math.random() * 2 + 1,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }
    })

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }
    window.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((p) => {
        const dx = p.x - mouse.current.x
        const dy = p.y - mouse.current.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        const minDist = 120

        // 🧲 Mouse repulsion (same as your good feel)
        if (dist < minDist) {
          const force = (minDist - dist) / minDist
          const angle = Math.atan2(dy, dx)

          p.vx += Math.cos(angle) * force * 0.6
          p.vy += Math.sin(angle) * force * 0.6
        } else {
          // 🌊 RETURN TO NATURAL FLOW
          p.vx += (p.baseVx - p.vx) * 0.02
          p.vy += (p.baseVy - p.vy) * 0.02
        }

        // 🧠 Smooth damping (prevents jitter)
        p.vx *= 0.98
        p.vy *= 0.98

        // ➡️ Move particle
        p.x += p.vx
        p.y += p.vy

        // 🔁 Wrap around edges
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // 🎨 Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  )
}