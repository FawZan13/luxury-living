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
import Book from './Pages/Book/Book';
import MyBookings from './Pages/Dashboard/MyBookings/MyBookings';
import ManageBookings from './Pages/Dashboard/ManageBookings/ManageBookings';



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
            <Route exact path="/book/:_id" element={<PrivateRoute><Book /></PrivateRoute>}>

            </Route>
            <Route path="/dashboard" element={<Dashboard />} >
              <Route path="/dashboard/addService" element={<AdminRoute><AddService /></AdminRoute>} />
              <Route path="/dashboard/makeAdmin" element={<AdminRoute><MakeAdmin /></AdminRoute>} />
              <Route path="/dashboard/addReview" element={<PrivateRoute><AddReview /></PrivateRoute>} />
              <Route path="/dashboard/myBookings" element={<PrivateRoute><MyBookings /></PrivateRoute>} />
              <Route path="/dashboard/manageBookings" element={<AdminRoute><ManageBookings /></AdminRoute>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
