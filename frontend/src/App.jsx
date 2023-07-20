import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signin/Signup";
import NewsPage from "./pages/Lspd/NewsPage";
import CitizensPage from "./pages/Lspd/CitizensPage";
import Error from "./pages/Error";

import LspdLayout from "./layout/LspdLayout";
import "./App.scss";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Error />} />

          <Route path="/" element={<LspdLayout />}>
            <Route path="" element={<NewsPage />} />
            <Route path="citizens" element={<CitizensPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
