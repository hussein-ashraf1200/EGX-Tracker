// context/StockContext.js
import React, { createContext, useEffect, useState } from "react";

export const StockContext = createContext();

export const StockProvider = ({ children }) => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await fetch(
          "https://api.twelvedata.com/quote?symbol=AAPL,GOOGL,META,NFLX,AMZN,NVDA,TSLA,PYPL&apikey=YOUR_API_KEY"
        );
        const data = await response.json();

        const stockArray = Object.values(data).filter(
          (item) => typeof item === "object" && item["symbol"]
        );

        const formattedData = stockArray.map((stock) => ({
          symbol: stock.symbol,
          name: stock.name,
          price: stock.price,
          change: stock.change,
          percent_change: stock.percent_change,
          datetime: stock.datetime,
          volume: stock.volume,
        }));

        setStocks(formattedData);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    };

    fetchStockData();
  }, []);

  return (
    <StockContext.Provider value={{ stocks }}>{children}</StockContext.Provider>
  );
};
