import Banner from "./components/Baner";
import Description from "./components/Description";
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
    </div>
  );
}

export default App;
