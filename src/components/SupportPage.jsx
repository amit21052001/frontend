import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SupportPage.css';

const TicketsPage = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = '12345';

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get("http://localhost:5003/api/v1/tickets/", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        console.log("Fetching all claims...");
        setTickets(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tickets:', error);
        setLoading(false);
      }
    };
    fetchTickets();
  }, [userId]);

  if (loading) {
    return <div className="loading">Loading tickets...</div>;
  }

  return (
    <div className="tickets-page">
      <h1>Your Tickets</h1>
      <div className="tickets-list">
        {tickets.length === 0 ? (
          <p>No tickets found.</p>
        ) : (
          tickets.map((ticket) => (
            <div key={ticket.id} className="ticket-card">
              <h3>{ticket.subject}</h3>
              <p>Status: <span className={`status ${ticket.status.toLowerCase()}`}>{ticket.status}</span></p>
              <p><strong>Category:</strong> {ticket.category}</p>
              <p><strong>Priority:</strong> {ticket.priority}</p>
              <p>{ticket.description.substring(0, 100)}...</p>
              <button className="view-btn">View Details</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TicketsPage;
