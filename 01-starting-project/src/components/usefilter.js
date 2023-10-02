//import React from 'react'
import { useState, useEffect, memo } from "react";

const useFilter = (url) => {
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch(url);
      const data = await res.json();

      console.log(data);
      // console.log(arr);
      setFilter(data);
    };
    fetchTodos();
  }, [url]);

  return [filter];
};

export default useFilter;
