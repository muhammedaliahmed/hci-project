import CurrentOrders from "./CurrentOrders";
import NewOrder from "./NewOrder";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CurrentOrders />} />{" "}
        <Route path="/new-order" element={<NewOrder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
