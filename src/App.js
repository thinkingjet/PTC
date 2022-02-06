import "./App.css";
import Nav from "./Componenets/Nav/Nav";
import Home from "./Componenets/Home/Home";
import Article from "./Componenets/Article/Article";
import Card from "./Componenets/Card/Card";
import Donate from "./Componenets/Donate/Donate";
import Solution from "./Componenets/Solution/Solution";
import Footer from "./Componenets/Footer/Footer";
//import Form from "./Componenets/Form/Form";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Article />
      <Card />
      <Donate />
      <Solution />
      <Footer />
    </div>
  );
}

export default App;
