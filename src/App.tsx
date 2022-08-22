import "./App.scss";
import SuccessPage from "./Pages/SuccessPage";
import TransactionPage from "./Pages/TransactionPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App text-b overflow-auto h-screen">
      <Routes>
        <Route path="/" element={<TransactionPage />} />
        <Route path="/completed" element={<SuccessPage/>} />
      </Routes>
    </div>
  );
}

export default App;
