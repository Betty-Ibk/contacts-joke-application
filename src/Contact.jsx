
function Contact({ img, name, phone, email, onDelete }) {
    return (
      <div className="contact-card">
        <img src={img} alt={name} />
        <h3>{name}</h3>
        <div className="info-group">
          {/* <img src="C:\Users\dell\Desktop\my contacts\my-contact-card\src\images\call_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png" /> */}
          <p>{phone}</p>
        </div>
        <div className="info-group">
          {/* <img src="C:\Users\dell\Desktop\my contacts\my-contact-card\src\images\mail_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.png" /> */}
          <p>{email}</p>
        </div>
        <button onClick={onDelete}>Delete</button>
      </div>
    );
  }
  
  export default Contact;