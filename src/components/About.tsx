import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Code2, Server, Cloud } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const highlights = [
  {
    icon: Server,
    title: "Backend Systems",
    description: "Building high-performance APIs and scalable server architectures",
  },
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, well-documented code following best practices",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description: "Deploying and managing applications on Azure and AWS",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-card/30" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="space-y-3 sm:space-y-4 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* About Text */}
          <motion.div 
            className="lg:col-span-3 space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              I am a Software Engineer with 4+ years of experience building scalable enterprise web applications and backend systems.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              My expertise includes building high-performance APIs using Node.js and ASP.NET Core, designing database architectures, integrating third-party services, and deploying cloud-native applications.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              I have worked extensively with ABP Framework, Azure deployments, authentication systems like OpenIddict, and enterprise data platforms such as Snowflake.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              I focus on writing clean, maintainable code and building systems that scale with business needs.
            </p>
            
            <div className="flex items-center gap-2 text-muted-foreground pt-2 sm:pt-4">
              <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm sm:text-base">Kerala, India</span>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className="bg-secondary/30 border-border hover:border-primary/50 transition-colors group">
                  <CardContent className="p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
                    <motion.div 
                      className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1 text-sm sm:text-base">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
