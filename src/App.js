import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get('http://127.0.0.1:8000/api/items/');
              console.log(response.data);  // Add this line to log the response
              setItems(response.data);
          } catch (error) {
              console.error("Error fetching data:", error); // Log any errors
          }
      };
      fetchData();
  }, []);
  

    return (
        <div>
            <h1>Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
