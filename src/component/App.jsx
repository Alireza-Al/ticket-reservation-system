import '../asset/App.scss';
import Home from '../pages/homePage/Home';
import Sign from '../pages/auth/Sign';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/users/login" element={<Sign />} />
      </Routes>
    </div>
  );
}

export default App;
