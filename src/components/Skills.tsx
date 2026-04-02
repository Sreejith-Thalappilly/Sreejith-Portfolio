import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Database, 
  Server, 
  Layout, 
  Cloud, 
  Wrench,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = [
  "Node.js","Express.js","Fastify","ASP.NET Core","ABP Framework","Entity Framework",
  "SQL Server","PostgreSQL","MongoDB","Snowflake",
  "Angular","React","JavaScript","TypeScript",
  "Azure","AWS","Docker","CI/CD","GitHub Actions","Jenkins",
  "Visual Studio","VS Code","Postman","Git","Bitbucket","Asana"
];

const skillCategories = [
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "Fastify", "ASP.NET Core", "ABP Framework", "Entity Framework"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["SQL Server", "PostgreSQL", "MongoDB", "Snowflake"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["Angular", "React", "JavaScript", "TypeScript"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Azure", "AWS", "Docker", "CI/CD", "GitHub Actions", "Jenkins"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Visual Studio", "VS Code", "Postman", "Git", "Bitbucket", "Asana"],
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="space-y-3 sm:space-y-4 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl text-sm sm:text-base">
            Technologies and tools I work with to build scalable, enterprise-grade applications.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 group h-full">
                <CardHeader className="pb-3 sm:pb-4">
                  <CardTitle className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg">
                    <motion.div 
                      className="p-1.5 sm:p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <category.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </motion.div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-secondary/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors text-xs cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Code visualization */}
        <motion.div 
          className="mt-10 sm:mt-16 p-4 sm:p-6 rounded-xl bg-secondary/30 border border-border overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <span className="font-mono text-xs sm:text-sm text-muted-foreground">Skills</span>
          </div>
        </motion.div>
          <div className="relative flex flex-wrap justify-center gap-3 mt-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              className="px-4 py-2 rounded-full 
              bg-gradient-to-br from-primary/20 to-secondary/20 
              border border-primary/30 
              text-xs sm:text-sm font-mono text-primary 
              backdrop-blur-lg shadow-md cursor-default"

           initial={{
                  y: random(index),
                  x: random(index + 1),
                }}
              animate={{
                y: [0, -15, 0],
                x: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
              }}

              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(0, 200, 255, 0.4)",
              }}
            >
              {skill}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}

const random = (seed: number) => {
  return Math.sin(seed) * 20
}
