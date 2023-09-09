import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6e42759384msh4bd2565a8c9c040p12a0aejsn60eba7b98c89",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    url: `https://jsearch.p.rapidapi.com/search/${endpoint}`,
    // an object where we spread the query that is pass into this param
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;

// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }
