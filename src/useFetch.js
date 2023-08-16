import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) setError(true);
        else setData(res);
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);
  return { data, loading, error };
}

export default useFetch;
