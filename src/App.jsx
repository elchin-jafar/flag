import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Country from "../pages/Country"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="country/:name" element={<Country />} />
          </Route>
          <Route path="*" element={<>404 not found</>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
