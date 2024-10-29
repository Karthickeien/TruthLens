import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";

import { StoreProvider } from "./context/StoreContext";

import { Toaster } from "react-hot-toast";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Certificate from "./pages/certificate/Certificate";
import ResultPage from "./pages/ResultPage/ResultPage";
import Nft from "./pages/NftList/Nft";

function App() {
  return (
    <StoreProvider>
      <div className="app">
        <div>
          <Toaster position="bottom-right" reverseOrder={false} />
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certification" element={<Certificate />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/nft" element={<Nft />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </StoreProvider>
  );
}

export default App;
