import "./App.css";
import Nav from "./Componenets/Nav/Nav";
import Home from "./Componenets/Home/Home";
import Info from "./Componenets/Info/Info";
import Card from "./Componenets/Card/Card";
import Footer from "./Componenets/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
