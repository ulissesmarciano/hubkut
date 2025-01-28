import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";

import LoginScreen from "./pages/login-screen"
import HomeScreen from "./pages/home-screen";
import FollowingScreen from "./pages/following-section"
import FollowersScreen from "./pages/followers-section";
import ReposScreen from "./pages/repo-screen";
import StarredScreen from "./pages/starred-screen";
import PerfilScreen from "./pages/perfil-screen";

function App() {
  console.log("Token do GitHub:", process.env.NEXT_PUBLIC_GITHUB_TOKEN?.slice(0, 5) + "...");

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
