import { useMotionValue } from "framer-motion"
import { useEffect } from "react"

const mouseX = useMotionValue(0)
const mouseY = useMotionValue(0)

useEffect(() => {
  const move = (e: MouseEvent) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }
  window.addEventListener("mousemove", move)
  return () => window.removeEventListener("mousemove", move)
}, [])