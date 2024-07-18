import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Read from "./pages/Read";
import Reading from "./pages/Reading";
import Wish from "./pages/Wish";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/read" element={<Read />} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/wish" element={<Wish />} />
      </Route>
    </Routes>
  );
}

export default App;
