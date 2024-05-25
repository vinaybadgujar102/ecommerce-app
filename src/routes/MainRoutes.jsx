import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import Error from "../pages/Error/Error";

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Error />} />
      <Route />
    </Routes>
  );
}

export default MainRoutes;
