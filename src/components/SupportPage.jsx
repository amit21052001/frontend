// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaTrash } from 'react-icons/fa'; // Import trash icon
// import './SupportPage.css';

// const TicketsPage = () => {
//   const [tickets, setTickets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const userId = '12345';

//   useEffect(() => {
//     const fetchTickets = async () => {
//       try {
//         const token = localStorage.getItem("authToken");
//         const response = await axios.get("http://localhost:5003/api/v1/tickets/", {
//           headers: {
//             authorization: `Bearer ${token}`,
//           },
//         });
//         console.log("Fetching all claims...");
//         setTickets(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching tickets:', error);
//         setLoading(false);
//       }
//     };
//     fetchTickets();
//   }, [userId]);

//   const deleteTicket = async (ticketId) => {
//     try {
//       const token = localStorage.getItem("authToken");
//       await axios.delete(`http://localhost:5003/api/v1/tickets/${ticketId}`, {
//         headers: {
//           authorization: `Bearer ${token}`,
//         },
//       });
//       setTickets(tickets.filter((ticket) => ticket.id !== ticketId));
//       console.log(`Ticket ${ticketId} deleted successfully`);
//       const response = await axios.get("http://localhost:5003/api/v1/tickets/", {
//         headers: {
//           authorization: `Bearer ${token}`,
//         },
//       });
//       setTickets(response.data);
//     } catch (error) {
//       console.error('Error deleting ticket:', error);
//     }
//   };

//   if (loading) {
//     return <div className="loading">Loading tickets...</div>;
//   }

//   return (
//     <div className="tickets-page">
//       <h1>Your Tickets</h1>
//       <div className="tickets-list">
//         {tickets.length === 0 ? (
//           <p>No tickets found.</p>
//         ) : (
//           tickets.map((ticket) => (
//             <div key={ticket.id} className="ticket-card">
//               <div className="ticket-header">
//                 <h3>{ticket.subject}</h3>

//               </div>
//               <p>
//                 Status:{" "}
//                 <span className={`status ${ticket.status.toLowerCase()}`}>
//                   {ticket.status}
//                 </span>
//               </p>
//               <p>
//                 <strong>Category:</strong> {ticket.category}
//               </p>
//               <p>
//                 <strong>Priority:</strong> {ticket.priority}
//               </p>
//               <p>{ticket.description.substring(0, 100)}...</p>

//               {/* <button className="view-btn">View Details</button> */}
//               <div className="ticket-actions">
//                 <button className="view-details">View Detailed</button>
//               </div>
        
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default TicketsPage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa'; // Import trash icon
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

  const deleteTicket = async (ticketId) => {
    try {
      const token = localStorage.getItem("authToken");
      await axios.delete(`http://localhost:5003/api/v1/tickets/${ticketId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      setTickets(tickets.filter((ticket) => ticket.id !== ticketId));
      console.log(`Ticket ${ticketId} deleted successfully`);
    } catch (error) {
      console.error('Error deleting ticket:', error);
    }
  };

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
              <div className="ticket-header">
                <h3>{ticket.subject}</h3>
              </div>
              <p>
                Status:{" "}
                <span className={`status ${ticket.status.toLowerCase()}`}>
                  {ticket.status}
                </span>
              </p>
              <p>
                <strong>Category:</strong> {ticket.category}
              </p>
              <p>
                <strong>Priority:</strong> {ticket.priority}
              </p>
              <p>{ticket.description.substring(0, 100)}...</p>

              <div className="ticket-actions">
                <button className="view-details">View Details</button>
                {/* <button
                  className="delete-btn"
                  onClick={() => deleteTicket(ticket.id)}
                >
                  <FaTrash /> 
                </button> */}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TicketsPage;
