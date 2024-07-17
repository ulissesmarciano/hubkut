import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LoginPage from './pages/loginpage/loginpage';
import HomePage from './pages/homepage/homepage';
import FollowingScreen from './pages/following-screen';
import FollowersScreen from './pages/followers-screen';
import ReposScreen from './components/repos-screen';
import StarredScreen from './pages/starred-screen';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/home/:username" element={<HomePage />}/>
          <Route path="/following/:username" element={<FollowingScreen />} />
          <Route path="/followers/:username" element={<FollowersScreen />} />
          <Route path="/repos/:username" element={<ReposScreen />} />
          <Route path="/starred/:username" element={<StarredScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
