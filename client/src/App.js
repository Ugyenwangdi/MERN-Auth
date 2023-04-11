import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";



function App() {
	const user = localStorage.getItem("token");

	return (
		<BrowserRouter>
		<Routes>
			{user && <Route path="/" exact element={<Dashboard />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
		</BrowserRouter>
	);
}

export default App;