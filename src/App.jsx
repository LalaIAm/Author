import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Login from "./pages/LogIn";
import AuthWrapper from "./layouts/AuthWrapper";
import React from "react";
import Home from "./pages/Home";
import AppLayout from "./layouts/AppLayout";
import { BuilderPage } from "@builder.io/react";

export default function App() {
  const element = useRoutes([
    {
      path: "/",
      element: (
        <AuthWrapper>
          <SignUp />
        </AuthWrapper>
      ),
    },
    {
      path: "/login",
      element: (
        <AuthWrapper>
          <Login />
        </AuthWrapper>
      ),
    },
    {
      path: "/dashboard",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: '/builder-demo',
      element: <BuilderPage />
    }
  ]);

  const location = useLocation();

  if (!element) return null;
  return (
    <AnimatePresence mode="wait" initial={false}>
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}
