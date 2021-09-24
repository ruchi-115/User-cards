import React from 'react';
import "./App.css"

const Card = ({first_name, last_name, email, avatar }) => {
    return (
        <div className="Card">
                <div className="upper-container">
                <div className='layer'></div>
                    <div className="image-container">
                    <img src={avatar} alt="dp" height="100px" width="100px" />
                    </div>
                <div className="lower-container">
                <h3 className="name">{first_name} {last_name}</h3>
                <h4>{email}</h4>
                </div>
            </div>
        </div>
    )
}

export default Card;
