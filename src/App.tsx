import { BrowserRouter, Route, Routes } from "react-router-dom";
import LachonContextProvider from "./context/LachonContext";
import MainPage from "./pages/MainPage/MainPage";
import DethPage from "./pages/DethPage/DethPage";
import WinPage from "./pages/winPage/WinPage";

const App = () => {
  return (
    <BrowserRouter>
      <LachonContextProvider>
        <Routes>
          <Route path="/lachon_adventure/" element={<MainPage />} />
          <Route path="/lachon_adventure/deth" element={<DethPage />} />
          <Route path="/lachon_adventure/win" element={<WinPage />} />
        </Routes>
      </LachonContextProvider>
    </BrowserRouter>
  );
};

export default App;
