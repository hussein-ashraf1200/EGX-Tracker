import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../component/Navbar";
import StockChart from "../component/StockChart";
import { useWatchlist } from "../context/WatchlistContext";

const StockDetails = () => {
  const { symbol } = useParams(); // الحصول على رمز السهم من الرابط
  const { watchlist } = useWatchlist();
  const [labels, setLabels] = useState([]);
  const [prices, setPrices] = useState([]);
  const [range, setRange] = useState("1D"); // القيمة الابتدائية

  const API_KEY = import.meta.env.VITE_API_KEY;

  // تحديد الإعدادات بناءً على الفترة
  const getIntervalSettings = () => {
    switch (range) {
      case "1D":
        return { interval: "1h", outputsize: 24 };
      case "1W":
        return { interval: "1day", outputsize: 7 };
      case "1M":
        return { interval: "1day", outputsize: 30 };
      case "1Y":
        return { interval: "1week", outputsize: 52 };
      default:
        return { interval: "1day", outputsize: 7 };
    }
  };

  // البحث عن السهم المختار من المفضلة
  const selectedStock = watchlist.find((item) => item["01. symbol"] === symbol);

  useEffect(() => {
    if (!selectedStock) return;

    const { interval, outputsize } = getIntervalSettings();

    const fetchData = async () => {
      const url = `https://api.twelvedata.com/time_series?symbol=${symbol}&interval=${interval}&outputsize=${outputsize}&apikey=${API_KEY}`;

      try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.status === "error") {
          console.error("❌ API Error:", data.message);
          return;
        }

        const labels = data.values.map((item) => item.datetime).reverse();
        const prices = data.values
          .map((item) => parseFloat(item.close))
          .reverse();

        setLabels(labels);
        setPrices(prices);
      } catch (error) {
        console.error("❌ Fetch error:", error);
      }
    };

    fetchData();
  }, [selectedStock, range]);

  if (!selectedStock) {
    return (
      <div>
        <Navbar />
        <p className="text-center mt-10 text-xl text-red-600">
          Stock not found in watchlist
        </p>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center flex-col">
        <p className="text-xl font-bold mt-4">Stock Details</p>

        {/* أزرار المدى الزمني */}
        <ul className="flex justify-center items-center gap-4 my-4">
          {["1D", "1W", "1M", "1Y"].map((period) => (
            <li
              key={period}
              onClick={() => setRange(period)}
              className={`cursor-pointer px-4 py-2 rounded ${
                range === period ? "bg-blue-500 text-white" : "bg-gray-200"
              } hover:bg-blue-400 transition`}
            >
              {period}
            </li>
          ))}
        </ul>

        <div className="text-center flex flex-col justify-center items-center gap-8 mb-4">
          <p className="text-lg font-semibold">{selectedStock["02. name"]}</p>
          <p className="text-2xl font-bold">
            {prices.length > 0 ? prices[prices.length - 1] : "Loading..."} USD
          </p>
          <p className="text-gray-600">Last {labels.length} data points</p>
        </div>

        <div className="mt-36 sm:mt-4 w-[750px] sm:w-[900px] h-[240px] sm:h-[600px] flex justify-center items-center rotate-90 sm:rotate-0">
          <StockChart labels={labels} prices={prices} />
        </div>
      </div>
    </div>
  );
};

export default StockDetails;
