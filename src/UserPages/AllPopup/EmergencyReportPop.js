import React, { useState } from "react";
import styled from "styled-components";
import ImageUpload from "./ImageUpload";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setComplainVisible, setCreatedEmergency, setDropdownVisible, setEmergencyVisible } from "../../Redux/appSlice";
import { Icon } from "@iconify/react/dist/iconify.js";

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
  input,
  select {
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

const EmergencyReport = () => {
  const [selectedAgencies, setSelectedAgencies] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const agencies = [
    { value: "Police_CP", label: "Police_CP", logo: "/images/police.png" },
    { value: "LASEPA", label: "LASEPA", logo: "/images/lasepa.png" },
    { value: "FIRS", label: "FIRS", logo: "/images/firs.png" },
    { value: "LAWMA", label: "LAWMA", logo: "/images/lawma.png" },
    { value: "ESEVR", label: "ESEVR", logo: "/images/esevr.png" },
  ];
  const { emergencyDropdown } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const handleEmergencyLodge = () => {
    dispatch(setEmergencyVisible());
  };

   const handleCreateEmergency = () => {
      dispatch(setEmergencyVisible());
      dispatch(setCreatedEmergency());
    };
  
  const handleCheckboxChange = (event, agency) => {
    if (event.target.checked) {
      setSelectedAgencies((prev) => [...prev, agency]);
    } else {
      setSelectedAgencies((prev) =>
        prev.filter((item) => item.value !== agency.value)
      );
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };
  return (
    <LodgeRidePopRap>
      <div className="dropdown-container">
        <div className="all-dropdown-div ">
          <div className="dropdown-header">
            <h4>Emergency Report</h4>
          </div>
          <div className="dropdown-div ">
            <div className="left-dropdown-div">
              <h5>Information</h5>
              <div className="left-inner-div">
                <div className="input-divs">
                  <label>
                    Report ID <br />
                    <input type="text" />
                  </label>
                  <label>
                    Tittle <br />
                    <input type="text" placeholder="" />
                  </label>
                </div>
                <div className="input-divs">
                  <label>
                    Reporter <br />
                    <input type="text" placeholder="" />
                  </label>
                  <label>
                    Phone Number <br />
                    <input type="number" placeholder="" />
                  </label>
                </div>
                <div className="input-divs">
                  <label>
                    Address <br />
                    <input
                      style={{ height: "75px", borderRadius: "12px" }}
                      type="text"
                      placeholder=""
                    />
                  </label>
                  <label>
                    Destination Address <br />
                    <input
                      style={{ height: "75px", borderRadius: "12px" }}
                      type="text"
                      placeholder=""
                    />
                  </label>
                </div>
              </div>
              <h5>Officials</h5>
              <div className="left-inner-div">
                <div className="input-divs">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    {/* Select Input */}
                    <div style={{ position: "relative" }}>
                      <div className="selectOfficials" onClick={toggleDropdown}>
                        {selectedAgencies.length === 0 ? (
                          <div className="selectOfficial">
                            <p>Select Agency</p>
                            <Icon
                              icon="ep:arrow-down"
                              width="17"
                              height="14"
                              style={{ color: "#66708580" }}
                            />
                          </div>
                        ) : (
                          selectedAgencies
                            .map((agency) => agency.label)
                            .join(", ")
                        )}
                      </div>

                      {/* Dropdown Menu */}
                      {dropdownOpen && (
                        <div className="selectDropdown">
                          {agencies.map((agency) => (
                            <label
                              key={agency.value}
                              className="selectDropdown-label"
                            >
                              <span className="checkmark">{agency.label}</span>
                              <input
                                style={{ width: "16px", height: "16px" }}
                                type="checkbox"
                                value={agency.value}
                                checked={selectedAgencies.some(
                                  (item) => item.value === agency.value
                                )}
                                onChange={(event) =>
                                  handleCheckboxChange(event, agency)
                                }
                              />{" "}
                            </label>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Logos of Selected Agencies */}
                    <div style={{ display: "flex" }}>
                      {selectedAgencies.map((agency) => (
                        <img
                          key={agency.value}
                          src={agency.logo}
                          alt={agency.label}
                          style={{
                            width: "24px",
                            height: "24px",
                            borderRadius: "50%",
                            marginRight: "-5px",
                          }}
                        />
                      ))}
                    </div>
                  </div>
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
                <Link onClick={handleEmergencyLodge} className="Cancel">
                  Cancel
                </Link>
                <Link onClick={handleCreateEmergency} className="Create">Lodge Complain</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LodgeRidePopRap>
  );
};
export default EmergencyReport;
