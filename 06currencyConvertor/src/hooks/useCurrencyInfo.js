import { useEffect, useState } from 'react';

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-12-01/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => {
        if (res && res[currency]) {
          setData(res[currency]);
        } else {
          console.error("Currency not found in response:", res);
          setData({});
        }
      })
      .catch((err) => {
        console.error("Error fetching currency data:", err);
        setData({});
      });
  }, [currency]);

  return data;
};

export default useCurrencyInfo;
