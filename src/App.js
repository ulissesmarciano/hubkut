import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";

import LoginScreen from "./pages/LoginScreen/index.jsx"
import HomeScreen from "./pages/HomeScreen/index.jsx";
import FollowingScreen from "./pages/FollowingScreen/index.jsx"
import FollowersScreen from "./pages/FollowersScreen/index.jsx";
import ReposScreen from "./pages/ReposScreen/index.jsx";
import StarredScreen from "./pages/StarredScreen/index.jsx";
import PerfilScreen from "./pages/PerfilScreen/index.jsx";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/home/:username" element={<HomeScreen />} />
          <Route path="/following/:username" element={<FollowingScreen />} />
          <Route path="/followers/:username" element={<FollowersScreen />} />
          <Route path="/repos/:username" element={<ReposScreen />} />
          <Route path="/starred/:username" element={<StarredScreen />} />
          <Route path="/perfil/:username" element={<PerfilScreen />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
