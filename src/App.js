import { Link } from "react-router-dom";
import"./App.css";

/*The app*/
export default function App() {
  return (
    <div className="app">
      <h1>Cat Weddings</h1>
      <nav>
        <Link to="/About">About</Link> |{" "}
        <Link to="/Projects">Projects</Link> |{" "}
        <Link to="/Contact">Contact</Link> |{" "}
        <Link to="/">Home</Link>
      </nav>
      <main>
        <h2>We are here for you</h2>
        <p>Here comes the cats! when your favorite feline friends are getting married,<br></br>
          we are the ultimate guide to organizing a dream cat wedding celebration!</p>
        <img className="hero" src="/images/cat_dress.jpg"></img>
      </main>
    </div>
  );
}