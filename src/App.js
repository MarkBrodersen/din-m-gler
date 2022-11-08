import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Boliger from "./pages/Boliger";
import Agents from "./pages/Agents";
import Layout from "./templates/Layout";
import IdContext from "./context/IdContext";
import { useState } from "react";
import AgentsDetails from "./pages/AgentsDetails";

function App() {
  const [id, setId] = useState("");
  return (
    <BrowserRouter>
      <IdContext.Provider value={[id, setId]}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/boliger" element={<Boliger />} />
            <Route path="/boliger:id" element={<Boliger />} />
            <Route path="/agents" element={<Agents />} />
            <Route path="/agentsDetails/:id" element={<AgentsDetails />} />
          </Route>
        </Routes>
      </IdContext.Provider>
    </BrowserRouter>
  );
}

export default App;
