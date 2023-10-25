import {BrowserRouter, Routes, Route} from 'react-router-dom'

//import pages and Components
import Home from './pages/Home'
import Register from './pages/Register'
import AdminDashboard from './pages/AdminDashboard'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/register"
              element={<Register />}
            />
            <Route
              path="/adminDashBoard"
              element={<AdminDashboard />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
