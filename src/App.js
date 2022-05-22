import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import Reviews from "./pages/Reviews/Reviews";
import Appoinment from "./pages/Appoinment/Appoinment";
import Home from "./pages/Home/Home/Home";
import Header from "./pages/Shared/Header/Header";
import ContactUs from "./pages/ContactUs/ContactUs";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard/Dashboard";
import MyAppoinment from "./pages/Dashboard/MyAppoinment";
import MyReview from "./pages/Dashboard/MyReview";
import MyHistory from "./pages/Dashboard/MyHistory";
import Users from "./pages/Dashboard/Users";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/appoinment" element={
          <RequireAuth>
            <Appoinment></Appoinment>
          </RequireAuth>}>
        </Route>

        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
            
          <Route index element={<MyAppoinment></MyAppoinment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="myhistory" element={<MyHistory></MyHistory>}></Route>
          <Route path="allusers" element={<Users></Users>}></Route>

        </Route>

        <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        
        
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
