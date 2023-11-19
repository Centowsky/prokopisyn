import Banner from "./components/Baner";
import BusinessCard from "./components/BusinessCard";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoWorking from "./components/InfoWorking";
import Navigation from "./components/Navigation";
import Slider from "./components/Slider";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Description />
      <Banner />
      <InfoWorking />
      <Slider />
      <BusinessCard />
      <Footer />
    </div>
  );
}

export default App;
