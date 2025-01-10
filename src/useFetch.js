import { useState,useEffect } from "react";
import axios from "axios";
export const useFetch = (url) => {
    const [data, setData] = useState([]);

    const fetchData = async (url) => {
      const response = await axios.get(url);
      setData(response.data)
    };

    useEffect(() => {
      fetchData(url);
    }, [url]);
    return data;
  };
