import React from "react";
import styled from "styled-components";
import ImageUpload from "./ImageUpload";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCreatedRide, setDropdownVisible } from "../../Redux/appSlice";

const LodgeRidePopRap = styled.div`
  label {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  h5 {
    color: #112240;
    font-size: 14px;
    font-weight: 500;
  }
  h4 {
    color: #112240;
    font-size: 16px;
    font-weight: 600;
  }
  input {
    width: 254px;
    height: 40px;
    border-radius: 100px;
    border: 1px solid #1122401f;
    padding: 10px;
  }
  .checkbox {
    width: 16px !important;
    height: 16px !important;
    border-radius: 1px !important;
  }
`;

const LodgeRidePopup = () => {
  const { dropdowVisible,  createdRide } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const handleVisisble = () => {
    dispatch(setDropdownVisible());
  };

  const handleCreateRide = () => {
    dispatch(setDropdownVisible());
    dispatch(setCreatedRide());
  };

 
  return (
    <LodgeRidePopRap>
      <div className="dropdown-container">
        <div className="all-dropdown-div ">
          <div className="dropdown-header">
            <h4>Lodge Ride</h4>
          </div>
          <div className="dropdown-div ">
            <div className="left-dropdown-div">
              <h5>Vehicle information</h5>
              <div className="left-inner-div">
                <div className="input-divs">
                  <label>
                    Ride ID <br />
                    <input type="text" />
                  </label>
                  <label>
                    Vehicle Number <br />
                    <input type="number" placeholder="Enter vehicle number" />
                  </label>
                </div>
                <div className="input-divs">
                  <label>
                    Driver Name <br />
                    <input type="text" placeholder="Enter driver name" />
                  </label>
                  <label>
                    Vehicle Name <br />
                    <input type="text" placeholder="Enter vehicle name" />
                  </label>
                </div>
                <div className="input-divs">
                  <label>
                    Address <br />
                    <input
                      style={{ height: "75px", borderRadius: "12px" }}
                      type="text"
                      placeholder="Enter your current address"
                    />
                  </label>
                  <label>
                    Destination Address <br />
                    <input
                      style={{ height: "75px", borderRadius: "12px" }}
                      type="text"
                      placeholder="Enter your destination address"
                    />
                  </label>
                </div>
              </div>
              <h5>Next of KIN information</h5>
              <div className="left-inner-div">
                <div className="input-divs">
                  <label>
                    Full Name
                    <br />
                    <input type="text" placeholder="Enter name" />
                  </label>
                  <label>
                    Phone Number <br />
                    <input type="number" placeholder="Enter phone number" />
                  </label>
                </div>
                <div className="input-divs">
                  <label>
                    Address <br />
                    <input
                      style={{ height: "75px", borderRadius: "12px" }}
                      type="text"
                      placeholder="Enter your current address"
                    />
                  </label>
                  <label className="info">
                    <input className="checkbox" type="checkbox" /> Safe info
                  </label>
                </div>
              </div>
            </div>
            <div className="right-dropdown-div">
              <h5>Images</h5>

              <div className="right-inner-div">
                <div className="inner-right-div">
                  <label>Upload vehicle image (optional)</label>
                  <ImageUpload />
                </div>
              </div>
              <div className="all-link">
                <Link onClick={handleVisisble} className="Cancel">
                  Cancel
                </Link>
                <Link onClick={handleCreateRide} className="Create">Create Ride</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </LodgeRidePopRap>
  );
};
export default LodgeRidePopup;
