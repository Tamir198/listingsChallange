import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import FilterBox from '../Filter/FilterBox';
import List from '../List/List';

function App() {


  /*
  const deleteData = async () => {
    try {
      //Replace 2 with correct ID
      await axios.delete('http://localhost:8080/data/2')
      .then( data => data)
      .then(res =>  console.log(res.data));
      
    } catch (err) { console.log(err); }
  };*//*
  const addData = async () => {
    const dataToAdd =  {
      isFeatured: true,
      listingTitle: "Senior Frontend Developer",
      listedCompany: "Photosnap",
      listingLocation: "USA only",
      timeRegistered: "02/10/2021",
      listingType: "listing",
      role: "Front",
      level: "Junior",
      languages: "js",
      id:"Tamir"
    }
    try {
      await axios.post(`http://localhost:8080/data/`, dataToAdd  )
      .then( data => data)
      .then(res =>  console.log(res.data));
      
    } catch (err) { console.log(err); }
  };*/

  const [jobs, setJobs] = useState([]);

  //Access jobs with jobs.data
  const getAllData = async () => {
    try {
      await axios.get('http://localhost:8080/data')
        .then(data => data)
        .then(res => {
          setJobs(res.data);
        });
    } catch (err) { console.log(err); }
  };

  useEffect(() => {
    getAllData();
  }, []);

  const filterList = (arr) => {
    const newList = [];
    
    jobs.forEach(job => {
      console.log(job);

      if(arr.includes(job.role)){
        newList.push(job);
      }

      if(arr.includes(job.level)){
        newList.push(job);
      }

      job.languages.forEach(lang => {
        if(arr.includes(lang)){
          newList.push(job);
          console.log("gooddd")
        }
        return;
      });
  });
  setJobs(newList);
}

return (
  <div className="App">
    <header />
    <div className="container">
      <FilterBox filterList={filterList}></FilterBox>
      <List data={jobs}></List>
    </div>
  </div>
);
}

export default App;
