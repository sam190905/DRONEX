import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/register.jsx";
import Home from "./components/home";
import { UserProvider } from "./context/context";
import About from "./components/external/about.jsx";
import Cart from "./components/external/cart.jsx";

// ✅ Create a Layout Component to wrap all routes in UserProvider
const Layout = ({ children }) => {
  return (
    <UserProvider> {/* Now, UserProvider is available for all pages */}
      {children}
    </UserProvider>
  );
};

const router = createBrowserRouter([
  {
    path:"/cart",
    element:(<Cart />),

  },
  {
    path:'/About',
    element:(
<About />
    ),

  },
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "/Register",
    element: (
      <Layout>
        <Register />
      </Layout>
    ),
  },
  {
    path: "/Home",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
