import About from "./Components/About"
import Experiences from "./Components/Experiences"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Leadership from "./Components/Leadership"
import Navbar from "./Components/Navbar"
import Skills from "./Components/Skills"
import Projects from "./Components/Projects"

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Leadership />
      <Skills />
      <Footer />
    </div>
  )
}

export default App