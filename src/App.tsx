import { Navigation } from "@/components/Navigation"
import { PersonalDetails } from "@/components/PersonalDetails"
import { About } from "@/components/About"
import { Skills } from "@/components/Skills"
import { Experience } from "@/components/Experience"
import { Projects } from "@/components/Projects"
import { GitHubSection } from "@/components/GitHubSection"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <PersonalDetails />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GitHubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
