import '../asset/App.scss';
import NavBar from './navBar/NavBar';
import Home from '../pages/homePage/Home';
import Sign from '../pages/auth/Sign';
import SearchResult from '../pages/resultPage/SerachResult';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/users/login" element={<Sign />} />
        <Route exact path="/result" element={<SearchResult />} /> 
      </Routes>
    </div>
  );
}

export default App;
