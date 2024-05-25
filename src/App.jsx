import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header
        fixed="top"
        color="light"
        light={true}
        container="md"
        expand="md"
      />
    </>
  );
}

export default App;
