import React from "react";
import "./AdminPage.css";

const AdminPage = () => {
  const handleGetAllClaims = () => {
    console.log("Fetching all claims...");
    // Add logic to fetch all claims
  };

  const handleDeleteClaim = (claimId) => {
    console.log(`Deleting claim with ID: ${claimId}`);
    // Add logic to delete a claim
  };

  const handleAddPolicy = () => {
    console.log("Navigating to add policy page...");
    // Add logic to navigate to add policy page
  };

  return (
    <div className="admin-page">
      <h1 style={{ color: "black" }}>Admin Dashboard</h1>
      <div className="admin-actions">
        <button onClick={handleGetAllClaims}>Get All Claims</button>
        <button onClick={() => handleDeleteClaim(1)}>Delete Claim</button>
        <button onClick={handleAddPolicy}>Add Policy</button>
      </div>
    </div>
  );
};

export default AdminPage;