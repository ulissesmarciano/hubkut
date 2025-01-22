import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";

import LoginScreen from "./pages/LoginScreen"
import HomeScreen from "./pages/HomeScreen";
import FollowingScreen from "./pages/FollowingScreen"
import FollowersScreen from "./pages/FollowersScreen";
import ReposScreen from "./pages/ReposScreen";
import StarredScreen from "./pages/StarredScreen";
import PerfilScreen from "./pages/PerfilScreen";

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
