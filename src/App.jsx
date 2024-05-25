import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <div
      className="app-wrapper
    "
    >
      <Header color="light" light={true} container="md" expand="md" />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
