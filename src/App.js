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

import React from 'react';
import Overview from './components/Overview';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Smart Storage Solutions</h1>
      </header>
      <main>
        <Overview />
      </main>
    </div>
  );
}

export default App;
