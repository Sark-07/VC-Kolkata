import axios from 'axios';
import { useEffect, useState } from 'react';

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    
    const data = await axios.get(url)
    setLoading(false);
    setData(data);
  };

  useEffect(() => {
    getData();
  }, [url]);


  return {loading, data}
};
