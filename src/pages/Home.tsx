import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Account from "../components/Account";
import Calendar from "../components/Calendar";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Greeting from "../components/Greeting";
import Intro from "../components/Intro";
import Map from "../components/Map";
import Route from "../components/Route";

function Home() {
  return (
    <div>
      <Intro />
      <Greeting />
      <Calendar />
      <Gallery />
      <Map />
      <Route />
      <Account />
      <Footer />
    </div>
  );
}

export default Home;
