import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetctGeneralAllAgency } from "../Redux/slices/homeSlice";
import { uploadImages } from "../Redux/slices/uploadSlice";
import { formatDistanceToNow } from 'date-fns';
import { createMessageCricket, fetchAllCricketReferences, fetchMessageAllCricket } from "../Redux/slices/messageSlice";

const HiddenInput = styled.input`
  display: none;
`;

const Label = styled.label`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: absolute;
  right: 60px;
  top: 15px;
  cursor: pointer;
  /* font-size: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s ease; */
`;
const MessageRap = styled.div`
  width: 100%;
  font-family: "Roboto";
  padding: 30px;
  .link-container {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .link {
    color: #667085;
    font-size: 15px;
    font-weight: 500;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  }
  .link.active {
    color: #56bf2a;
    border-bottom: 2px solid #56bf2a;
  }
  .icon-circle {
    border: 1px solid #1122401f;
    width: 30px;
    height: 30px;
    display: flex;
    position: relative;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
  }
  .message-header {
    border-bottom: 1px solid #1122401f;
    display: flex;
    background: #ffffff;

    align-items: center;
    justify-content: space-between;
    padding: 0px 30px;
    padding-top: 15px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }

  .search-div {
    width: 352px;
    height: 48px;
    position: relative;
  }
  .search-div input {
    border: 1px solid #1122401f;
    width: 352px;
    height: 48px;
    padding: 15px;
    border-radius: 100px;
  }
  .search-icon {
    position: absolute;
    top: 15px;
    right: 15px;
  }
  
  .message-header-right {
    position: relative;
  }
  .agency-drop {
    background: #ffffff;
    border-radius: 10px;
    position: absolute;
    display: flex;
    top: 30px;
    right: 10px;
    width: 300px;
    flex-direction: column;
  }
  .agency-drop h5 {
    color: #112240;
    font-size: 14px;
    font-weight: 600;
    border-bottom: 1px solid #1122401f;
    padding: 20px;
  }
  .agency-body {
    display: flex;
    flex-direction: column;
    padding: 15px;
    padding-top: 0px;
  }
  .message-inner-1 h4 {
    color: #112240;
    font-size: 14px;
    font-weight: 600;
  }
  .message-inner-1 p {
    color: #112240;
    font-size: 12px;
    font-weight: 400;
  }
  .message-inner-1 {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .message-inner-2 p {
    color: #667085;
    font-size: 12px;
    font-weight: 400;
  }
  .message-inner-dot {
    width: 10px;
    height: 10px;
    background: #009a49;

    border-radius: 100px;
  }
  .message-inner-2 {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .message-sub-img {
    width: 48px;
    height: 48px;
    border-radius: 100px;
    background: #ffffff;
  }
  .message-sub-img img {
    width: 40px;
    object-fit: contain;
    height: 40px;
  }
  .message-sub {
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .all-message-sub {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
  }
  .all-message-sub:hover {
    background: #f7f7f7;
    border-radius: 10px;
  }

  .message-body-left {
    padding: 30px;
    width: 50%;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-right: 1px solid #1122401f;
  }
  .message-body-right {
    width: 70%;
    height: 100%;
  }
    .all-messages {
    border: 1px solid #1122401f;
    border-radius: 10px;
  }
  .message-body-right-upper {
    background-color: #ffffff;
    width: 100% !important;
    border-bottom: 1px solid #1122401f;
  }
  .message-body {
    display: flex;
    height: 100%;
  }
  .send-message-div {
    width: 100%;
    height: 59px;
    position: relative;
  }
  .send-message-div input {
    width: 100%;
    height: 59px;
    border-radius: 8px;
    border: 1px solid #1122401f;
    background: #ffffff;
    padding: 15px;
  }
  .hidden-input {
    display: none;
  }

  .icon-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: #ffffff;
    position: absolute;
    right: 10px;
    top: 10px;
    width: 24px;
    height: 24px;

    border: none;
  }
  .send-icon {
    position: absolute;
    right: 10px;
    top: 10px;
  }
  .message-body-right-message {
    display: flex;
    height: 100vh;
    flex-direction: column;
  justify-content: space-between;
  }
`;

