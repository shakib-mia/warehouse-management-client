import { useEffect, useState } from "react";

const useInventories = () => {
      const [data, setData] = useState([]);

      useEffect(() => {
            fetch("http://localhost:7000/allCars")
                  .then(res => res.json())
                  .then(data => setData(data))
      }, [])
      return [data, setData];
};

export default useInventories;