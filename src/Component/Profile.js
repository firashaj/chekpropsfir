import React from "react";
import './Profile.css'


const Profile = ({ fullName, bio, profession, image, handleName }) => {
    return (
        <div>
            <div><span className="profile">FullName:{fullName}</span></div>
            <div><span>Bio:{bio}</span></div>
            <div><span>Profession:{profession}</span></div>
            <img className="img-responsive" src={image} alt="myImage"></img>
            <div><button onClick={() => handleName(fullName)}>clik </button></div>

        </div>
    );
};

export default Profile;
