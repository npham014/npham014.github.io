import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import "./app.scss";
function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">
        <About id="about"/>
        <Projects id="projects"/>
        <Testimonials id="testimonials"/>
        <Contact id="contact"/>
      </div>
    </div>
  );
}

export default App;
