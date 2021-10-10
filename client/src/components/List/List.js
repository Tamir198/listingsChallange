import { useEffect, useState } from 'react';

import ListItem from './ListItem'

const ListComponenet = (props) => {
 
    const [jobList, setJobList] = useState(props.data);

    useEffect(() => {
      setJobList(props.data)
      console.log(jobList)
    }, []);

    const removeItemFromList = (item) =>{
      setJobList(jobList.splice(jobList.indexOf(item),1));
      props.deleteItem(item)
    }

  return (
    <div>
      {
        props.data.map(
          job => <ListItem
            deleteItem={removeItemFromList}
            key={job.id}
            jobData={job}>{job.languages}</ListItem>)
      }
    </div>
  )

}

export default ListComponenet;