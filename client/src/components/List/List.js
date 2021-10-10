import ListItem from './ListItem'

const ListComponenet = (props) =>{
    return (
    <div>  
      {props.data.map(job => <ListItem deleteItem={props.deleteItem}key={job.id} jobData={job}>{job.languages}</ListItem>)}
    </div>
    )

}

export default ListComponenet;