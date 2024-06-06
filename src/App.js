// frontend/src/App.js
/*import React, { useEffect, useState } from 'react';
import { getYourModelData } from './services/api';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getYourModelData();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Data from Django API</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
*/