import React, { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import { db } from "../firebase/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import toast from "react-hot-toast";

// إنشاء السياق
const WatchlistContext = createContext();

// إنشاء المزود
export const WatchlistProvider = ({ children }) => {
  const { isLoaded, user } = useUser();
  const userId = isLoaded && user ? user.id : null;

  const [watchlist, setWatchlist] = useState([]);
  const [isWatchlistLoaded, setIsWatchlistLoaded] = useState(false); // ✅ لتفادي الحذف

  // تحميل المفضلة من Firestore
  useEffect(() => {
    if (!userId) return;

    const fetchWatchlist = async () => {
      try {
        const docRef = doc(db, "watchlists", userId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setWatchlist(docSnap.data().stocks || []);
          console.log("📥 Watchlist loaded from Firestore");
        } else {
          console.log("ℹ️ No watchlist found for this user");
        }

        setIsWatchlistLoaded(true); // ✅ تم تحميل البيانات
      } catch (error) {
        console.error("❌ Error fetching watchlist:", error);
      }
    };

    fetchWatchlist();
  }, [userId]);

  // حفظ المفضلة في Firestore بعد التحميل فقط
  useEffect(() => {
    if (!userId || !isWatchlistLoaded) return;

    const saveWatchlist = async () => {
      try {
        // تنظيف البيانات من undefined
        const cleanedWatchlist = watchlist.map((stock) => {
          const cleanStock = {};
          Object.entries(stock).forEach(([key, value]) => {
            if (value !== undefined) {
              cleanStock[key] = value;
            }
          });
          return cleanStock;
        });

        const docRef = doc(db, "watchlists", userId);
        await setDoc(docRef, { stocks: cleanedWatchlist }, { merge: true });
        console.log("✅ Watchlist saved to Firestore:", cleanedWatchlist);
      } catch (error) {
        console.error("❌ Error saving watchlist:", error);
      }
    };

    saveWatchlist();
  }, [watchlist, userId, isWatchlistLoaded]);

  // إضافة سهم للمفضلة
  const addToWatchlist = (stock) => {
    const exists = watchlist.find(
      (item) => item["01. symbol"] === stock["01. symbol"]
    );
    if (!exists) {
      setWatchlist((prev) => [...prev, stock]);

      toast.success("Add to Watchlist ❤️");
    } else {
      toast.success("Stock already in watchlist ⚠️");
    }
  };

  // حذف سهم من المفضلة
  const removeFromWatchlist = (symbol) => {
    setWatchlist((prev) =>
      prev.filter((item) => item["01. symbol"] !== symbol)
    );
    toast.success(" Removed from watchlist 🗑️");
  };

  return (
    <WatchlistContext.Provider
      value={{ watchlist, addToWatchlist, removeFromWatchlist }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};

// هوك لاستخدام السياق
export const useWatchlist = () => useContext(WatchlistContext);
