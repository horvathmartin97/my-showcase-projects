import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { AuthContextProvider } from "./contexts/AuthContext";
import MainLayout from "./layouts/MainLayout";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import CarsPage from "./pages/CarsPage";
import RegistrationPage from "./pages/RegistrationPage";
import ContactPage from "./pages/ContactPage";
import DetailedCarPage from "./pages/DetailedCarPage";
import ProtectedRoute from "./components/ProtectedRoute";
import AddNewCarPage from "./pages/AddNewCarPage";
import CarsActionsPage from "./pages/CarsActionsPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="" element={<MainLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/car" element={<CarsPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/car/:carId" element={<DetailedCarPage />} />
            <Route
              path="/addNewCar"
              element={
                <ProtectedRoute>
                  <AddNewCarPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/carActions"
              element={
                <ProtectedRoute>
                  <CarsActionsPage />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);
