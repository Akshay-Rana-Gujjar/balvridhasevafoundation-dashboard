import React, { useEffect, useState } from 'react';
import './styles.css';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';

const db = getFirestore();

export default function Home() {
  const [campaigncampaign, setCampaigncampaign] = useState([]);
	const navigation = useNavigate();

  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, 'campaign'));
      const tempCampaign = [];
      querySnapshot.forEach((doc) => {
        tempCampaign.push({ ...doc.data(), id: doc.id });
      });
      setCampaigncampaign(tempCampaign);
    })();
  }, []);

	function handleEditClick (data){
		localStorage.setItem('edit-item', JSON.stringify(data));
		navigation(`/campaign/${data.id}`)
	}

  return (
    <div className="container">
      <h2>
        Manage Campaign
        <Link
          to="/campaign"
          className="btn h1 bg-primary text-white rounded-circle shadow"
        >
          +
        </Link>
      </h2>
      {campaigncampaign.map((campaign) => (
        <div key={campaign.id}>
          <div className="d-block d-sm-flex flex-wrap justify-content-evenly w-100 position-relative px-5 campaign-container">
            <div className="card shadow mb-4">
              <div className="card-body p-0">
                <img
                  className="mb-3as img-fluid campaign-img"
                  src={campaign.img}
                  alt="#"
                />
                <div className="campaign-heading fw-bold text-uppercase text-center mb-2">
                  {campaign?.name}
                </div>
                <div className="p-2 w-100 d-flex flex-column align-items-center">
                  <div className="d-flex justify-content-between w-100 mb-2 small">
                    <div className="target">Target: {campaign?.target}</div>
                    <div className="achieve">
                      Achieved: {campaign?.achieved}
                    </div>
                  </div>
                  <div className="progress rounded-pill w-100 mb-1">
                    <div
                      className="progress-bar rounded-pill"
                      role="progressbar"
                      style={{
                        width:
                          (campaign?.achieved / campaign?.target) * 100 + '%',
                      }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <div className="goel-done text-center mb-2">
                    {(campaign?.achieved / campaign?.target) * 100}%
                  </div>
                  <div className="help-text mb-2">
                    help us to achieve this goel
                  </div>
                  <div className="campaign-cta">
                    <a
                      className="btn btn-campaign-cta btn-gradient text-white rounded-pill px-5"
                      href={campaign?.donateUrl}
                    >
                      Donate Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="card-footer text-center">
                <button className="btn btn-primary1 btn-outline-primary" onClick={()=>handleEditClick(campaign)}>
                  Edit this Campaign
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
