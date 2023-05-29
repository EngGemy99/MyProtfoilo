import { About, Work, Testimonials, Footer, Header, Skills } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import Certificates from "./container/Certificates/Certificates";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Certificates />
    </div>
  );
}

export default App;
