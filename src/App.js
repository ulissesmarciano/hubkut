import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from './pages/loginpage/loginpage';
import HomePage from './pages/homepage/homepage';
import FollowingPage from './pages/following-page';
import FollowersPage from './pages/followers-page';
import ReposPage from './pages/repos-page';
import StarredPage from './pages/starred-page';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/home/:username" element={<HomePage />}/>
          <Route path="/following/:username" element={<FollowingPage />} />
          <Route path="/followers/:username" element={<FollowersPage/>} />
          <Route path="/repos/:username" element={<ReposPage />} />
          <Route path="/starred/:username" element={<StarredPage />} />
      </Routes>
    </Router>
  );
}

export default App;
