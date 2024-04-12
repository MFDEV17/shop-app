import { SDKProvider } from "@tma.js/sdk-react";

import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GreetingPage from "./pages/greeting.page.tsx";
import ResultPage from "./pages/result.page.tsx";
import OrderPage from "./pages/order.page.tsx";
import CartsPage from "./pages/carts.page.tsx";

const router = createBrowserRouter([
  { element: <GreetingPage />, path: "/", index: true },
  { element: <ResultPage />, path: "result" },
  { element: <OrderPage />, path: "order" },
  { element: <CartsPage />, path: "carts" },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <SDKProvider options={{ cssVars: true, acceptCustomStyles: true }}>
    <RouterProvider router={router} />
  </SDKProvider>,
);
