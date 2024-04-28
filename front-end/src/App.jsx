import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlockChain from "./components/BlockChain";
import SendData from "./components/SendData";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SendData></SendData>}></Route>
          <Route path="/block" element={<BlockChain></BlockChain>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
