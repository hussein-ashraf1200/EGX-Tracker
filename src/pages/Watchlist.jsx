import React from "react";
import { useWatchlist } from "../context/WatchlistContext";
import Navbar from "../component/Navbar";
import { useNavigate } from "react-router-dom";
import { IoIosRemoveCircleOutline } from "react-icons/io";

const Watchlist = () => {
  const { watchlist, removeFromWatchlist } = useWatchlist();
  const navigate = useNavigate();

  const showHandel = (symbol) => {
    navigate(`/stock/${symbol}`);
  };

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl  flex justify-center items-center font-bold my-4">
        My Watchlist
      </h1>
      <div className="mt-8 w-full flex  justify-center px-4">
        <div className="overflow-x-auto">
          {watchlist.length === 0 ? (
            <p>No stocks added yet.</p>
          ) : (
            <table className="min-w-max border border-gray-400 text-center">
              {/* رأس الجدول */}
              <thead>
                <tr>
                  <th className="border p-2">Symbol</th>
                  <th className="border p-2">Company</th>
                  <th className="border p-2">Price</th>
                  <th className="border p-2">Change</th>
                  <th className="border p-2">Percent</th>
                  <th className="border p-2">Date</th>
                  <th className="border p-2">Volume</th>
                  <th className="border p-2">Remove</th>
                  <th className="border p-2">Details</th>
                </tr>
              </thead>
              <tbody>
                {watchlist.map((stock) => (
                  <tr key={stock["01. symbol"]}>
                    <td className="border px-4 py-2">{stock["01. symbol"]}</td>
                    <td className="border px-4 py-2">{stock["02. name"]}</td>
                    <td className="border px-4 py-2">
                      {stock["05. price"]} USD
                    </td>
                    <td className="border px-4 py-2">{stock["09. change"]}</td>
                    <td className="border px-4 py-2">
                      {stock["10. change percent"]}
                    </td>
                    <td className="border px-4 py-2">
                      {stock["07. latest trading day"]}
                    </td>
                    <td className="border px-4 py-2">{stock["06. volume"]}</td>

                    <td className="border px-4 py-2">
                      <button
                        onClick={() => removeFromWatchlist(stock["01. symbol"])}
                      >
                        <img
                          className="w-5 h-5 object-contain"
                          src="https://res.cloudinary.com/ddigrrkv7/image/upload/v1751184198/bin_adk2dl.svg"
                          alt="Add to watchlist icon"
                          loading="lazy"
                          width="4"
                          height="5"
                        />
                      </button>
                    </td>
                    <td className="border px-4 py-2">
                      <button
                        onClick={() => showHandel(stock["01. symbol"])}
                        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition"
                      >
                        Show
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default Watchlist;
