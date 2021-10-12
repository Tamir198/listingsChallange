import './ListItem.css';
import noImage from './noImagePath';
import account from "../../assets/account.svg";
import headerdesktop from "../../assets/bg-header-desktop.svg";
import headermobile from "../../assets/bg-header-mobile.svg";
import eyecamco from "../../assets/eyecam-co.svg";
import faceit from "../../assets/faceit.svg";
import insure from "../../assets/insure.svg";
import loopstudios from "../../assets/loop-studios.svg";
import manage from "../../assets/manage.svg";
import myhome from "../../assets/myhome.svg";
import photosnap from "../../assets/photosnap.svg";
import shortly from "../../assets/shortly.svg";
import theairfiltercompany from "../../assets/the-air-filter-company.svg";

const ListItem = (props) => {

  const getCompanyImage = () => {
    const companyName = props.jobData.listedCompany;
    let backgroundImg;

    switch (companyName.toLowerCase()) {
      case 'photosnap':
        backgroundImg = photosnap;
        break;
      case 'myhome':
        backgroundImg = myhome;
        break;
      case 'manage':
        backgroundImg = manage;
        break;
      case 'shortly':
        backgroundImg = shortly;
        break;
      case 'theairfiltercompany':
        backgroundImg = theairfiltercompany;
        break;
      case 'loopstudios':
        backgroundImg = loopstudios;
        break;
      case 'insure':
        backgroundImg = insure;
        break;
      case 'faceit':
        backgroundImg = faceit;
        break;
      case 'eyecamco':
        backgroundImg = eyecamco;
        break;
      case 'headermobile':
        backgroundImg = headermobile;
        break;
      case 'headerdesktop':
        backgroundImg = headerdesktop;
        break;
      case 'account':
        backgroundImg = account;
        break;
        default:
        backgroundImg = noImage;
    }

    return backgroundImg;
  }


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


  return (
    <div className={props.jobData.isFeatured
      ? 'list-item-container featured' :
     'list-item-container'}>

      <button className="delete-job hide" onClick={() => props.deleteItem(props.jobData)} id={props.jobData} >x</button>
      <img className="company-image" src={getCompanyImage()}
      />

      <div className="left-item">

        <div className="top-left-tags">

          <div className="listed-company">
            <h5>{props.jobData.listedCompany}</h5>
          </div>

          <div className="is-featured">
            <h5>{props.jobData.isFeatured ? "Featured" : null}</h5>
          </div>

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
          {[...props.jobData.languages].map(language => <h6>{language}</h6>)}
        </div>
      </div>
    </div>

  )

}

export default ListItem;