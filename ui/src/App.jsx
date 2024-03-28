import React, { useEffect, useState } from 'react';
import config from './config'
import './App.css'

const ApiUrl = config[import.meta.env.VITE_NODE_ENV || "development"].apiUrl;

function App() {
  let [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch(ApiUrl + "/authors")
      .then(response => response.json())
      .then(data => setAuthors(data))
      .catch(err => console.log(err))
  }, []);


  return (
    <div>
      <h1>Authors</h1>
      <ul>
        {authors.map(author => <li key={author.id}>{author.firstName} {author.lastName}</li>)}
      </ul>
    </div>
  );
}

export default App;
