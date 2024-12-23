import React from "react";
import styled from "styled-components";
import ImageUpload from "./ImageUpload";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCreatedItem, setItemVisible } from "../../Redux/appSlice";


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
input, select {
    width: 254px;
    height: 40px;
    border-radius: 100px;
   border: 1px solid #1122401F;
padding: 10px;

}
.checkbox {
    width: 16px !important;
    height: 16px !important;
    border-radius: 1px !important;
}
`

const LodgeItemPopup = () => {
    const { itemDropdown } = useSelector((state) => state.app);
    const dispatch = useDispatch();
   
  
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
                                        Ride ID <br />
                                        <input type="text" />
                                    </label>
                                    <label>
                                        Item Name <br />
                                        <input type="text" placeholder=""/>
                                    </label>
                                </div>
                                <div className="input-divs">
                                    <label>
                                        Means of Transport <br />
                                        <select>
                                            <option>Select</option>
                                            <option>Vehicle</option>
                                            <option>Bike</option>
                                        </select>
                                       
                                    </label>
                                    <label>
                                        Driver Name <br />
                                        <input type="text" placeholder="Enter vehicle name" />
                                    </label>
                                </div>
                                <div className="input-divs">
                                    <label>
                                        Address <br />
                                        <input style={{height: "75px", borderRadius: "12px"}} 
                                        type="text" placeholder="Enter your current address"/>
                                    </label>
                                    <label>
                                        Destination Address <br />
                                        <input style={{height: "75px", borderRadius: "12px"}} 
                                         type="text" placeholder="Enter your destination address" />
                                    </label>
                                </div>
                                <div className="input-divs">
                                   
                                    <label>
                                        Description (Optional)  <br />
                                        <input style={{height: "75px", borderRadius: "12px"}} 
                                         type="text" placeholder="Enter description" />
                                    </label>
                                </div>
                            </div>
                            
                        </div>
                        <div className="right-dropdown-div">
                            <h5>
                                Images
                            </h5>
                            
                            <div className="right-inner-div">
                                <div className="inner-right-div">
                            <label>Upload vehicle image (optional)</label>
                             <ImageUpload />
                             </div>
                            </div>
                            <div className="all-link">
                                <Link onClick={handleItemVisible} className="Cancel">Cancel</Link>
                                <Link onClick={handleCreateItem} className="Create">Lodge Item</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LodgeRidePopRap>
    )
}
export default LodgeItemPopup