import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/routes" element={<h1>EXAMPLE 01!</h1>} />
                <Route path="/routes2" element={<h1>EXAMPLE 02!</h1>} />
            </Routes>
        </Router>
    );
}