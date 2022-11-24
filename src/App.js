import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Boliger from "./pages/Boliger";
import Agents from "./pages/Agents";
import Layout from "./templates/Layout";
import AgentsDetails from "./pages/AgentsDetails";
import BoligerDetails from "./pages/BoligerDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/boliger" element={<Boliger />} />
          <Route path="/boligerDetails/:id" element={<BoligerDetails />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/agentsDetails/:id" element={<AgentsDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
