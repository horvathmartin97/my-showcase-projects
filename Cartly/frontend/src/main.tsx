import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layouts/mainLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegsiterPage from "./pages/RegisterPage";
import { AuthContextProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import MyLists from "./pages/MyLists";
import DetailedListPage from "./pages/DetailedListPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="" element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegsiterPage />} />
            <Route
              path="/myLists"
              element={
                <ProtectedRoute>
                  <MyLists />
                </ProtectedRoute>
              }
            />
            <Route
              path="/list/:listId"
              element={
                <ProtectedRoute>
                  <DetailedListPage />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
