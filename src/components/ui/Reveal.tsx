"use client"
import { ReactNode, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

type RevealProps = {
  children: ReactNode
  delay?: number
}

const Reveal: React.FC<RevealProps> = ({ children, delay = 0 }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, delay }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
