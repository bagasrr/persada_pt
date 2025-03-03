import { HelmetProvider } from "react-helmet-async";
import Layout from "./Pages/Layout";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Index from "./Pages/Index";
import ErrorPage from "./Pages/ErrorPages";

const rounter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Navigate to="/home" replace /> },
      { path: "/home", element: <Index /> },
      { path: "/about", element: <Index /> },
      { path: "/kalkulator", element: <Index /> },
      { path: "/produk", element: <Index /> },
      { path: "/blog", element: <Index /> },
      { path: "/contact", element: <Index /> },
    ],
  },
]);

const App = () => {
  return (
    <HelmetProvider>
      <RouterProvider router={rounter} />
    </HelmetProvider>
  );
};

export default App;
