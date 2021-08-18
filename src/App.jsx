import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Testimonials from "./components/Testimonials/Testimonials";
import Description from "./components/Description/Description";
import "./app.scss";
function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="sections">
        <About id="about"/>
        <Description id="desc"/>
        <Projects id="projects"/>
        <Testimonials id="testimonials"/>
      </div>
    </div>
  );
}

export default App;
