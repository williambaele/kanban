import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useAuthContext } from "./hooks/useAuthContext";
import Login from "./pages/Login";

function App() {
  const { user } = useAuthContext();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={!user ? <Login /> : <Home user={user} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
