import { useEffect, useState } from "react";

const useInventories = () => {
      const [data, setData] = useState([]);

      useEffect(() => {
            fetch("https://still-depths-00724.herokuapp.com/cars")
                  .then(res => res.json())
                  .then(data => setData(data))
      }, [])
      return [data, setData];
};

export default useInventories;