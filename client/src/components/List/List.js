import ListItem from './ListItem'

const ListComponenet = (props) =>{
    return (
    <div>  
      {/* TODO init list items with job object (to creat it dymanic) */}
      {props.data.map(job => <div>{job.languages}</div>)}
      <ListItem/>
    </div>
    )

}

export default ListComponenet;