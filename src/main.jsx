import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import ComingSoon from "./components/counter.jsx";

import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Terms from "./components/terms/terms.jsx";
import RefundPolicy from "./components/refund-policy/refund-policy.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/coming-soon" element={<ComingSoon />}></Route>
      <Route path="/terms" element={<Terms />}></Route>
      <Route path="/refund-policy" element={<RefundPolicy />}></Route>
    </Routes>
  </BrowserRouter>,
);
