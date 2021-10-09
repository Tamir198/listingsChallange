import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import FilterBox from '../Filter/FilterBox';
import List from '../List/List';

function App() {
  const [exampleRes, setExampleRes] = useState();

  // const fetchData = async () => {
  //   try {
  //     const { message } = await axios.get('http://localhost:8080/example').then(({ data }) => data);
  //     setExampleRes(message);
  //   } catch (err) { console.log(err); }
  // };

  // useEffect(() => { fetchData(); });

  return (
    <div className="App">
      <header />
      <div className="container">
        <FilterBox></FilterBox>
        <List></List>
      </div>
    </div>
  );
}

export default App;
