import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const useAPI = endpoint => {
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    const response = await axios.get(endpoint);
    setData(response.data);
  }, [endpoint]);

  useEffect(() => {
    getData();
  }, [getData]);

  return data;
};

export default useAPI;
