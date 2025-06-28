import React, { useState } from "react";
import Navbar from "../component/Navbar";
import home from "../assets/home.png";
import { CiSearch } from "react-icons/ci";
import { useWatchlist } from "../context/watchListContext";
import Stocks from "../component/Stocks";

const Home = () => {
  const [stocks, setStocks] = useState([]);
  const [searchSymbol, setSearchSymbol] = useState("");

  const { addToWatchlist } = useWatchlist();

  const handleSearch = async () => {
    if (!searchSymbol.trim()) return;

    try {
      const response = await fetch(
        `https://api.twelvedata.com/quote?symbol=${searchSymbol.toUpperCase()}&apikey=8bcc2ab49d3f4718af1075c140abf03f`
      );
      const data = await response.json();

      if (data.code || data.status === "error") {
        console.error("❌ Symbol not found:", data.message || data.code);
        setStocks([]);
        return;
      }

      const stock = {
        "01. symbol": data.symbol,
        "02. name": data.name,
        "05. price": data.price,
        "09. change": data.change,
        "10. change percent": data.percent_change,
        "07. latest trading day": data.datetime,
        "06. volume": data.volume,
      };

      setStocks([stock]);
    } catch (error) {
      console.error("❌ API fetch failed:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <img
          className="p-2"
          loading="lazy"
          src="https://res.cloudinary.com/ddigrrkv7/image/upload/v1751109880/home_heqjub.png"
          alt="home"
        />

        {/* company names */}
        <div>
          <Stocks />
        </div>
        {/* search bar */}
        <div className="flex justify-center items-center w-3/4 sm:w-1/2 mt-4">
          <div className="bg-[#EBEDF2] p-2 rounded-3xl">
            <CiSearch />
          </div>
          <input
            className="bg-[#EBEDF2] border-2 w-full rounded-3xl p-2"
            type="text"
            placeholder="Enter stock symbol (e.g., AAPL)"
            value={searchSymbol}
            onChange={(e) => setSearchSymbol(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="ml-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition"
          >
            Search
          </button>
        </div>

        {/* table */}
        <div className="mt-8 w-full flex justify-center px-4">
          <div className="overflow-x-auto">
            <table className="min-w-max border border-gray-400 text-center">
              <thead>
                <tr>
                  <th className="border p-2">Symbol</th>
                  <th className="border p-2">Company</th>
                  <th className="border p-2">Price</th>
                  <th className="border p-2">Change</th>
                  <th className="border p-2">Percent</th>
                  <th className="border p-2">Date</th>
                  <th className="border p-2">Volume</th>
                  <th className="border p-2">Watchlist</th>
                </tr>
              </thead>
              <tbody>
                {stocks.map((stock) => {
                  const change = parseFloat(stock["09. change"]);
                  const percent = parseFloat(
                    stock["10. change percent"]?.replace("%", "") || 0
                  );

                  const changeColor =
                    change > 0
                      ? "text-green-600"
                      : change < 0
                      ? "text-red-600"
                      : "text-gray-600";

                  const percentColor =
                    percent > 0
                      ? "text-green-600"
                      : percent < 0
                      ? "text-red-600"
                      : "text-gray-600";

                  return (
                    <tr key={stock["01. symbol"]}>
                      <td className="border px-4 py-2">
                        {stock["01. symbol"]}
                      </td>
                      <td className="border px-4 py-2">{stock["02. name"]}</td>
                      <td className="border px-4 py-2">
                        {stock["05. price"]} USD
                      </td>
                      <td className={`border px-4 py-2 ${changeColor}`}>
                        {stock["09. change"]}
                      </td>
                      <td className={`border px-4 py-2 ${percentColor}`}>
                        {stock["10. change percent"]}
                      </td>
                      <td className="border px-4 py-2">
                        {stock["07. latest trading day"]}
                      </td>
                      <td className="border px-4 py-2">
                        {parseInt(stock["06. volume"]).toLocaleString()}
                      </td>
                      <td className="border px-4 py-2">
                        <button
                          onClick={() => addToWatchlist(stock)}
                          className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition"
                        >
                          + Add
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
