import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <div className="app-wrapper">
      <Header color="light" light={true} container="md" expand="md" />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
