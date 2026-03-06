import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-6 sm:py-8 border-t border-border bg-card/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-lg sm:text-xl font-semibold text-foreground">
              Sreejith T
            </span>
          </motion.div>

          <p className="text-xs sm:text-sm text-muted-foreground text-center">
            Built with React, Vite & Tailwind CSS
          </p>

          <div className="flex items-center gap-4">
            <motion.a
              href="https://github.com/Sreejith-Thalappilly"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.a>
            <motion.a
              href="mailto:sreejith@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            </motion.a>
          </div>
        </div>

        <div className="text-center mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Sreejith T. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
