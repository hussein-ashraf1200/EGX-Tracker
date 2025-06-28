import React from "react";

const stocksSoymble = [
  { symbol: "AAPL", name: "Apple Inc." },
  { symbol: "MSFT", name: "Microsoft Corporation" },
  { symbol: "GOOGL", name: "Alphabet Inc. (Class A)" },
  { symbol: "GOOG", name: "Alphabet Inc. (Class C)" },
  { symbol: "AMZN", name: "Amazon.com Inc." },
  { symbol: "NVDA", name: "NVIDIA Corporation" },
  { symbol: "META", name: "Meta Platforms Inc." },
  { symbol: "TSLA", name: "Tesla Inc." },
  { symbol: "BRK.B", name: "Berkshire Hathaway Inc." },
  { symbol: "UNH", name: "UnitedHealth Group Inc." },
  { symbol: "JNJ", name: "Johnson & Johnson" },
  { symbol: "XOM", name: "Exxon Mobil Corporation" },
  { symbol: "JPM", name: "JPMorgan Chase & Co." },
  { symbol: "V", name: "Visa Inc." },
  { symbol: "PG", name: "Procter & Gamble Company" },
  { symbol: "MA", name: "Mastercard Incorporated" },
  { symbol: "LLY", name: "Eli Lilly and Company" },
  { symbol: "HD", name: "Home Depot Inc." },
  { symbol: "AVGO", name: "Broadcom Inc." },
  { symbol: "CVX", name: "Chevron Corporation" },
  { symbol: "MRK", name: "Merck & Co., Inc." },
  { symbol: "ABBV", name: "AbbVie Inc." },
  { symbol: "PEP", name: "PepsiCo Inc." },
  { symbol: "COST", name: "Costco Wholesale Corporation" },
  { symbol: "KO", name: "The Coca-Cola Company" },
  { symbol: "BAC", name: "Bank of America Corporation" },
  { symbol: "TMO", name: "Thermo Fisher Scientific Inc." },
  { symbol: "WMT", name: "Walmart Inc." },
  { symbol: "DIS", name: "The Walt Disney Company" },
  { symbol: "ADBE", name: "Adobe Inc." },
  { symbol: "ORCL", name: "Oracle Corporation" },
  { symbol: "NFLX", name: "Netflix Inc." },
  { symbol: "ABT", name: "Abbott Laboratories" },
  { symbol: "NKE", name: "NIKE Inc." },
  { symbol: "PFE", name: "Pfizer Inc." },
  { symbol: "CSCO", name: "Cisco Systems Inc." },
  { symbol: "MCD", name: "McDonald's Corporation" },
  { symbol: "INTC", name: "Intel Corporation" },
  { symbol: "DHR", name: "Danaher Corporation" },
  { symbol: "CRM", name: "Salesforce Inc." },
  { symbol: "VZ", name: "Verizon Communications Inc." },
  { symbol: "ACN", name: "Accenture plc" },
  { symbol: "WFC", name: "Wells Fargo & Company" },
  { symbol: "LIN", name: "Linde plc" },
  { symbol: "TXN", name: "Texas Instruments Incorporated" },
  { symbol: "T", name: "AT&T Inc." },
  { symbol: "UPS", name: "United Parcel Service Inc." },
  { symbol: "NEE", name: "NextEra Energy Inc." },
  { symbol: "MS", name: "Morgan Stanley" },
  { symbol: "PM", name: "Philip Morris International Inc." },
  { symbol: "AMD", name: "Advanced Micro Devices Inc." },
  { symbol: "INTU", name: "Intuit Inc." },
  { symbol: "UNP", name: "Union Pacific Corporation" },
  { symbol: "SCHW", name: "Charles Schwab Corporation" },
  { symbol: "GS", name: "The Goldman Sachs Group Inc." },
  { symbol: "SPGI", name: "S&P Global Inc." },
  { symbol: "CAT", name: "Caterpillar Inc." },
  { symbol: "HON", name: "Honeywell International Inc." },
  { symbol: "DE", name: "Deere & Company" },
  { symbol: "BLK", name: "BlackRock Inc." },
  { symbol: "AMAT", name: "Applied Materials Inc." },
  { symbol: "LMT", name: "Lockheed Martin Corporation" },
  { symbol: "MDT", name: "Medtronic plc" },
  { symbol: "RTX", name: "RTX Corporation" },
  { symbol: "NOW", name: "ServiceNow Inc." },
  { symbol: "AXP", name: "American Express Company" },
  { symbol: "MO", name: "Altria Group Inc." },
  { symbol: "CI", name: "The Cigna Group" },
  { symbol: "BKNG", name: "Booking Holdings Inc." },
  { symbol: "C", name: "Citigroup Inc." },
  { symbol: "GE", name: "General Electric Company" },
  { symbol: "ADI", name: "Analog Devices Inc." },
  { symbol: "FDX", name: "FedEx Corporation" },
  { symbol: "ZTS", name: "Zoetis Inc." },
  { symbol: "ADP", name: "Automatic Data Processing Inc." },
  { symbol: "SBUX", name: "Starbucks Corporation" },
  { symbol: "PGR", name: "The Progressive Corporation" },
  { symbol: "MMC", name: "Marsh & McLennan Companies Inc." },
  { symbol: "ELV", name: "Elevance Health Inc." },
  { symbol: "ISRG", name: "Intuitive Surgical Inc." },
  { symbol: "AMGN", name: "Amgen Inc." },
  { symbol: "PLD", name: "Prologis Inc." },
  { symbol: "TGT", name: "Target Corporation" },
  { symbol: "CL", name: "Colgate-Palmolive Company" },
  { symbol: "GM", name: "General Motors Company" },
  { symbol: "CSX", name: "CSX Corporation" },
  { symbol: "GILD", name: "Gilead Sciences Inc." },
  { symbol: "HUM", name: "Humana Inc." },
  { symbol: "DUK", name: "Duke Energy Corporation" },
  { symbol: "SO", name: "The Southern Company" },
  { symbol: "EOG", name: "EOG Resources Inc." },
  { symbol: "NOC", name: "Northrop Grumman Corporation" },
  { symbol: "PSX", name: "Phillips 66" },
  { symbol: "CB", name: "Chubb Limited" },
  { symbol: "BIIB", name: "Biogen Inc." },
];

const Stocks = () => {
  return (
    <div className="w-[300px] sm:w-[920px] rounded-lg max-w-full bg-black overflow-hidden whitespace-nowrap group">
      <div className="inline-block px-4 animate-scroll group-hover:[animation-play-state:paused]">
        {stocksSoymble.map((stock) => (
          <span
            key={stock.symbol}
            className="text-white text-sm mx-4 inline-block"
          >
            <span className="font-bold text-yellow-400">{stock.symbol}</span> -{" "}
            {stock.name}
          </span>
        ))}
      </div>

      {/* Keyframes CSS */}
      <style>
        {`
            @keyframes scroll-left {
              100% { transform: translateX(0%); }
              100% { transform: translateX(-100%); }
            }
  
            .animate-scroll {
              animation: scroll-left 200s linear infinite;
            }
          `}
      </style>
    </div>
  );
};

export default Stocks;
