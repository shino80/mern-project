import { TopBar } from "./components/topbar/topbar";
import { Home } from "./components/pages/home/home";
import { Single } from "./components/pages/single/single";
import { Write } from "./components/pages/write/write";
import { Setting } from "./components/pages/settings/setting";
import { Login } from "./components/pages/login/login";
import { Register } from "./components/pages/register/register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const user = true;
  return (
    <div className="App">
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/post/:postId" element={<Single />} />
        <Route path="/write" element={<Write />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;
