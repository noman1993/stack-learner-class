import { useState, useEffect } from "react";

const useFetchData = (url, cb) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);

    try {
      const res = await fetch(url);
      const result = await res.json();
      setLoading(false);
      setError("");
      if (cb) {
        setData(cb(result));
      } else {
        setData(result);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return {
    data,
    loading,
    error,
  };
};

export default useFetchData;
