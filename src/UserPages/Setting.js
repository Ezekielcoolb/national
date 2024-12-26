import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SettingRap = styled.div`
  width: 100%;
  padding: 30px;
  font-family: "Roboto";
  .link-container {
    display: flex;
    justify-content: flex-start;
    overflow-x: auto;
  }

  .link {
    padding: 20px 20px;
    text-decoration: none;
    color: #667085;
    white-space: nowrap;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    border-bottom: 2px solid transparent; /* Default underline */
    transition: all 0.3s ease;
  }

  .link.active {
    font-weight: 600;
    font-size: 14px;
    border-bottom: 2px solid black; /* Black underline for the active link */
    color: #112240;
  }
  .profile {
    background: #ffffff;
    display: flex;
  }
  .link:hover {
    color: #555; /* Optional hover effect */
  }
  .profile input {
    background: #f7f7f7;
    height: 45px;
    width: 380px;
    border-radius: 100px;
    color: #112240;
    font-size: 14px;
    font-weight: 400;
    padding: 15px;
    border: 1px solid #1122401f;
  }
  label {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .save-edit-btn {
    background: #56bf2a;
    font-size: 14px;
    font-weight: 400;
    color: #ffffff;
    width: 122px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
  }
  .profile-left {
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-right: 1px solid #0812001f;
    padding: 20px;
    width: 50%;
  }
  .right-inner-info p {
    display: flex;
    align-items: center;
    gap: 70px;
    justify-content: space-between;
  }
  .right-inner-info {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .profile-right {
    display: flex;
    flex-direction: column;
    gap: 40px;
    width: 50%;
    align-items: center;
  }
  .photo-upload {
    font-size: 14px;
    font-weight: 400;
    color: #667085;
    width: 109px !important;
    height: 30px !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .security-header {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  .security input {
    height: 45px;
    width: 380px;
    border-radius: 100px;
    color: #112240;
    font-size: 14px;
    font-weight: 400;
    padding: 15px;
    border: 1px solid #1122401f;
  }
  .secure-cancel,
  .secure-update {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 40px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 100px;
  }
  .secure-cancel {
    background: #eaebee;
    color: #112240;
  }
  .secure-update {
    color: #ffffff;
    background: #56bf2a;
  }
  .security {
    background: #ffffff;

    padding: 30px;
  }
  .security-input {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .security-btn {
    display: flex;
    gap: 10px;
  }
  .unfollow {
    background: #ffffff;
    text-decoration: none;
    border: 1px solid #1122401F;
    width: 85px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #667085;
    font-size: 12px;
    border-radius: 100px;
    font-weight: 500;
  }
  .foloow-info {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .foloow-info p {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .following-divs {
    background: #ffffff;
    display: flex;
    padding: 30px;
    flex-direction: column;
    gap: 30px;
  }
  .all-inner-follow {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .unfollow-folow {
    display: flex;
    align-items: center;
    gap: 100px;
  }
  .foloow-info span {
    font-size: 15px;
    font-weight: 500;
  }
`;

