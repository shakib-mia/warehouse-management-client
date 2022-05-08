import { useEffect, useState } from 'react';

const useUserItems = () => {
      const [userData, setUserData] = useState([])

      useEffect(() => {
            fetch("http://localhost:5000/userItems")
                  .then(res => res.json())
                  .then(data => setUserData(data))
      }, [])

      return [userData, setUserData]
};

export default useUserItems;