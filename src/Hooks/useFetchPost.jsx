import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchPost = (url, payload) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const {data} = await axios.post(url, payload);
      setLoading(false);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { loading, data };
};

export default useFetchPost;