const Settings = () => {
  const [profile, setProfile] = useState({
    fullname: "Feyisayo Bukky",
    email: "example@yahoo.com",
    phone: "070660911112",
    address: "74 Shitta Street Allen Avenue, Ikeja, Lagos",
  });
  const [isEditable, setIsEditable] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };
  // Toggle edit/save mode
  const toggleEditMode = () => {
    if (isEditable) {
      // Save the changes
      console.log("Saved profile:", profile);
    }
    setIsEditable(!isEditable);
  };
  const [activeLink, setActiveLink] = useState("profile");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  return (
    <SettingRap>
      <div className="history-header">
        <div className="link-container">
          <Link
            className={`link ${activeLink === "profile" ? "active" : ""}`}
            onClick={() => handleLinkClick("profile")}
          >
            Profile
          </Link>
          <Link
            className={`link ${activeLink === "security" ? "active" : ""}`}
            onClick={() => handleLinkClick("security")}
          >
            Security
          </Link>
          <Link
            className={`link ${activeLink === "following" ? "active" : ""}`}
            onClick={() => handleLinkClick("following")}
          >
            Following
          </Link>
        </div>
      </div>
      {activeLink === "profile" && (
        <div className="profile">
          <div className="profile-left">
            <label>
              Fullname <br />
              <input type="text" value={profile.fullname} readOnly />
            </label>
            <label>
              Email Address <br />
              <input type="email" value={profile.email} readOnly />
            </label>
            <lavel>
              Phone Number <br />
              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                readOnly={!isEditable}
                style={{
                  backgroundColor: isEditable ? "#fff" : "#f0f0f0",
                }}
              />
            </lavel>
            <label>
              Address <br />
              <input
                type="text"
                name="address"
                value={profile.address}
                onChange={handleChange}
                readOnly={!isEditable}
                style={{
                  borderRadius: "15px",
                  height: "122px",
                  backgroundColor: isEditable ? "#fff" : "#f0f0f0",
                }}
              />
            </label>
            {!isEditable ? (
              <Link className="save-edit-btn" onClick={toggleEditMode}>
                Edit Profile
              </Link>
            ) : (
              <Link className="save-edit-btn" onClick={toggleEditMode}>
                Save Profile
              </Link>
            )}
          </div>
          <div className="profile-right">
            <img src="/images/ride-pic.png" alt="" />
            <input
              className="photo-upload"
              type="file"
              placeholder="upload photo"
            />
            <div className="right-inner-info">
              <p>
                Phone Number
                <span>07066091112</span>
              </p>
              <p>
                Email Address
                <span>example@yahoo.com</span>
              </p>
              <p>
                Address
                <span
                  style={{
                    maxWidth: "116px",
                  }}
                >
                  74 Shitta Street Allen Avenu Ikeja Lagos
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
      {activeLink == "security" && (
        <div className="security">
          <div>
            <div className="security-header">
              <h4>Change Password</h4>
              <p>Secure your account with your preferred password.</p>
            </div>
            <div className="security-input">
              <label>
                Current Password
                <input type="text" placeholder="Enter current password" />
              </label>
              <label>
                New Password
                <input type="text" placeholder="Enter New Password" />
              </label>
              <label>
                Confirm Password
                <input type="text" placeholder="Confirm New Password" />
              </label>
              <div className="security-btn">
                <Link className="secure-cancel">Cancel</Link>
                <Link className="secure-update">Update</Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeLink === "following" && (
        <div className="following-divs">
          <div className="security-header">
            <h4>Handle your follow</h4>
            <p>You can only tag handles you follow when lodging an issue</p>
          </div>
          <div className="all-inner-follow">
            <div className="unfollow-folow">
              <div className="foloow-info">
                <img src="/images/folow_img.png" alt="" />
                <p>
                  <span>Lagos PRO</span>
                  press@police.com
                </p>
              </div>
              <Link className="unfollow">Unfollow</Link>
            </div>
            <div className="unfollow-folow">
              <div className="foloow-info">
                <img src="/images/firs.png" alt="" />
                <p>
                  <span>FIRS</span>
                  press@police.com
                </p>
              </div>
              <Link className="unfollow">Unfollow</Link>
            </div>
            <div className="unfollow-folow">
              <div className="foloow-info">
                <img src="/images/esevr.png" alt="" />
                <p>
                  <span>LASTMA</span>
                  press@police.com
                </p>
              </div>
              <Link className="unfollow">Unfollow</Link>
            </div>
            <div className="unfollow-folow">
              <div className="foloow-info">
                <img src="/images/lasepa.png" alt="" />
                <p>
                  <span>LASEMA (LRU)</span>
                  press@police.com
                </p>
              </div>
              <Link className="unfollow">Unfollow</Link>
            </div>
            <div className="unfollow-folow">
              <div className="foloow-info">
                <img src="/images/lawma.png" alt="" />
                <p>
                  <span>LAWMA</span>
                  press@police.com
                </p>
              </div>
              <Link className="unfollow">Unfollow</Link>
            </div>
          </div>
        </div>
      )}
    </SettingRap>
  );
};

export default Settings;
