import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // שליחת בקשה לשרת
    axios.get('http://localhost:3000/api/hello')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>React Client</h1>
      <p>Message from server: {message}</p>
    </div>
  );
}

export default App;
