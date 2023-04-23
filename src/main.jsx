import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Champion from "./pages/Champion";
import { QueryClient, QueryClientProvider } from "react-query";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/champions",
    element: <HomePage />,
  },
  {
    path: "/champions/:id",
    element: <Champion />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
