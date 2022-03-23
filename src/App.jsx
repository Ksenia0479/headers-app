import axios from 'axios';
import { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [headers, setHeaders] = useState('NotFound');

  useEffect(() => {
    if (typeof headers !== 'object') {
      axios.get(`${process.env.REACT_APP_API_URL}/headers`).then(({ data }) => {
        setHeaders(Object.keys(data).map(k => `${k}: ${data[k]}`));
      });
    }
  }, [headers]);

  return (
    <div className="App">
      {typeof headers === 'object'
        ? headers.map(header => <div>{header}</div>)
        : headers}
    </div>
  );
}

export default App;
