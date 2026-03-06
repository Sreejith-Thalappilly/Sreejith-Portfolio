import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Github, ExternalLink, Folder } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Enterprise API Gateway",
    description: "A scalable API gateway built with ASP.NET Core for managing microservices communication, rate limiting, and authentication.",
    techStack: ["ASP.NET Core", "Redis", "Docker", "Azure"],
    github: "#",
    demo: null,
  },
  {
    title: "Real-time Notification System",
    description: "High-performance notification service using Node.js and WebSockets for delivering real-time updates across multiple platforms.",
    techStack: ["Node.js", "Socket.io", "MongoDB", "RabbitMQ"],
    github: "#",
    demo: null,
  },
  {
    title: "Data Pipeline Framework",
    description: "ETL pipeline for processing large datasets with Snowflake integration and automated data validation workflows.",
    techStack: ["Python", "Snowflake", "Azure Functions", "SQL"],
    github: "#",
    demo: null,
  },
  {
    title: "Authentication Service",
    description: "OpenIddict-based authentication service supporting OAuth 2.0 and OpenID Connect for enterprise applications.",
    techStack: ["ASP.NET Core", "OpenIddict", "SQL Server", "JWT"],
    github: "#",
    demo: null,
  },
  {
    title: "Timesheet Management API",
    description: "RESTful API for enterprise timesheet management with advanced reporting and integration capabilities.",
    techStack: ["Node.js", "Express.js", "PostgreSQL", "Redis"],
    github: "#",
    demo: null,
  },
  {
    title: "Payment Gateway Integration",
    description: "Unified payment processing module supporting multiple payment providers with transaction management.",
    techStack: ["Node.js", "Fastify", "Stripe", "MongoDB"],
    github: "#",
    demo: null,
  },
]

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
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-2xl text-sm sm:text-base">
            A selection of projects showcasing my experience in backend development and system architecture.
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
                  <div className="flex flex-wrap gap-x-2 gap-y-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
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
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              asChild
              className="border-border hover:border-primary hover:text-primary"
            >
              <a
                href="https://github.com/Sreejith-Thalappilly"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View More on GitHub
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
