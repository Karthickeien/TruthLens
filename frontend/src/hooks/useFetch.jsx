import { baseUrl } from "../constant";
import { toast } from "react-hot-toast";

const useFetch = async (link, wallet) => {
  try {
    const res = await fetch(`${baseUrl}/link/${wallet}/upload?link=${link}`, {
      method: "get",
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
    });
    const result = await res.json();
    const id = result.id;
    const con_id = result.con_id;
    const title = result.title;
    return { id, title, con_id};
  } catch (error) {
    console.error("Error uploading file:", error);
    toast.error("can't upload the file");
    return null;
  }
};

export default useFetch;
