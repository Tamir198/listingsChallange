import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import FilterBox from '../Filter/FilterBox';
import ExampleItem from '../ExampleItem/ExampleItem';
import List from '../List/List';
import AdminLogin from '../Login/AdminLogin';

function App() {


  const addJob = async (dataToAdd) => {
    console.log("Add job called");
    try {
      await axios.post(`http://localhost:8080/data/`, dataToAdd)
        .then(data => data)
        .then(res => {
          jobs.push(res.data);
          //TODO - show the new element without reload the page
          // window.location.reload();
        });

    } catch (err) { console.log(err); }
  };

  const [jobs, setJobs] = useState([]);

  //Access jobs with jobs.data
  const getAllData = async (param) => {
    if (param) {
      console.log(param);
    } else
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
    const newJobsList = [];
    const listOfWordsFronInput = arr.match(/(?:(?<=\bstack)\w+|\b(?!stack)\w+)(?=[, ]|$)/g);

    listOfWordsFronInput.forEach(word => {

      jobs.forEach(job => {

        if (arr.includes(job.role)) {
          newJobsList.push(job);
        }

        if (arr.includes(job.level)) {
          newJobsList.push(job);
        }

        job.languages.forEach(lang => {
          if (arr.includes(lang)) {
            newJobsList.push(job);
            console.log("gooddd")
          }
          return;
        });
      });

    });
    setJobs(newJobsList);
  }

  const deleteItem = async (data) => {
    console.log("delete");
    console.log(data);
    try {
      //Replace 2 with correct ID
      await axios.delete(`http://localhost:8080/data/${data.id}`)
        .then(data => data)
        .then(res => console.log(res.data));

    } catch (err) { console.log(err); }

    jobs.splice(jobs.indexOf(data), 1);
    setJobs(jobs);
  }

  return (
    <div className="App">
      <header/>
      <div className="container">
        <FilterBox filterList={filterList}></FilterBox>
        <AdminLogin/>
        <ExampleItem updateData={getAllData} addJob={addJob}></ExampleItem>
        <List deleteItem={deleteItem} data={jobs}></List>
      </div>
    </div>
  );
}

export default App;
