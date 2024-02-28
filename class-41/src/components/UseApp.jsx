import { useState, useEffect } from "react";

const cacheData = {};

const UseApp = () => {
  const [users, setUsers] = useState({});
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(1);

  const max = 10;

  useEffect(() => {
    if (cacheData[`user-${id}`]) {
      setUsers(cacheData[`user-${id}`]);
      return;
    }
    setLoading(true);
    fetchUser(id)
      .then((data) => {
        setUsers(data);
      })
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    if (!cacheData[`user-${id + 1}`] && id < max) {
      fetchUser(id + 1);
    }
  }, [id]);

  const fetchUser = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        cacheData[`user-${id}`] = data;

        return data;
      });
  };

  const nextHandler = () => {
    if (id < max) {
      setId(id + 1);
    }
  };

  const previousHandler = () => {
    if (id > 1) {
      setId(id - 1);
    }
  };

  return {
    users,
    loading,
    id,
    max,
    nextHandler,
    previousHandler,
  };
};

export default UseApp;
