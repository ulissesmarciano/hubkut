import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './context/UserContext';

import LoginPage from './pages/loginpage/loginpage';
import HomePage from './pages/homepage/homepage';
import FollowingPage from './pages/following-page/following-page';
import FollowersPage from './pages/followers-page/followers-page';
import ReposPage from './pages/repos-page/repos-page';
import StarredPage from './pages/starred-page/starred-page';
import PerfilPage from './pages/perfil-page/perfil-page';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/home/:username" element={<HomePage />}/>
            <Route path="/following/:username" element={<FollowingPage />} />
            <Route path="/followers/:username" element={<FollowersPage/>} />
            <Route path="/repos/:username" element={<ReposPage />} />
            <Route path="/starred/:username" element={<StarredPage />} />
            <Route path="/perfil/:username" element={<PerfilPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
