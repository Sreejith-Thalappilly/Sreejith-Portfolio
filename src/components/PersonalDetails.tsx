import { motion } from "framer-motion"
import { Github, Linkedin, Download, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import profile from "../assets/profile.jpeg"

const techStack = [
  "Node.js",
  "Express.js",
  "Fastify",
  "ASP.NET Core",
  "ABP Framework",
  "Azure",
  "SQL Server",
  "Snowflake",
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
}

export function PersonalDetails() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 -left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        {/* Code-like background elements */}
        <div className="absolute inset-0 opacity-5">
          <motion.pre 
            className="absolute top-20 left-10 font-mono text-xs text-primary hidden xl:block"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
{`const developer = {
  name: "Sreejith T",
  role: "Software Engineer",
  experience: "4+ years",
  focus: ["Backend", "APIs", "Cloud"]
};`}
          </motion.pre>
          <motion.pre 
            className="absolute bottom-32 right-10 font-mono text-xs text-primary hidden xl:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
{`async function buildScalableSystems() {
  await optimizePerformance();
  await deployToCloud();
  return success;
}`}
          </motion.pre>
        </div>
      </div>

      <motion.div 
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-4 sm:space-y-6">
          <motion.p 
            className="text-primary font-mono text-xs sm:text-sm tracking-wider"
            variants={itemVariants}
          >
          </motion.p>
          <motion.div
    className="flex justify-center mb-6"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6 }}
  >
<motion.div
  className="flex justify-center mb-6 perspective-[1000px]"
>
  <motion.img
    src={profile}
    alt="Sreejith T"
    className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-xl object-cover cursor-pointer"
    whileHover={{ scale: 1.5 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
  />
</motion.div>
  </motion.div>
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight"
            variants={itemVariants}
          >
            {"Hi, I'm "}
            <span className="text-primary">Sreejith T</span>
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2"
            variants={itemVariants}
          >
            Software Engineer specializing in scalable backend systems, API architecture, and cloud deployments.
          </motion.p>

          {/* Tech Stack Tags */}
          <motion.div 
            className="flex flex-wrap justify-center gap-1.5 sm:gap-2 pt-2 sm:pt-4 px-2"
            variants={itemVariants}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
              >
                <Badge
                  variant="secondary"
                  className="bg-secondary/50 text-muted-foreground border border-border hover:border-primary hover:text-primary transition-colors text-xs sm:text-sm cursor-default"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 pt-4 sm:pt-8 px-2"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm sm:text-base"
              >
                <a href="#projects">View Projects</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                asChild
                className="border-border hover:border-primary hover:text-primary text-sm sm:text-base"
              >
                <a
                  href="https://github.com/Sreejith-Thalappilly"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden sm:block">
              <Button
                variant="outline"
                asChild
                className="border-border hover:border-primary hover:text-primary text-sm sm:text-base"
              >
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden md:block">
              <Button
                variant="outline"
                className="border-border hover:border-primary hover:text-primary text-sm sm:text-base"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile-only additional buttons */}
          <motion.div 
            className="flex justify-center gap-3 sm:hidden"
            variants={itemVariants}
          >
            <Button
              variant="outline"
              size="icon"
              asChild
              className="border-border hover:border-primary hover:text-primary"
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="border-border hover:border-primary hover:text-primary"
              aria-label="Download Resume"
            >
              <Download className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <motion.a 
            href="#about" 
            className="text-muted-foreground hover:text-primary transition-colors" 
            aria-label="Scroll to about section"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
