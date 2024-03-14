import { BrowserRouter, Route, Routes } from "react-router-dom";
import LachonContextProvider from "./context/LachonContext";
import StartPage from "./pages/startPage/StartPage";
import MainPage from "./pages/MainPage/MainPage";
import DethPage from "./pages/DethPage/DethPage";
import WinPage from "./pages/winPage/WinPage";

const App = () => {
  return (
    <BrowserRouter>
      <LachonContextProvider>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/game" element={<MainPage />} />
          <Route path="/deth" element={<DethPage />} />
          <Route path="/win" element={<WinPage />} />
        </Routes>
      </LachonContextProvider>
    </BrowserRouter>
  );
};

export default App;
