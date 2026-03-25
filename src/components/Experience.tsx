import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, Calendar, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    company: "Speehive Pvt Ltd",
    role: "Software Engineer L3",
    duration: "Sep 2024 – Present",
    current: true,
    highlights: [
      "Developed scalable REST APIs using .NET and Node.js",
      "Led ABP Framework upgrade from v3 to v8",
      "Integrated Snowflake database with MFA security",
      "Built API integrations with third-party services",
      "Implemented Azure cloud deployments and DevOps pipelines",
    ],
    techStack: ["ASP.NET Core", "Node.js", "Azure", "Snowflake", "ABP Framework"],
  },
  {
    company: "RoadE Labs Pvt Ltd",
    role: "Software Engineer",
    duration: "Aug 2021 – Sep 2024",
    current: false,
    highlights: [
      "Developed backend APIs using Node.js with Express.js and Fastify",
      "Built systems including timesheet management and community platforms",
      "Implemented SQL database optimization with stored procedures and triggers",
      "Integrated payment gateways and real-time notifications",
      "Worked in Agile teams and contributed to CI/CD pipelines",
    ],
    techStack: ["Node.js", "Express.js", "Fastify", "SQL Server", "MongoDB"],
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-16 sm:py-20 md:py-24 bg-card/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="space-y-3 sm:space-y-4 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Work History
          </h2>
          <p className="text-muted-foreground max-w-2xl text-sm sm:text-base">
            My professional journey building enterprise software and backend systems.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line - hidden on mobile, visible on md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          {/* Mobile timeline line */}
          <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Timeline dot - mobile */}
                <motion.div 
                  className="md:hidden absolute left-0 w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-1/2 top-0 z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
                />
                
                {/* Timeline dot - desktop */}
                <motion.div 
                  className="hidden md:block absolute left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 top-0 z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
                />

                {/* Content */}
                <div
                  className={`pl-6 md:pl-0 ${
                    index % 2 === 0 
                      ? "md:pr-8 lg:pr-12 md:w-1/2" 
                      : "md:ml-auto md:pl-8 lg:pl-12 md:w-1/2"
                  }`}
                >
                  <motion.div 
                    className="bg-card/50 border border-border rounded-xl p-4 sm:p-6 hover:border-primary/50 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <Building2 className="h-4 w-4 text-primary flex-shrink-0" />
                          <h3 className="font-semibold text-foreground text-sm sm:text-base">
                            {exp.company}
                          </h3>
                          {exp.current && (
                            <Badge className="bg-primary/20 text-primary border-0 text-xs">
                              Current
                            </Badge>
                          )}
                        </div>
                        <p className="text-primary font-medium text-sm sm:text-base">{exp.role}</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
                        <Calendar className="h-3 w-3 flex-shrink-0" />
                        {exp.duration}
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-4">
                      {exp.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.2 + i * 0.05 + 0.3 }}
                        >
                          <ArrowUpRight className="h-3 w-3 text-primary mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-secondary/50 text-muted-foreground text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
