import React, { useState } from "react";
import "./AdminPage.css";
import axios from "axios";

const AdminPage = () => {
  const [claims, setClaims] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [policyDetails, setPolicyDetails] = useState({
    policyName: "",
    policyType: "",
    description: "",
    premiumAmount: 0,
    durationInMonths: 0,
    termsAndConditions: "",
    coverageAmount: 0,
    deductible: 0,
    eligibilityCriteria: "",
    renewalPolicy: "",
    cancellationPolicy: "",
    isActive: true,
    maxClaimAmount: 0,
    waitingPeriodInMonths: 0,
    policyHolderMinAge: 0,
    policyHolderMaxAge: 0,
    role: "admin",
  });

  const handleGetAllClaims = async () => {
    console.log("Fetching all claims...");
    const token = localStorage.getItem("authToken");
    try {
      const response = await axios.get("http://localhost:5002/api/v1/claims", {
        headers: {
          Authorization: `${token}`,
        },
      });
      setClaims(response.data.claims);
    } catch (error) {
      console.error("Error fetching claims:", error);
    }
  };

  const handleAddPolicy = async () => {
    console.log("Adding policy...");
    const token = localStorage.getItem("authToken");
    try {
      const response = await axios.post(
        "http://localhost:5001/api/v1/policies",
        {
          ...policyDetails,
          additionalBenefits: [
            "Annual health check-up",
            "Access to telemedicine"
          ],
          exclusions: [
            "Pre-existing conditions",
            "Cosmetic surgery",
            "Self-inflicted injuries"
          ],
          users: [],
          role: "admin",
        },
        {
          headers: {
            Authorization: `${token}`,
            'Content-Type': 'application/json'
          },
        }
      );
      console.log(response.data);
      alert("Policy added successfully!");
      setShowForm(false); // Close the form on successful submission
    } catch (error) {
      console.error("Error adding policy:", error);
      console.error("Error details:", error.response || error.message || error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPolicyDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="admin-page">
      <h1 style={{ color: "black" }}>Admin Dashboard</h1>
      <div className="admin-actions">
        <button onClick={handleGetAllClaims}>Get All Claims</button>
        <button onClick={() => setShowForm(true)}>Add Policy</button>
      </div>
      {claims.length > 0 && (
        <table className="claims-table">
          <thead>
            <tr>
              <th>Claim Amount</th>
              <th>Claim Date</th>
              <th>Claim Type</th>
              <th>Description</th>
              <th>Status</th>
              <th>Policy ID</th>
              <th>User ID</th>
            </tr>
          </thead>
          <tbody>
            {claims.map((claim) => (
              <tr key={claim._id}>
                <td>{claim.claimAmount}</td>
                <td>{new Date(claim.claimDate).toLocaleDateString()}</td>
                <td>{claim.claimType}</td>
                <td>{claim.description}</td>
                <td>{claim.status}</td>
                <td>{claim.policyId}</td>
                <td>{claim.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {showForm && (
        <div className="form-overlay">
          <div className="form-container">
            <h2>Add Policy</h2>
            <form onSubmit={(e) => { e.preventDefault(); handleAddPolicy(); }}>
              <label>
                Policy Name:
                <input type="text" name="policyName" value={policyDetails.policyName} onChange={handleChange} required />
              </label>
              <label>
                Policy Type:
                <input type="text" name="policyType" value={policyDetails.policyType} onChange={handleChange} required />
              </label>
              <label>
                Description:
                <textarea name="description" value={policyDetails.description} onChange={handleChange} required />
              </label>
              <label>
                Premium Amount:
                <input type="number" name="premiumAmount" value={policyDetails.premiumAmount} onChange={handleChange} required />
              </label>
              <label>
                Duration (Months):
                <input type="number" name="durationInMonths" value={policyDetails.durationInMonths} onChange={handleChange} required />
              </label>
              <label>
                Terms and Conditions:
                <textarea name="termsAndConditions" value={policyDetails.termsAndConditions} onChange={handleChange} required />
              </label>
              <label>
                Coverage Amount:
                <input type="number" name="coverageAmount" value={policyDetails.coverageAmount} onChange={handleChange} required />
              </label>
              <label>
                Deductible:
                <input type="number" name="deductible" value={policyDetails.deductible} onChange={handleChange} required />
              </label>
              <label>
                Eligibility Criteria:
                <textarea name="eligibilityCriteria" value={policyDetails.eligibilityCriteria} onChange={handleChange} required />
              </label>
              <label>
                Renewal Policy:
                <input type="text" name="renewalPolicy" value={policyDetails.renewalPolicy} onChange={handleChange} required />
              </label>
              <label>
                Cancellation Policy:
                <textarea name="cancellationPolicy" value={policyDetails.cancellationPolicy} onChange={handleChange} required />
              </label>
              <label>
                Is Active:
                <input type="checkbox" name="isActive" checked={policyDetails.isActive} onChange={handleChange} />
              </label>
              <label>
                Max Claim Amount:
                <input type="number" name="maxClaimAmount" value={policyDetails.maxClaimAmount} onChange={handleChange} required />
              </label>
              <label>
                Waiting Period (Months):
                <input type="number" name="waitingPeriodInMonths" value={policyDetails.waitingPeriodInMonths} onChange={handleChange} required />
              </label>
              <label>
                Policy Holder Min Age:
                <input type="number" name="policyHolderMinAge" value={policyDetails.policyHolderMinAge} onChange={handleChange} required />
              </label>
              <label>
                Policy Holder Max Age:
                <input type="number" name="policyHolderMaxAge" value={policyDetails.policyHolderMaxAge} onChange={handleChange} required />
              </label>
              <label>
                Additional Benefits:
                <textarea value="Annual health check-up, Access to telemedicine" readOnly />
              </label>
              <button type="submit">Submit</button>
              <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;