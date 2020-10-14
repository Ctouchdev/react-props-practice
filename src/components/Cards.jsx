import React from "react";

function CardTemplate(props) {
    return (
      <div>
        <h1 className="heading">My Contacts</h1>
        <div className="card">
          <div className="top">
            <h2 className="name">{props.name}</h2>
            <img className="img circle-img"
              src={props.photo}
              alt="avatar_img"
            />
          </div>
          <div className="bottom">
            <p className="info">{props.phone}</p>
            <p className="info">{props.email}</p>
          </div>
        </div>
      </div>
    );
  }

  export default CardTemplate;