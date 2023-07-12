import logo from "./logo.svg";
import "./App.css";
import theme from "./theme";
import Login from "./pages/Login";
import { ThemeProvider } from "@mui/material";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Switch,
} from "react-router-dom";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<Routes>
					<Route path="/login" element={<Login />} />
				</Routes>
			</Router>
		</ThemeProvider>
	);
}

export default App;