const UserMessage = () => {
  const dispatch = useDispatch();

  const [activeLink, setActiveLink] = useState("all");
  const { agencyList, loading } = useSelector((state) => state.home || []);
  const { cricketsuccess, dataMessage, messageData } = useSelector((state) => state.message || []);
  const [agentId, setAgentId] = useState(null);
  const [reference, setReference] = useState(null)
  console.log(messageData);
  const [dropAgency, setDropAgency] = useState(false);
      const { urls } = useSelector(state => state.upload);
  const [formData, setFormData] = useState({
    receiver_id: agentId,
    message: "",
    file: ""
  }) 

    const [form, setForm] = useState({
    receiver_id: agentId,
    message: "",
    file: ""
  })


  console.log(reference);


  useEffect(() => {
  setFormData(prev => ({
    ...prev,
    receiver_id: agentId
  }));


}, [agentId]);
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleDropAgency = () => {
    setDropAgency(!dropAgency);
  };
  const agency = agencyList?.data.find((item) => item.id === agentId);

  console.log(agency);

  const handleSetAgentId = (id) => setAgentId(id);

const handleSetReference = (reference) => {
    setReference(reference)
dispatch(fetchAllCricketReferences(reference));
}



  const messages = dataMessage?.data?.data
  useEffect(() => {
    dispatch(fetctGeneralAllAgency());
  }, [dispatch]);

   useEffect(() => {
    dispatch(fetchMessageAllCricket());
  }, [dispatch]);

 const handleFileChange = async (e) => {
  const fileList = e.target.files;
  if (!fileList || fileList.length === 0) return;

  let files = Array.from(fileList);

  // Normalize if blob (e.g. mobile camera)
  files = files.map((file, index) => {
    if (!file.name || !file.lastModified) {
      return new File([file], `photo_${Date.now()}_${index}.jpg`, {
        type: file.type || "image/jpeg",
        lastModified: Date.now(),
      });
    }
    return file;
  });

  // Filter valid image files
  files = files.filter((f) => f.size > 0 && f.type.startsWith("image/"));
  if (files.length === 0) {
    alert("Invalid file. Please select an image.");
    return;
  }

  // Dispatch upload
  const resultAction = await dispatch(
    uploadImages({ files, folderName: "messages" })
  );

  if (uploadImages.fulfilled.match(resultAction)) {
    const uploadedUrls = resultAction.payload; // this is an array of uploaded URLs

    // If only one file, just get the first
    const firstFileUrl = uploadedUrls[0];

    setFormData(prev => ({
      ...prev,
      file: firstFileUrl, // ✅ update 'file' with the uploaded URL string
    }));
  } else {
    console.error("Upload failed:", resultAction.payload);
  }
};



const handleSubmit = (e) => {
  e.preventDefault();

  dispatch(createMessageCricket(formData));

  setFormData(prev => ({
    ...prev,
    message: ""  // ✅ only reset the message
  }));
};


const formatShortTime = (date) => {
  const full = formatDistanceToNow(new Date(date), { addSuffix: true });

  return full
    .replace(' minutes ago', 'mins ago')
    .replace(' minute ago', 'min ago')
    .replace(' hours ago', 'hrs ago')
    .replace(' hour ago', 'hr ago')
    .replace(' seconds ago', 'sec ago')
    .replace(' second ago', 'sec ago')
    .replace(' days ago', 'days ago')
    .replace(' day ago', 'day ago')
    .replace('about ', '')
    .replace('less than a minute ago', 'just now');
};

  return (
    <MessageRap>
      <div className="">
        <h3>Messages</h3>
        <div className="all-messages">
          <div className="message-header">
            <div className="message-header-left">
              <div className="link-container">
                <Link
                  className={`link ${activeLink === "all" ? "active" : ""}`}
                  onClick={() => handleLinkClick("all")}
                >
                  All
                </Link>
                <Link
                  className={`link ${activeLink === "starred" ? "active" : ""}`}
                  onClick={() => handleLinkClick("starred")}
                >
                  Starred
                </Link>
                <Link
                  className={`link ${activeLink === "unread" ? "active" : ""}`}
                  onClick={() => handleLinkClick("unread")}
                >
                  Unread
                </Link>
              </div>
            </div>
            <div className="message-header-right">
              <div onClick={handleDropAgency} className="icon-circle">
                <Icon
                  width="40px"
                  height="40px"
                  icon="ph:dots-three-vertical"
                  color="black"
                />
                {dropAgency ? (
                  <div className="agency-drop">
                    <h5>Select agency </h5>
                    <div className="agency-body">
                      {agencyList?.data?.map((agent) => (
                        <div
                          onClick={() => handleSetAgentId(agent.id)}
                          className="all-message-sub"
                        >
                          <div className="message-sub">
                            <div className="message-sub-img">
                              <img
                                src={`https://backoffice.rua.com.ng/${agent.logo}`}
                                alt=""
                              />
                            </div>
                            <div className="message-inner-1">
                              <h4>{agent?.name}</h4>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="message-body">
            <div className="message-body-left">
              <div className="search-div">
                <input type="text" placeholder="Search messages..." />
                <Icon
                  className="search-icon"
                  width="18px"
                  height="18px"
                  icon="material-symbols:search-rounded"
                  color="#66708580"
                />
              </div>
              {messages?.map((message) => (
                <div  
  onClick={() => {
    handleSetAgentId(message?.agency?.id);
    handleSetReference(message?.reference); // or any other function
  }}
  className="all-message-sub"
>
  <div className="message-sub">
    <div className="message-sub-img">
      <img src={`https://backoffice.rua.com.ng/${message?.agency.logo}`} alt="" />
    </div>
    <div className="message-inner-1">
      <h4>{message?.agency?.name}</h4>
      <p>{message?.message}</p>
    </div>
  </div>
  <div className="message-inner-2">
    <p>{formatShortTime(message.updated_at)}</p>                    
    <div className="message-inner-dot"></div>
  </div>
</div>

              ))}
            </div>
            <div className="message-body-right">
              <div className="message-body-right-upper">
                {agentId ? (
                  <>
                    <div className="all-message-sub">
                      <div className="message-sub">
                        <div className="message-sub-img">
                          <img
                            src={`https://backoffice.rua.com.ng/${agency?.logo}`}
                            alt=""
                          />
                        </div>
                        <div className="message-inner-1">
                          <h4>{agency?.name}</h4>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className="message-body-right-message">
                <div className="the-messages"></div>
                <div className="send-message-div">
                  <input
                   onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                  type="text" placeholder="Type your message..." />
                  <HiddenInput
                    id="upload-input"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  <Label htmlFor="upload-input">
                    <img src="/images/mes-icon-1.png" alt="" />
                  </Label>
                  <img onClick={handleSubmit}
                    className="send-icon"
                    src="/images/mes-icon-2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MessageRap>
  );
};

export default UserMessage;
