import "./App.css";
import Nav from "./Componenets/Nav/Nav";
import Home from "./Componenets/Home/Home";
import Card from "./Componenets/Card/Card";
import Donate from "./Componenets/Donate/Donate";
import Footer from "./Componenets/Footer/Footer";
import Form from "./Componenets/Form/Form";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Card />
      <Donate />
      <Footer />
    </div>
  );
}

export default App;
