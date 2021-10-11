import './ListItem.css';
import Background from '../../assets/photosnap.svg';
const ListItem = (props) => {


  const DaysPassedSinceJobPosted = () => {
    let date = new Date;

    let date2 = props.jobData.timeRegistered;
    let today = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`

    today = new Date(today.split('/')[2], today.split('/')[1] - 1, today.split('/')[0]);
    date2 = new Date(date2.split('/')[2], date2.split('/')[1] - 1, date2.split('/')[0]);

    const timeDiff = Math.abs(date2.getTime() - today.getTime());
    const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24 * 60));
    return diffDays;
  }

  const imagePath = `../../assets/${props.jobData.listedCompany.toLowerCase()}.svg`;
  // console.log(imagePath)

  var sectionStyle = {
    backgroundImage: "url(" + { imagePath } + ")"
  };

  return (
    <div className="list-item-container">
        <button className="delete-job hide" onClick={() => props.deleteItem(props.jobData)} id={props.jobData} >x</button>
      {/* todo change the image according to the company */}
      <img className="company-image"
      // style={{backgroundImage: "url(" + imagePath + ")"}
      />
      
      <div className="left-item">

        <div className="top-left-tags">

          <div className="listed-company">
            <h5>{props.jobData.listedCompany}</h5>
          </div>

          <div className="is-featured">
            <h5>{props.jobData.isFeatured ? "Featured" : null}</h5>
          </div>

          {/* todo check is this is reeally new (7 days ago max) */}
          <div className="new-job-tag">
            <h5>{DaysPassedSinceJobPosted() > 7 ? `` : `New`}</h5>
          </div>

        </div>

        <div>
          <h4 className="job-title">{props.jobData.listingTitle}</h4>
        </div>
        <div className="bottom-tags">
          {/* todo calculate how long ago this was posted */}
          <div className="time-registered">{DaysPassedSinceJobPosted()} Days Ago</div>
          <div className="listing-type">{props.jobData.listingType}</div>
          <div className="listing-location">{props.jobData.listingLocation}</div>
        </div>
      </div>

      <div className="right-item">
        <div className="rolls-tags">
          <h6 className="role">{props.jobData.role}</h6>
          <h6 className="level">{props.jobData.level}</h6>
          {/* todo seperate different languages to different tags */}
          <h6 id="languages-tags">{props.jobData.languages}</h6>
        </div>
      </div>
    </div>

  )

}

export default ListItem;