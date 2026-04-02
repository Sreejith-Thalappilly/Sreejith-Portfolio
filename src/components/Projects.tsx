import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Github, ExternalLink, Folder } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { techIconMap } from "@/components/ui/techIcons"

const projects = [
  {
    title: "Koble – Community & Alumni Engagement Platform",
    description: "Played a key role in a scalable, multi-tenant community platform tailored for alumni networks. Designed and implemented core architecture from scratch, including real-time notification systems, secure payment gateway integration, and tenant-based data isolation. Ensured high scalability and maintainability across deployments.",
    techStack: ["Node.js", "Express.js", "MySQL", "React", "Azure", "Bitbucket"],
    github: null,
    demo: null,
  },
  {
    title: "Streamhall – Online Learning & Training Platform",
    description: "Designed and developed backend systems for a full-scale e-learning platform supporting live classes, recordings, quizzes, and progress tracking. Implemented real-time live class features, intelligent quiz randomization based on user performance, and scalable notification systems to enhance user engagement.",
    techStack: ["Node.js", "Express.js", "MySQL", "React", "WebSockets", "Azure", "Bitbucket"],
    github: null,
    demo: null,
  },
  {
    title: "GeoPerform – Vessel Performance & Emission Analytics",
    description: "Played a key role in designing and developing an enterprise marine analytics platform for vessel performance and emission tracking. Implemented Snowflake data integration, developed scalable backend services using CQRS architecture, and built advanced reporting modules. Contributed across both backend and Angular frontend.",
    techStack: [".NET", "ABP Framework", "CQRS", "Angular", "MS SQL", "Snowflake", "Azure","GitHub"],
    github: null,
    demo: null,
  },
  {
    title: "Focali – Port Management System",
    description: "Led major development efforts for a large-scale port management system. Designed and implemented multi-tenant architecture, integrated third-party services (Alaan), and developed real-time notification systems. Executed framework upgrades and improved system scalability and maintainability.",
    techStack: [".NET", "ABP Framework", "Angular", "MS SQL", "Azure","GitHub"],
    github: null,
    demo: null,
  },
  {
    title: "Invoice Capture – AI-Based Document Processing",
    description: "Led end-to-end development of an AI-powered invoice processing system using LLMs to extract structured data from documents. Designed system architecture, coordinated development, and ensured high accuracy and automation in financial workflows.",
    techStack: ["Python", "LLM", "React", "JavaScript","Azure","GitHub"],
    github: null,
    demo: null,
  },
  {
    title: "Timesheet Management System",
    description: "Independently designed and implemented backend architecture for a timesheet tracking system. Built high-performance APIs, optimized database queries, and ensured reliable data processing for employee time tracking and reporting.",
    techStack: ["Node.js", "Fastify", "MySQL", "React","Azure","Bitbucket"],
    github: null,
    demo: null,
  },
  {
    title: "Warehouse Management System (Marine Domain)",
    description: "Architected and leading development of a scalable warehouse management system for marine operations. Designed system architecture from the ground up, supporting both standalone usage and integration with enterprise platforms. Focused on performance, scalability, and complex workflow handling.",
    techStack: ["Node.js", "Express.js", "MS SQL", "Angular","Azure","GitHub"],
    github: null,
    demo: null,
  },
  {
    title: "Garbage Detection System (AI Initiative)",
    description: "Designed database architecture for an AI-powered system that detects improper waste disposal using camera inputs. Built efficient data models to support large-scale image metadata storage and retrieval for real-time monitoring and analytics.",
    techStack: ["Python", "MySQL", "AI/ML","React", "Azure", "Bitbucket"],
    github: null,
    demo: null,
  },
];
export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="space-y-3 sm:space-y-4 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Professional Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl text-sm sm:text-base">
            A selection of Professional projects showcasing my experience in development and system architecture.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 group flex flex-col h-full">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <motion.div 
                      className="p-1.5 sm:p-2 rounded-lg bg-primary/10 text-primary"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Folder className="h-5 w-5 sm:h-6 sm:w-6" />
                    </motion.div>
                    <div className="flex items-center gap-1">
                      {project.github && (
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                          className="h-7 w-7 sm:h-8 sm:w-8 text-muted-foreground hover:text-primary"
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button
                          variant="ghost"
                          size="icon"
                          asChild
                          className="h-7 w-7 sm:h-8 sm:w-8 text-muted-foreground hover:text-primary"
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} demo`}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">
                    {project.title}
                  </h3>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 flex-1">
                    {project.description}
                  </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => {
                    const Icon = techIconMap[tech]

                    return (
                      <span
                        key={tech}
                        className="
                          flex items-center gap-1.5
                          px-2.5 py-1 
                          text-[10px] sm:text-xs 
                          font-medium 
                          rounded-md 
                          border border-border 
                          bg-muted/40 
                          text-foreground/80 
                          backdrop-blur-sm
                          transition-all duration-200
                          hover:border-primary/60 
                          hover:bg-primary/10 
                          hover:text-primary
                          hover:scale-105
                          cursor-default
                        "
                      >
                        {Icon && <Icon className="h-3.5 w-3.5" />}
                        {tech}
                      </span>
                    )
                  })}
                </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
        </motion.div>
      </div>
    </section>
  )
}
