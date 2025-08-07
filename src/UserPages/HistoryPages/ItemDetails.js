import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import MapRoad from "../Map";

import { useDispatch, useSelector } from "react-redux";
import { fetctGeneralAllAgency } from "../../Redux/slices/homeSlice";
import { ClipLoader } from "react-spinners";
import { fetchCompletedLodgedItem, fetchLodgedItemDetailsUser, flagItemNow, resetFlagItemState } from "../../Redux/slices/secondUserSlice";
import { resetFlagRideState } from "../../Redux/slices/userSlice";

const TaskRap = styled.div`
  padding: 30px;
  width: 100%;
  font-family: "Roboto";
  @media (max-width: 1300px) {
    padding: 20px 10px !important;
  }
  @media (max-width: 678px) {
    padding: 20px 1px !important;
  }
  h2 {
    color: #112240;
    font-size: 18px;
    font-weight: 600;
  }
  h4 {
    color: #112240;
    font-size: 16px;
    font-weight: 500;
  }
  h5 {
    color: #112240;
    font-size: 15px;
    font-weight: 500;
  }
  p {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
  }
  .ride-map {
    height: 263px !important;
  }
   .offical-images {
    display: flex;
  }
  .offical-images  img {
    margin-right: -10px;
     width: 40px;
    height: 40px;
    border-radius: 100px;
  }
    .descript-max {
    max-width: 250px;
    line-height: 19px;
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
    gap: 30px;
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
    flex-wrap: wrap;
  }
  .images-car img {
    width: 200px;
    height: 150px;
    border-radius: 10px;
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
  @media (max-width: 992px) {
    .all-rides-details {
      flex-direction: column;
    }
    .left-ride-div,
    .right-ride-div {
      width: 100%;
    }
    .right-ride-div {
      border-left: 0px solid #1122401f !important;
    }
  }
`;

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [dropdownVisible, setDropdownVisisble] = useState(false);
  const [dropdownFlagRide, setDropdownFlagRide] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { backgroundChange} = useSelector((state)=> state.app)

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const [selected, setSelected] = useState([]);

  const [formData, setFormData] = useState({
    item_id: Number(id),
    description: "",
    agencies: [], // will be array or string "all"
  });
  console.log(id, formData);
  const {
    lodgedItemDetails,
   
    itemCompleteLoading,
    flagItemloading,
   flagItemsuccess,
    error,
  } = useSelector((state) => state.otherUser);
  const { agencyList, loading } = useSelector((state) => state.home || []);

  console.log(lodgedItemDetails);

  const handleDropFlagRide = () => {
    setDropdownFlagRide(true);
    setDropdownVisisble(false);
  };

  console.log(dropdownFlagRide);

  const lodgeData = lodgedItemDetails?.data;
  const rawDate = lodgeData?.created_at;
  const date = new Date(rawDate);
let imagesArray = [];

