import axios from "axios";
import { API_KEY, API_URL } from "../components/config";

// eslint-disable-next-line consistent-return
const getGoods = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: API_KEY!,
      },
    });
    return response.data.shop;
  } catch (err) {
    console.error(err);
  }
};

export default getGoods;
