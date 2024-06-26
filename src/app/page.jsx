import Footer from "../components/Footer";
import Landing from "../components/Landing";
import NavBar from "../components/NavBar";
import Nosotros from "../components/Nosotros";
import Services from "../components/Services";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div id="inicio">
      <Landing />
      </div>
      <div id="servicios">
      <Services />
      </div>
      <div id="nosotros">
      <Nosotros />
      </div>
      <Footer />
    </div>
  );
}
