import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Github, Star, GitFork, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const repos = [
  {
    name: "api-gateway-template",
    description: "Production-ready API gateway template with authentication, rate limiting, and logging",
    language: "TypeScript",
    stars: 42,
    forks: 12,
    url: "https://github.com/Sreejith-Thalappilly",
  },
  {
    name: "nodejs-boilerplate",
    description: "Clean architecture Node.js boilerplate with Express.js and TypeScript",
    language: "TypeScript",
    stars: 28,
    forks: 8,
    url: "https://github.com/Sreejith-Thalappilly",
  },
  {
    name: "dotnet-microservices",
    description: "Microservices architecture example using ASP.NET Core and Docker",
    language: "C#",
    stars: 35,
    forks: 15,
    url: "https://github.com/Sreejith-Thalappilly",
  },
  {
    name: "snowflake-connector",
    description: "Node.js library for connecting to Snowflake with TypeScript support",
    language: "TypeScript",
    stars: 19,
    forks: 5,
    url: "https://github.com/Sreejith-Thalappilly",
  },
]

const languageColors: Record<string, string> = {
  TypeScript: "bg-blue-500",
  JavaScript: "bg-yellow-500",
  "C#": "bg-green-600",
  Python: "bg-blue-400",
}

export function GitHubSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-card/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="space-y-3 sm:space-y-4 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            GitHub Repositories
          </h2>
          <p className="text-muted-foreground max-w-2xl text-sm sm:text-base">
            Check out my open source contributions and personal projects.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {repos.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 group h-full">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-2 sm:mb-3">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <Github className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground flex-shrink-0" />
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-foreground hover:text-primary transition-colors text-sm sm:text-base truncate"
                      >
                        {repo.name}
                      </a>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="h-7 w-7 sm:h-8 sm:w-8 text-muted-foreground hover:text-primary flex-shrink-0"
                    >
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${repo.name} repository`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2">
                    {repo.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span
                        className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${
                          languageColors[repo.language] || "bg-gray-500"
                        }`}
                      />
                      <span className="text-xs text-muted-foreground">
                        {repo.language}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 sm:gap-4">
                      <motion.div 
                        className="flex items-center gap-1 text-muted-foreground"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        <span className="text-xs">{repo.stars}</span>
                      </motion.div>
                      <motion.div 
                        className="flex items-center gap-1 text-muted-foreground"
                        whileHover={{ scale: 1.1 }}
                      >
                        <GitFork className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        <span className="text-xs">{repo.forks}</span>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-6 sm:mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
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
                View All Repositories
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
