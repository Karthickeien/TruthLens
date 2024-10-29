import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [finalResult, setFinalResult] = useState(null);
  const [imageSet, setImageSet] = useState([]);
  const [certiId, setCertiId] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [wallet, setWallet] = useState(localStorage.getItem("wallet") || null);
  const [videoTitle, setVideoTitle] = useState(""); // Add videoTitle
  const [con_id, setVideoID] = useState(""); 

  const value = {
    finalResult,
    setFinalResult,
    imageSet,
    setImageSet,
    certiId,
    setCertiId,
    prediction,
    setPrediction,
    wallet,
    setWallet,
    videoTitle, // Expose videoTitle in context
    setVideoTitle, // Expose setter function for videoTitle
    con_id,
    setVideoID,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};


export const useStore = () => {
  return useContext(StoreContext);
};
