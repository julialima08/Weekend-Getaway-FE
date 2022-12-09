import Login from './pages/Login';
import './CSS/App.css';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
      
    </div>
  );
}

export default App;
