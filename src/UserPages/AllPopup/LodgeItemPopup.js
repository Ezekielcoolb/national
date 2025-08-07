import React, { useState } from "react";
import styled from "styled-components";
import ImageUpload from "./ImageUpload";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCreatedItem, setItemVisible } from "../../Redux/appSlice";
import { uploadImages } from "../../Redux/slices/uploadSlice";
import { lodgeItem, resetLodgeItemState } from "../../Redux/slices/secondUserSlice";
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
  .checkbox {
    width: 16px !important;
    height: 16px !important;
    border-radius: 1px !important;
  }
`;

const LodgeItemPopup = () => {
  const { itemDropdown } = useSelector((state) => state.app);
  const [imagePreviews, setImagePreviews] = useState([]); // multiple preview URLs
  const { lodgeItemloading, lodgeItemsuccess } = useSelector(
    (state) => state.otherUser
  );

  const dispatch = useDispatch();
  const { urls } = useSelector((state) => state.upload);
  console.log(urls);

  const [formData, setFormData] = useState({
    item_name: "",
    driver_name: "",
    transport_means: "",
    vehicle_bike_number: "",
    rider_company: "",
    rider_phone_number: "",
    address: "",
    destination_address: "",
    description: "",
    images: [],
  });

  const isValid =
    formData.item_name.trim() !== "" &&
    formData.driver_name.trim() !== "" &&
    formData.transport_means.trim() !== "" &&
    formData.vehicle_bike_number.trim() !== "" &&
    formData.rider_company.trim() !== "" &&
    formData.rider_phone_number.trim() !== "" &&
    formData.address.trim() !== "" &&
    formData.destination_address.trim() !== "" &&
    formData.description.trim() !== "";

  const handleImageUpload = async (files) => {
    const resultAction = await dispatch(
      uploadImages({ files, folderName: "vehicles" })
    );

    if (uploadImages.fulfilled.match(resultAction)) {
      const urls = resultAction.payload;

      // Add image URLs to formData
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...urls],
      }));

      // Add image URLs to previews
      setImagePreviews((prev) => [...prev, ...urls]);
    } else {
      console.error("Upload failed:", resultAction.payload);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      dispatch(lodgeItem(formData));
    }
  };

  const handleItemVisible = () => {
    dispatch(setItemVisible());
  };
  const handleCreateItem = () => {
    dispatch(setItemVisible());
    dispatch(setCreatedItem());
  };
  return (
    <LodgeRidePopRap>
      <div className="dropdown-container">
        <div className="all-dropdown-div ">
          <div className="dropdown-header">
            <h4>Lodge Item</h4>
          </div>
          <div className="dropdown-div ">
            <div className="left-dropdown-div">
              <h5>Item information</h5>
              <div className="left-inner-div">
                <div className="input-divs">
                  <label>
                    Item Name <br />
                    <input
                      value={formData.item_name}
                      onChange={(e) =>
                        setFormData({ ...formData, item_name: e.target.value })
                      }
                      type="text"
                    />
                  </label>
                  <label>
                    Driver Name <br />
                    <input
                      value={formData.driver_name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          driver_name: e.target.value,
                        })
                      }
                      type="text"
                      placeholder=""
                    />
                  </label>
                </div>
                <div className="input-divs">
                  <label>
                    Means of Transport <br />
                    <select
                      value={formData.transport_means}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          transport_means: e.target.value,
                        })
                      }
                    >
                      <option value="">Select role</option>
                      <option value="Bike">Bike</option>
                      <option value="Vehicle">Vehicle</option>
                    </select>
                  </label>
                  <label>
                    Bike or Vehicle's Number <br />
                    <input
                      value={formData.vehicle_bike_number}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          vehicle_bike_number: e.target.value,
                        })
                      }
                      type="text"
                      placeholder="Enter vehicle name"
                    />
                  </label>
                </div>

  <div className="input-divs">
                  <label>
                    Rider's Company <br />
                    <input
                      value={formData.rider_company}
                      onChange={(e) =>
                        setFormData({ ...formData, rider_company: e.target.value })
                      }
                      type="text"
                    />
                  </label>
                  <label>
                    Rider's Number <br />
                    <input
                      value={formData.rider_phone_number}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          rider_phone_number: e.target.value,
                        })
                      }
                      type="number"
                      placeholder=""
                    />
                  </label>
                </div>

                <div className="input-divs">
                  <label>
                    Address <br />
                    <textarea
                     value={formData.address}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          address: e.target.value,
                        })
                      }
                      style={{ height: "75px", borderRadius: "12px" }}
                      type="text"
                      placeholder="Enter your current address"
                    />
                  </label>
                  <label>
                    Destination Address <br />
                    <textarea
                     value={formData.destination_address}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          destination_address: e.target.value,
                        })
                      }
                      style={{ height: "75px", borderRadius: "12px" }}
                      type="text"
                      placeholder="Enter your destination address"
                    />
                  </label>
                </div>
                <div className="input-divs">
                  <label>
                    Description (Optional) <br />
                    <textarea
                     value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      style={{ height: "75px", borderRadius: "12px" }}
                      type="text"
                      placeholder="Enter description"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="right-dropdown-div">
              <h5>Images</h5>
               <div className="right-inner-div">
                <div className="inner-right-div">
                  <label>Upload vehicle images (optional)</label>
                  <ImageUpload onUpload={handleImageUpload} />

                  {/* Show previews for all uploaded images */}
                  {imagePreviews.length > 0 && (
                    <div style={{ marginTop: '10px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      {imagePreviews.map((src, idx) => (
                        <img
                          key={idx}
                          src={`https://backoffice.rua.com.ng/${src}`}
                          alt={`Vehicle Preview ${idx + 1}`}
                          style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '8px',
                            objectFit: 'cover',
                            border: '1px solid #ccc',
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="all-link">
                <Link onClick={handleItemVisible} className="Cancel">
                  Cancel
                </Link>
                <button style={{
                    background: isValid ? "#56BF2A" : "#bdddb0"
                }} onClick={handleSubmit} className="Create">
                  
                    {lodgeItemloading ? <ClipLoader color="white" size={35} /> :
                  "Lodge Item"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        {lodgeItemsuccess ? (
              <div className="dropdown-container">
                <div className="cupon-drop">
                  <p>Item Lodged successfully</p>
                  <p>Thanks!</p>
                  <div className="button-div">
                    <button onClick={() => dispatch(resetLodgeItemState())} className="submit-btn">Continue</button>
                    
                  </div>
                </div>
              </div>
            ): ""}
    </LodgeRidePopRap>
  );
};
export default LodgeItemPopup;
