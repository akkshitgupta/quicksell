import { useEffect, useState } from "react";

export default function useFetchApi() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => setData(result))
      // .then((data) => setData(useGroup(data?.tickets, "status")))
      .catch((error) => console.log("error", error))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
