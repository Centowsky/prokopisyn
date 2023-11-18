import Header from "./components/Header";
import InfoWorking from "./components/InfoWorking";
import Navigation from "./components/Navigation";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <InfoWorking />
    </div>
  );
}

export default App;
