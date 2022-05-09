import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import AddService from './Pages/Dashboard/AddService/AddService';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';
import Register from './Pages/Login/Register/Register';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';



function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/addService" element={<PrivateRoute><AddService /></PrivateRoute>} />
            <Route path="/makeAdmin" element={<PrivateRoute><MakeAdmin /></PrivateRoute>} />
            <Route path="/addReview" element={<PrivateRoute><AddReview /></PrivateRoute>} /> */}
            <Route path="/dashboard" element={<Dashboard />} >
              <Route path="/dashboard/addService" element={<AdminRoute><AddService /></AdminRoute>} />
              <Route path="/dashboard/makeAdmin" element={<PrivateRoute><MakeAdmin /></PrivateRoute>} />
              <Route path="/dashboard/addReview" element={<PrivateRoute><AddReview /></PrivateRoute>} />
            </Route>
            <Route path="/makeAdmin" element={<PrivateRoute><MakeAdmin /></PrivateRoute>} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
