import { useState } from "react";
import showAdminUI from "../Login/showAdminUI";
import './ExampleItem.css'

const ExampleItem = (props) => {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;
  let newJob = {
    isFeatured: true,
    listingTitle: "",
    listedCompany: "",
    listingLocation: "",
    timeRegistered: `${dd}/${mm}/${yyyy}`,
    listingType: "",
    role: "",
    level: "",
    languages: "",
    id: new Date().getTime()
  }

  const addItemToList = () =>{
    props.addJob(newJob);
    props.updateData();
  }

  return (
    <div className="inputs-container hide">

      <input
        onInput={(e) => newJob.isFeatured = (e.target.value == true)}
        type="number"
        min="0"
        max="1"
        placeholder="Is featured (0 is false)">
      </input>

      <input
        onInput={(e) => newJob.listingTitle = (e.target.value)}
        placeholder="Job title (junior frontend...)">
      </input>

      <input
        onInput={(e) => newJob.listedCompany = (e.target.value)}
        placeholder="Company name">
      </input>

      <input
        onInput={(e) => newJob.listingLocation = (e.target.value)}
        placeholder="Job location">
      </input>


      <input
        onInput={(e) => newJob.listingType = (e.target.value)}
        placeholder="Listing type (full time, part time...)">
      </input>

      <input
        onInput={(e) => newJob.role = (e.target.value)}
        placeholder="role">
      </input>

     <input
        onInput={(e) => newJob.level = (e.target.value)}
        placeholder="Level">
      </input>

      <input
         onInput={(e) => newJob.languages = (e.target.value)}
        placeholder="Languages">
      </input>


    <button onClick={()=>addItemToList()}>Add Item</button>
    </div>
  )
}


export default ExampleItem