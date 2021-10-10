import { useEffect, useState } from 'react';

import ListItem from './ListItem'

const ListComponenet = (props) => {
 
    const [jobList, setJobList] = useState(props.data);

    useEffect(() => {
      setJobList(props.data)
      console.log(jobList)
    }, []);

  
  return (
    <div>
      {
        props.data.map(
          job => <ListItem
            deleteItem={props.deleteItem}
            key={job.id}
            jobData={job}>{job.languages}
          </ListItem>)
      }
    </div>
  )

}

export default ListComponenet;