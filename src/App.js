import "./sass/App.scss";
import Nav from "./Components/Nav";
import Grid from "./Components/Grid";
import Hero from "./Components/Hero";
import Carrowsel from "./Components/Carrowsel";
import Contact from "./Components/Contact";

export default function App () {
    return (
        <div className="App">
            <Nav />
            <Grid />
            <Hero />
            <Carrowsel />
            <Contact />
            <Nav />
        </div>
    )
}