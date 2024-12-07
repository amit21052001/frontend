import React, { useState } from "react";
import "./ClaimPage.css";

const ClaimPage = () => {
  const [claimDetails, setClaimDetails] = useState({
    claimAmount: "",
    claimDate: "",
    claimType: "",
    description: "",
    policyId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClaimDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Claim submitted:", claimDetails);
    // Add logic to handle form submission
  };

  return (
    <div className="claim-page">
      <div className="claim-container">
        <h2>Submit a Claim</h2>
        <form onSubmit={handleSubmit} className="claim-form">
          <label>
            Claim Amount:
            <input
              type="number"
              name="claimAmount"
              value={claimDetails.claimAmount}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Claim Date:
            <input
              type="date"
              name="claimDate"
              value={claimDetails.claimDate}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Claim Type:
            <input
              type="text"
              name="claimType"
              value={claimDetails.claimType}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={claimDetails.description}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Policy ID:
            <input
              type="text"
              name="policyId"
              value={claimDetails.policyId}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Submit Claim</button>
        </form>
      </div>
    </div>
  );
};

export default ClaimPage;