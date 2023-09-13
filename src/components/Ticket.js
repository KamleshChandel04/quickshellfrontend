import React from "react";
import "./Ticket.css";

function Ticket({ ticket }) {
  const { id, title, tag, userId } = ticket;

  let imageSource;
  if (userId === "usr-1")
    imageSource = "https://randomuser.me/api/portraits/men/77.jpg";
  if (userId === "usr-2")
    imageSource = "https://randomuser.me/api/portraits/men/65.jpg";
  if (userId === "usr-3")
    imageSource = "https://randomuser.me/api/portraits/men/73.jpg";
  if (userId === "usr-4")
    imageSource = "https://randomuser.me/api/portraits/men/37.jpg";
  if (userId === "usr-5")
    imageSource = "https://randomuser.me/api/portraits/men/29.jpg";

  return (
    <div className="ticket-card">
      <div className="ticket-header">
        <p className="ticket-id">{id}</p>
        <div className="user-circle">
          {/* Circular user image (you can replace this with an actual image URL) */}
          <img src={imageSource} alt="User" />
        </div>
      </div>
      <p className="ticket-title">
        <strong>{title}</strong>
      </p>
      <div className="tags-container">
      <button className="dots">...</button>
      {tag && (
        
        <p className="ticket-tags"> 
          {tag.map((tag, index) => (index === 0 ? tag : `, ${tag}`))}
        </p>
      )}

      </div>
      
    </div>
  );
}

export default Ticket;