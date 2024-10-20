import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Balance } from "./pages/Balance";
import { Dashboard } from "./pages/Dashboard";
import { Documents } from "./pages/Documents";

function App() {
  return (
    <div className=" h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/documentos" element={<Documents />} />
          <Route path="/balances" element={<Balance />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
