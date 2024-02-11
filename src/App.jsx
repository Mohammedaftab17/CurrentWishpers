import React from "react";
import "./App.css";
import NewsData from "./pages/NewsData";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./pages/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./Components/PrivateRoute";
import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Navigate to="/general" />} />
          <Route
            path="/general"
            element={<NewsData country="in" category="general" />}
          />
          <Route
            path="/business"
            element={<NewsData country="in" category="business" />}
          />
          <Route
            path="/entertainment"
            element={<NewsData country="in" category="entertainment" />}
          />
          <Route
            path="/health"
            element={<NewsData country="in" category="health" />}
          />
          <Route
            path="/science"
            element={<NewsData country="in" category="science" />}
          />
          <Route
            path="/sports"
            element={<NewsData country="in" category="sports" />}
          />
          <Route
            path="/technology"
            element={<NewsData country="in" category="technology" />}
          />
        </Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
