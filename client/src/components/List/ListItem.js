import './list.css';

const ListItem = (props) => {
    return (
        <div className="list-item-container">
               <div className="company-image">
                    <p>img</p>
                </div>
            <div className="left-item">
            
                <div className="top-tags">

                    <div className="listed-company">
                        <h5>Manage</h5>
                    </div>

                    <div className="new-job-tag">
                        <h5>New</h5>
                    </div>

                    <div className="is-featured">
                        <h5>featured</h5>
                    </div>
                </div>

                <div>
                    <h4 className="job-title">Senior Full stack developer</h4>
                </div>

                <div class="bottom-tags">
                    <div className="time-registered">1 d ago</div>
                    <div className="listing-type"> Full Time</div>
                    <div className="listing-location">USA only</div>
                </div>
            </div>


            <div class="right-item">
                <div className="rolls-tags">
                    <h6 className="role">Fullstack</h6>
                    <h6 className="level">midWeight</h6>
                    <h6 className="languages">HTML css js</h6>
                </div>
            </div>
        </div>

    )

}

export default ListItem;