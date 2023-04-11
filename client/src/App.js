import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/main";
import Signup from "./components/signup";
import Login from "./components/login";

function App() {
	const user = localStorage.getItem("token");

	return (
		<BrowserRouter>
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
		</BrowserRouter>
	);
}

export default App;