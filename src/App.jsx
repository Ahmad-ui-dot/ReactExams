import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import Login from "./pages/Login";
import HomePage from "./pages/Home/HomePage";
import Dostavka from "./pages/doatavka/dostavka";
import Layout from "./Layout";
import { GuestRoute } from "./GuestRoute";
import  ProtectedRoute  from "../src/lib/ProtectedRoute";
import Product from "./pages/product/Product";
import ContactPage from "./pages/Contact/ContactPage";
import Payment from "./pages/Oplata/Payment";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <GuestRoute>
          <Suspense fallback={<div>Loading...</div>}>
            <Login />
          </Suspense>
        </GuestRoute>
      ),
    },
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          ),
        },
        {
          path: "dostavka",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Dostavka />
            </Suspense>
          ),
        },
        {
          path: "product",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Product />
            </Suspense>
          ),
        },
        {
          path: "contacts",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <ContactPage />
            </Suspense>
          ),
        },
        {
          path: "payment",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Payment />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}