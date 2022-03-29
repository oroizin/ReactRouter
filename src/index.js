import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import"./index.css";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="About" element={<About />} />
      <Route path="Projects" element={<Projects />} />
      <Route path="Contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);