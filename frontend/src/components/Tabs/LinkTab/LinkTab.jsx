import React, { useEffect, useState } from "react";
import "./LinkTab.scss";
import ICON from "../../../assets/link.svg";

import toast from "react-hot-toast";
import useFetch from "../../../hooks/useFetch";

import { baseUrl } from "../../../constant";
import { useStore } from "../../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import Loader from "../../../pages/Loader/Loader";

const LinkTab = () => {
  const [link, setLink] = useState("");
  const [result, setResult] = useState([]);
  const [loader, setLoader] = useState(false);
  const { setVideoTitle } = useStore(); // Add videoTitle state
  const { setVideoID } = useStore(); 
  const { setFinalResult } = useStore();
  const navigate = useNavigate();

  const { wallet } = useStore();
  
  const getImages = async (id) => {
    const res = await fetch(`${baseUrl}/split_vid?fid=${id}`, {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    });
    const images = await res.json();
    console.log(images.snap);
    return images;
  };

  const handleUpload = async () => {
    console.log("link : ", link);
    if (link.length > 0) {
      setLoader(true);
      const { id, title, con_id } = await useFetch(link, wallet); // Fetch id and title
      setVideoID(con_id);
      setVideoTitle(title); // Set the title in the StoreContext instead of local state
      console.log(id);
      const imageSet = await getImages(id);
      setResult(imageSet.snap);
      console.log("video title:::::::::::::)))", title);
      setLoader(false);
    } else {
      toast.error("Enter a valid link");
    }
  };

  const imageRedirect = async (id) => {
    try {
      const res = await fetch(`${baseUrl}/unmask/${wallet}/${id}`, {
        method: "get",
        headers: new Headers({
          "ngrok-skip-browser-warning": "69420",
        }),
      });
      const result = await res.json();
      setFinalResult(result);
      navigate("/result");
    } catch (error) {
      console.error("Error uploading file:", error);
      toast.error("can't upload the file");
    }
  };

  return result?.length > 0 ? (
    <div className="popup">
      <div className="popup-window">
        <div className="img-container">
          {result.map((item, index) => (
            <img
              key={index}
              src={`${baseUrl}/dwd/${item}`}
              alt="shot-img"
              className="img-shot"
              onClick={() => imageRedirect(item)}
            ></img>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="tab-content">
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className="i-box">
            <img src={ICON} className="icon" alt="icon" />
            <input
              type="url"
              className="input-box"
              placeholder="https://google.com"
              onChange={(e) => setLink(e.target.value)}
              value={link}
            />
          </div>

          <button onClick={handleUpload} className="create-btn">
            Upload
          </button>
        </>
      )}
    </div>
  );
};

export default LinkTab;