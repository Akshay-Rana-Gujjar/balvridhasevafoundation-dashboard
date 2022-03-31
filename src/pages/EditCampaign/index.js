import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function EditCampaign() {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(JSON.parse(localStorage.getItem('edit-item') || "{}"));

	console.log(campaign);
  
	function handleSave(){}

  return (
    <div className="container d-flex justify-content-evenly mt-5">
      <div>
        <div className="mb-3">
          <label for="name-input" className="form-label">
            Campaign Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name-input"
            placeholder="Gau Seva"
						name="name"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">
            Target Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="1000000"
						name="target"
          />
        </div>
        <div className="mb-3">
          <label for="Achieved-Amount" className="form-label">
            Achieved Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="Achieved-Amount"
            placeholder="1000"
						name="achieved"
          />
        </div>
        <div className="mb-3">
          <label for="Donate-Button-Url" className="form-label">
            Donate Button Url
          </label>
          <input
            type="text"
            className="form-control"
            id="Donate-Button-Url"
            placeholder="https://google.com"
						name="donateUrl"
          />
        </div>
        <div className="mb-3">
          <label for="Choose-Image-For-Campaign" className="form-label">
            Choose Image For Campaign
          </label>
          <input
            type="file"
            className="form-control"
            id="Choose-Image-For-Campaign"
            accept="image/png, image/jpeg"
          />
        </div>
				<button className="btn btn-primary btn-block w-100" onClick={handleSave}>Save</button>
      </div>
      <div>
        <h4>Preview</h4>
				<div className="text-center">
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
              {/* <div className="card-footer text-center">
                <button className="btn btn-primary1 btn-outline-primary" onClick={()=>handleEditClick(campaign)}>
                  Edit this Campaign
                </button>
              </div> */}
            </div>
          </div>
        </div>
				</div>
      </div>
    </div>
  );
}
