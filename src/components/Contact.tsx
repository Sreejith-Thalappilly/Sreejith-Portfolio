import { useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Mail, Github, Linkedin, Phone, Send, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "sreejith@example.com",
    href: "mailto:sreejith@example.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Sreejith-Thalappilly",
    href: "https://github.com/Sreejith-Thalappilly",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/sreejith-t",
    href: "https://linkedin.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9605839071",
    href: "tel:+919605839071",
  },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="space-y-3 sm:space-y-4 mb-8 sm:mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            {"Let's Connect"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base px-2">
            {"Have a project in mind or want to discuss opportunities? Feel free to reach out."}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div 
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-3 sm:space-y-4">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-colors group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div 
                    className="p-1.5 sm:p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <link.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </motion.div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-muted-foreground">{link.label}</p>
                    <p className="text-foreground font-medium text-sm sm:text-base truncate">{link.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div 
              className="flex items-center gap-2 text-muted-foreground p-3 sm:p-4 rounded-lg bg-secondary/30 border border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm sm:text-base">Kerala, India</span>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-card/50 border-border">
              <CardContent className="p-4 sm:p-6">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="name" className="text-foreground text-sm">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-secondary/30 border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="email" className="text-foreground text-sm">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="bg-secondary/30 border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <Label htmlFor="message" className="text-foreground text-sm">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-secondary/30 border-border focus:border-primary resize-none"
                    />
                  </div>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
