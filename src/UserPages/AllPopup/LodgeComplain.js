import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImageUpload from "./ImageUpload";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setComplainVisible, setCreatedComplain, setDropdownVisible } from "../../Redux/appSlice";
import { Icon } from "@iconify/react/dist/iconify.js";
import { fetctGeneralAllAgency } from "../../Redux/slices/homeSlice";
import { createComplain, resetComplainState } from "../../Redux/slices/secondUserSlice";
import { ClipLoader } from "react-spinners";

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
  select, textarea {
    width: 254px;
    height: 40px;
    border-radius: 100px;
    border: 1px solid #1122401f;
    padding: 10px;
  }
  textarea {
    height: 70px;
  }
  .checkbox {
    width: 16px !important;
    height: 16px !important;
    border-radius: 1px !important;
  }
  .ride-map {
    height: 263px !important;
  }
  .car-model {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .car-div p {
    font-size: 12px;
  }
  .car-div {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .car-address div {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  .car-address {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .ride-info {
    border-top: 1px solid #1122401f;
    padding: 15px 0px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .ride-info p {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .ride-info span {
    color: #112240;
  }
  .edit-btn,
  .flag-btn,
  .ride-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    height: 40px;
    width: 154px;
  }
  .edit-btn {
    color: #112240;
    background: #eaebee;
  }
  form label {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 16px;
    font-weight: 500px;
    margin-top: 10px;
  }
  .successCreationAgency {
    background: #ffffff;
    border-radius: 12px;
    padding: 20px;
  }
  .dropdown-menu {
    padding: 20px;
    background: #ffffff;
    border-radius: 12px;
    width: 390px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2px 6px rgba(17, 34, 64, 0.15);
  }
  textarea {
    width: 390px;
    border: 1px solid #1122401f;
    height: 120px;
    font-weight: 500;
    color: #112240;
    font-size: 16px;
    border-radius: 10px;
    padding: 0px 10px;
    margin-top: 20px;
  }
  .btns {
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .select-agency {
    background: transparent;
    border: 1px solid #1122401f;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    width: 390px;
    padding: 0px 10px;
    color: #112240;
  }
  .flag-btn {
    color: #ffffff;
    background: #e72121;
  }
  .ride-btn {
    color: #ffffff;

    background: #56bf2a;
  }
  .ride-button-div {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    margin-top: 20px;
  }
  .left-ride-div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .status-ride {
    background: #ffeedd;
    width: 77px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ff8c1a;
    font-size: 12px;
    border-radius: 100px;
    font-weight: 500;
  }
  .right-header {
    border-bottom: 1px solid #1122401f;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .right-inne-div {
    display: flex;
    flex-direction: column;
    gap: 40px;

    align-items: center;
  }
  .move-to-end {
    display: flex;
    gap: 150px;
    flex-direction: column;
    justify-content: space-between;
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
  .images-car {
    display: flex;
    gap: 10px;
    padding: 15px;
  }
  .right-ride-div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 35%;

    border-left: 1px solid #1122401f;
  }
  .left-ride-div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 65%;

    padding: 20px;
    padding-bottom: 80px;
  }
  .all-rides-details {
    border: 1px solid #1122401f;
    border-radius: 16px;
    background: #ffffff;
    display: flex;
  }
  .right-head {
    padding: 0px 20px;
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #1122401f;
  }
  .send-message {
    border-radius: 100px;
    width: 126px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #56bf2a;
    color: #56bf2a;
    font-size: 12px;
    font-weight: 500;
  }
  .ride-detail-header {
    display: flex;
    justify-content: space-between;
    padding: 20px 0px;
  }
  .back-arrow-left {
    width: 30px;
    height: 30px;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #11224014;
  }
  .icon-header {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .cancel-flag {
    width: 184px !important;
    height: 55px !important;
  }
  .flag-continue,
  .cancel-continue {
    width: 336px;
    height: 50px;
    border-radius: 100px;
    background: #f8253a;
    color: #ffffff;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .cancel-continue {
    background: #6670851f !important;
    color: #112240 !important;
  }
  .Create {
    font-weight: 500 !important;
    width: fit-content !important;
  }
`;

const LodgeComplain = () => {
  const [selectedAgencies, setSelectedAgencies] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
   const [dropdownOpenNew, setDropdownOpenNew] = useState(false);
  
    const toggleDropdownNew = () => setDropdownOpenNew(!dropdownOpenNew);
  const dispatch = useDispatch()
    const { agencyList, loading } = useSelector((state) => state.home || []);
        const { complainloading, complainsuccess} = useSelector((state) => state.otherUser);

  const agencies = [
    { value: "Police_CP", label: "Police_CP", logo: "/images/police.png" },
    { value: "LASEPA", label: "LASEPA", logo: "/images/lasepa.png" },
    { value: "FIRS", label: "FIRS", logo: "/images/firs.png" },
    { value: "LAWMA", label: "LAWMA", logo: "/images/lawma.png" },
    { value: "ESEVR", label: "ESEVR", logo: "/images/esevr.png" },
  ];
  const { complainDropdown, createdComplain } = useSelector((state) => state.app);
 const [formData, setFormData] = useState({
    role: "",
    type: "",
    name: "",
    state: "",
    city: "",
    description: "",
    agencies: [], // will be array or string "all"
        complain_title: "",

        ride_id: "",

  });
  console.log(formData);
  

const isValid =
  formData.role.trim() !== "" &&
  formData.type.trim() !== "" &&
  formData.complain_title.trim() !== "" &&
  formData.name.trim() !== "" &&
  formData.state.trim() !== "" &&
  formData.city.trim() !== "" &&
    formData.agencies.length > 0  &&
  formData.description.trim() !== "" ;

 useEffect(() => {
    dispatch(fetctGeneralAllAgency());
  }, [dispatch]);


  const handleComplainLodge = () => {
    dispatch(setComplainVisible());
  };


  const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
          dispatch(createComplain(formData));
        }
      };


  const handleCheckboxChangeNew = (e) => {
    const { value, checked } = e.target;

    if (value === "all") {
      if (checked) {
        // If 'all' selected, disable others by setting formData.agencies to "all"
        setFormData((prev) => ({ ...prev, agencies: "all" }));
      } else {
        // 'all' unchecked, reset agencies to empty array
        setFormData((prev) => ({ ...prev, agencies: [] }));
      }
    } else {
      if (formData.agencies === "all") {
        // Ignore other changes if 'all' is selected
        return;
      }

      // Convert value to number here
      const numValue = Number(value);

      let newSelected = Array.isArray(formData.agencies)
        ? [...formData.agencies]
        : [];

      if (checked) {
        // Add number to array if not already present
        if (!newSelected.includes(numValue)) {
          newSelected.push(numValue);
        }
      } else {
        // Remove number from array
        newSelected = newSelected.filter((id) => id !== numValue);
      }

      setFormData((prev) => ({ ...prev, agencies: newSelected }));
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
            <h4>Lodge Complain</h4>
          </div>
          <div className="dropdown-div ">
            <div className="left-dropdown-div">
              <h5>Information</h5>
              <div className="left-inner-div">
                <div className="input-divs">
                  <label>
                    Role <br />
                    <select
                          value={formData.role}
                          onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                        >
                          <option value="">Select role</option>
                          <option value="agency">Agency</option>
                          <option value="place">Place</option>
                           <option value="company">Company</option>
                        </select>
                  </label>
                   <label>
                    Select Type of Complain <br />
                    <select
                          value={formData.type}
                          onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
                        >
                          <option value="">Select type</option>
                          <option value="complain">Complain</option>
                          <option value="emmergency">Emmergency</option>
                           <option value="crime">Crime</option>
                        </select>
                  </label>
                </div>
                     <div className="input-divs">
                 <label>
                    Name <br />
                    <input 
                          value={formData.name}
                          onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })}
                    type="text" placeholder="Place or company to complain about" />
                  </label>
                  <label>
                    Complain <br />
                    <input 
                          value={formData.complain_title}
                          onChange={(e) =>
                  setFormData({ ...formData, complain_title: e.target.value })}
                    type="text" placeholder="" />
                  </label>
                </div>
                
                <div className="input-divs">
                  <label>
                    State <br />
                    <input
                            value={formData.state}
                          onChange={(e) =>
                  setFormData({ ...formData, state: e.target.value })}
                      type="text"
                      placeholder=""
                    />
                  </label>
                  <label>
                    City  <br />
                    <input
                            value={formData.city}
                          onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })}
                      type="text"
                      placeholder=""
                    />
                  </label>
                </div>
                <div className="input-divs">
                  <label>
                    Description <br />
                    <textarea 
                          value={formData.description}
                          onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })}
                    type="text" placeholder="" />
                  </label>
                 
                </div>
              </div>
             
            </div>
            <div className="right-dropdown-div">
               <h5>Officials</h5>
              <div className="left-inner-div">
                <div className="input-divs">
                  <div
                    style={{
                    
                    }}
                  >
                      <button
                  className="select-agency"
                  type="button"
                  onClick={toggleDropdownNew}
                >
                  Select Agencies
                </button>

                {dropdownOpenNew && (
                  <div className="dropdown-menu">
                    <label>
                      <input
                        style={{
                          width: "14px",
                          height: "14px",
                        }}
                        type="checkbox"
                        value="all"
                        checked={formData.agencies === "all"}
                        onChange={handleCheckboxChangeNew}
                      />{" "}
                      All
                    </label>
                    <hr />
                    {agencyList?.data?.map((agency) => (
                      <label key={agency.id}>
                        <input
                          style={{
                            width: "14px",
                            height: "14px",
                          }}
                          type="checkbox"
                          value={agency.id.toString()}
                          disabled={formData.agencies === "all"} // disable if all is selected
                          checked={
                            formData.agencies === "all"
                              ? false
                              : formData.agencies.includes(agency.id)
                          }
                          onChange={handleCheckboxChangeNew}
                        />{" "}
                        {agency.name}
                      </label> 
                    ))}
                  </div>
                )}
                  </div>
                </div>
              </div>
              <div className="all-link">
                <Link onClick={handleComplainLodge} className="Cancel">
                  Cancel
                </Link>
                <button style={{
                    background: isValid ? "#56BF2A" : "#bdddb0"
                }} onClick={handleSubmit} className="Create">
                  
                    {complainloading ? <ClipLoader color="white" size={35} /> :
                  "Lodge Complain"}
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      
 {complainsuccess ? (
              <div className="dropdown-container">
                <div className="cupon-drop">
                  <p>Complain lodged successfully</p>
                  <p>It would be attended to shortly. 
                    <br /> Thanks!</p>
                  <div className="button-div">
                    <button onClick={() => dispatch(resetComplainState())} className="submit-btn">Continue</button>
                    
                  </div>
                </div>
              </div>
            ): ""}
    </LodgeRidePopRap>
  );
};
export default LodgeComplain;
