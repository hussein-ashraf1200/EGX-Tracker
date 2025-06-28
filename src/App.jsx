import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// Lazy-loaded pages
const Welcome = lazy(() => import("./pages/Welcome"));
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const Watchlist = lazy(() => import("./pages/Watchlist"));
const Market = lazy(() => import("./pages/Market"));
const News = lazy(() => import("./pages/News"));
const StockDetails = lazy(() => import("./pages/StockDetails"));

export default function App() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/market" element={<Market />} />
        <Route path="/news" element={<News />} />
        <Route path="/stock/:symbol" element={<StockDetails />} />
      </Routes>
    </Suspense>
  );
}
