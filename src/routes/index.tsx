import { Routes as Router, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";

export default function Routes() {
    return (
        <Router>
            <Route path="/" element={<Dashboard />} />
        </Router>
    );
}