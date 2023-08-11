import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeLayout from "./layouts/home";
import AuthLayout from "./layouts/auth";

function App() {
  return (
    <Routes>
      <Route path="home/*" element={<HomeLayout />} />
      <Route path="auth/*" element={<AuthLayout />} />

      {/* <Route path="dashboard/*" element={}/>
      <Route path="recruiter/*" element={}/>
      <Route path="admin/*" element={}/> */}

      <Route path="/" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default App;
