import { useState } from "react";

function useLocalStorage(key) {
  const [data, setData] = useState(() => {
    const storedUsers = localStorage.getItem(key);
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  const set = (user) => {
    setData([...data, user]);
    localStorage.setItem(key, JSON.stringify(data));

  }
  const get = () => {
    return data;
  }
  return { set, get }
}

export default useLocalStorage;
