import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/loginpage';
import HomePage from './pages/homepage';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/home/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