if (lodgeData?.images) {
  try {
    imagesArray = JSON.parse(lodgeData?.images);
  } catch (err) {
    console.error("Invalid JSON in vehicle_images:", err);
  }
}
  const formatted = date.toLocaleString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  
  const handleCheckboxChange = (e) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(flagItemNow(formData));
    setDropdownFlagRide(false);
  };

  const handleChange = (e) => {
    const values = Array.from(e.target.selectedOptions).map((opt) => opt.value);

    if (values.includes("all")) {
      setSelected(["all"]);
    } else {
      setSelected(values);
    }
  };

  const handleDropFlag = () => {
    setDropdownVisisble(!dropdownVisible);
  };

  useEffect(() => {
    dispatch(fetchLodgedItemDetailsUser(id));
  }, [dispatch]);

  const handleCompleteRide = () => {
    dispatch(fetchCompletedLodgedItem(id));
  };


  useEffect(() => {
    dispatch(fetctGeneralAllAgency());
  }, [dispatch]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setDropdownVisisble(false);
      }
    };
    if (dropdownVisible) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dropdownVisible]);
  return (
    <TaskRap>
      <div className="ride-detail-header">
        <div className="icon-header">
          <Link to="/users/history">
            <Icon
              className="back-arrow-left"
              icon="material-symbols-light:arrow-left-alt"
              width="13"
              height="13"
              style={{ color: backgroundChange=== true ? "white" : "#112240" }}
            />
          </Link>
          <h2    style={{ color: backgroundChange=== true ? "white" : "#" }}>Item Details</h2>
        </div>
        <Link className="send-message">Send a Message</Link>
      </div>
      <div className="all-rides-details">
        <div className="left-ride-div">
          <div className="ride-map">
            <MapRoad />
          </div>
          <div className="car-div">
            <div className="car-model">
              <h5>
                {lodgeData?.vehicle_name} {lodgeData?.vehicle_model}
              </h5>
              <h5>{lodgeData?.manifest_num}</h5>
            </div>
            <p>{formatted}</p>
          </div>
          <div className="car-address">
            <img src="/images/address_anchor.png" alt="" />
            <div>
              <p>{lodgeData?.departure_state}</p>
              <p>{lodgeData?.destination_address}</p>
            </div>
          </div>
          <div className="ride-info">
            <p>
              Item ID
              <span>{lodgeData?.item_ref}</span>
            </p>
            <p>
              Item Name
              <span>{lodgeData?.item_name}</span>
            </p>
            <p>
              Vehicle or Bike Number
              <span>{lodgeData?.vehicle_bike_number}</span>
            </p>
            <p>
              Transport Means
              <span>{lodgeData?.transport_means}</span>
            </p>
            <p>
              Rider Comapny
              <span>{lodgeData?.rider_company}</span>
            </p>
            <p>
              Driver Name
              <span>{lodgeData?.driver_name}</span>
            </p>
            <p>
              Driver Number
              <span>{lodgeData?.rider_phone_number}</span>
            </p>
          </div>
          {lodgeData?.flag_info ? (
  <>
  <div className="ride-info">
            <p>
              Tagged Officals
              <span className="offical-images">
                {lodgeData?.flag_info?.agency?.map(( items) => (
              <img src={`https://backoffice.rua.com.ng/${items.logo}`} alt="" />
                ))}
             
              </span>
            </p>
            <p>
              Flag Reason
              <span className="descript-max">{lodgeData?.flag_info?.description}</span>
            </p>
            
          </div>
  </>
): ""}
          <div className="ride-button-div">
            {/* <Link className="edit-btn">Edit</Link> */}
            {lodgeData?.flag !== "1" ? (
            <button onClick={handleDropFlag} className="flag-btn">
              Flag Item
            </button>
            ): ""}
            {lodgeData?.status === "ongoing" ? (
            <button  onClick={handleCompleteRide} className="ride-btn">
              {itemCompleteLoading ? <ClipLoader color="white" size={35} /> : 
              
              "Item Recieved" }</button>
          ): ""}
            </div>
        </div>
        <div className="right-ride-div">
          <div className="right-header">
            <h4>Description</h4>
            <p style={{
              color: lodgeData?.status === "active" ? "#E8A526" : "#379C0C",
              background: lodgeData?.status === "active" ? "#FDF4E4" : "#E8FDE0"
            }} className="status-ride">{lodgeData?.status}</p>
          </div>
          <div className="move-to-end">
             <div className="right-inne-div">
             <p>{lodgeData?.description}</p>
            </div>

            <div>
              <div className="right-head">
                <h4 style={{marginTop: "20px"}}>Images</h4>
              </div>
              <div className="images-car">
                {imagesArray?.map((items) => (
                  <img src={`https://backoffice.rua.com.ng/${items}`} alt="" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {dropdownVisible ? (
        <div className="dropdown-container">
          <div className="successCreation">
            <div>
              <img src="/images/flag_warn.png" alt="" />
              <h2>Flag Item</h2>
              <p>
                Are you sure you want to flag this item, flagging the item will
                send a message to security officials and your Next of KIN{" "}
              </p>
              <button onClick={handleDropFlagRide} className="flag-continue">
                Continue
              </button>
              <Link
                onClick={() => setDropdownVisisble(false)}
                className="cancel-continue"
              >
                Cancel
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {dropdownFlagRide ? (
        <div className="dropdown-container">
          <div className="successCreationAgency">
            <h2>You about to flag the item</h2>

            <div>
              <form onSubmit={handleSubmit}>
                <textarea
                  type="text"
                  placeholder="write short description"
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                ></textarea>
                <button
                  className="select-agency"
                  type="button"
                  onClick={toggleDropdown}
                >
                  Select Agencies
                </button>

                {dropdownOpen && (
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
                        onChange={handleCheckboxChange}
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
                          onChange={handleCheckboxChange}
                        />{" "}
                        {agency.name}
                      </label>
                    ))}
                  </div>
                )}
                <div className="btns">
                  <button type="submit" style={{ marginTop: "10px" }}>
                    Submit
                  </button>
                  <Link
                    onClick={() => setDropdownFlagRide(false)}
                    className="cancel-continue cancel-flag"
                  >
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      {flagItemloading ? (
        <div className="dropdown-container">
          <ClipLoader color="white" size={100} />
        </div>
      ) : null}

      {flagItemsuccess ? (
        <div className="dropdown-container">
          <div className="successCreationAgency">
            <p>Item flaged successfully</p>
            <p>It would be attended to shortly!</p>
            <div className="button-div">
              <button
                onClick={() => dispatch(resetFlagItemState())}
                className="submit-btn"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </TaskRap>
  );
};
export default ItemDetails;
