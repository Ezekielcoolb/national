import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { userCompletePersonalDetails } from "../../Redux/slices/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { ClipLoader } from "react-spinners";

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const SlideWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => `-${props.currentIndex * 100}%`});
`;

const Slide = styled.div`
  min-width: 100%;
  box-sizing: border-box;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Dot = styled.div`
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: ${(props) => (props.active ? "#060B13" : "#ccc")};
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
`;

const LoginRap = styled.div`
  .login-left-upper img {
    width: 102px;
    height: 306px;
    border-radius: 100px;
  }
  .green-circle {
    width: 86px;
    height: 306px;
    background: #56bf2a;

    border-radius: 100px;
    margin-top: 35px;
  }
  .login-left-upper {
    display: flex;
    gap: 15px;
  }
  .login-left-lower p {
    color: #667085;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    max-width: 286px;
    text-align: center;
  }
  .login-left-lower h3 {
    color: #112240;
    font-weight: 600;
    font-size: 20px;
  }
  .login-left-lower {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
  .login-left {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }
  .login-right-upper p {
    color: #667085;
    font-size: 16px;
    font-weight: 400;
  }
  .logo-frame {
    width: 176px;
    height: 71px;
  }
  .login-right-upper h3 {
    color: #112240;
    font-weight: 600;
    font-size: 30px;
  }
  .login-right-upper {
    display: flex;
    flex-direction: column;
  }
  .email-sign input {
    border: 1px solid #1122401f;
    width: 358px;
    height: 50px;
    color: #112240;

    border-radius: 100px;
    padding-left: 35px;
  }
  .personal-input input,
  .personal-input select {
    width: 171px;
    height: 50px;
    border-radius: 100px;
    border: 1px solid #1122401f;
    padding-left: 20px;
    color: #112240;
    margin-right: 10px;
  }
  .personal-input {
    display: flex;
    justify-content: space-between;
    gap: 15px;
  }

  .email-sign {
    width: 358px;
    position: relative;
    display: flex;
    align-items: center;
  }

  .email-icon,
  .lock-icon {
    position: absolute;
    left: 10px;
  }

  .eye-icon {
    position: absolute;
    right: 10px;
    cursor: pointer;
  }
  .sign-2 {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .sign-3 label {
    color: #667085;
    font-size: 14px;
    font-weight: 400;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .sign-3 input {
    width: 16px;
    height: 16px;
    border-radius: 4px;
    border: 1.5px solid #11224026;
    cursor: pointer;
  }
  .forget-link {
    color: #56bf2a;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
  }
  .sign-3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
  .login-right-lower p {
    color: #8e97a5;
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    max-width: 345px;
  }
  .term-serve {
    font-size: 12px;
    font-weight: 400;
    color: #56bf2a;
    margin-left: 5px;
  }
  .login-right-lower {
  }
  .login-left-all {
    width: 30%;
    background: #11224014;
    margin: 10px;
    border-radius: 10px;
    height: 98vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .login-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
    gap: 30px;
  }
  .login-right-all {
    width: 70%;
    height: 98vh;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .login-container {
    display: flex;
  }
  .sign-2 button {
    width: 358px;
    height: 50px;
    border-radius: 100px;
    border: none;
  }
  .account-div p {
    color: #667085;
    font-size: 16px;
    font-weight: 400;
  }
  .singup-link {
    color: #56bf2a;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .account-div {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
  }
  .dropdown-all-div  {

    background: #ffffff;
    padding: 40px 20px;
    border-radius: 15px;
  }
   .dropdown-all-div p {
    color: #5C6A7F;
    font-weight: 600;
    max-width: 358px;
    text-align: center;
    line-height: 23px;
    font-size: 16px;

   }
    .dropdown-all-div h4 {
      color: #112240;
      font-size: 25px;
      font-weight: 700;

    }
    .dropdown-all-div {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
    }
       .dropdown-all-div button  {
        width: 358px;
        cursor: pointer;
       }
`;

const UserPersonalInfo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
   const dispatch = useDispatch();
  const { loading, error,userDetails, profileCreationSuccessMessage, success } = useSelector((state) => state.auth)
  const navigate = useNavigate();
  const slides = [
    {
      image1: "/images/login-1.png",
      image2: "/images/login-2.png",
      heading: "Welcome to RUA",
      text: "Your number one safety application for everything transportation & more",
    },
    {
      image1: "/images/login-1.png",
      image2: "/images/login-2.png",
      heading: "Welcome to RUA",
      text: "With our flag ride feature, alert your family and friends about your safety",
    },
    {
      image1: "/images/login-1.png",
      image2: "/images/login-2.png",
      heading: "Welcome to RUA",
      text: "Experience the new and modern way of keeping yourself safe with RUA",
    },
  ];

  console.log(profileCreationSuccessMessage);
  console.log(userDetails);
  
   useEffect(() => {
      if (userDetails) {
          localStorage.setItem('ruaUserDetails', JSON.stringify(userDetails?.data));      }
    }, [userDetails, navigate]);

  const [states, setStates] = useState([]);
  const [lgas, setLgas] = useState([]);
  const email = localStorage.getItem("ruauserregisteredEmail");

  const [formData, setFormData] = useState({
    email: email,
    city: "",
    state: "",
    phone: "",
    first_name: "",
    last_name: "",
    address: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000); // slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const isValid =
    formData.email.trim() !== "" && 
    formData.last_name.trim() !== "" &&
    formData.first_name.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.state.trim() !== "" &&
    formData.city.trim() !== "" &&
    formData.address.trim() !== "";
  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Fetch states on mount
  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await axios.get(
          "https://nigeria-states-and-lgas.onrender.com/api/states"
        );
        setStates(response.data);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };

    fetchStates();
  }, []);

  // Fetch LGAs when state changes
  useEffect(() => {
    const fetchLgas = async () => {
      if (!formData.state) return;
      try {
        const response = await axios.get(
          `https://nigeria-states-and-lgas.onrender.com/api/${formData.state}/lgas`
        );
        setLgas(response.data.lgas);
      } catch (error) {
        console.error("Error fetching LGAs:", error);
      }
    };

    fetchLgas();
  }, [formData.state]);

  const handleStateChange = (e) => {
    setFormData({ state: e.target.value, city: "" }); // reset city
  };

  const handleCityChange = (e) => {
    setFormData((prev) => ({ ...prev, city: e.target.value }));
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const handleSubmit = (e) => {
  
    e.preventDefault();
      if (isValid) {
    dispatch(userCompletePersonalDetails(formData));
    }
  };


  const handleMoveToDashboard = () => {
    navigate("/users/dashboard");
  };
  return (
    <LoginRap>
      <div className="login-container">
        <div className="login-left-all">
          <div>
            <SliderContainer>
              <SlideWrapper currentIndex={currentIndex}>
                {slides.map((slide, index) => (
                  <Slide key={index}>
                    <div className="login-left">
                      <div className="login-left-upper">
                        <img src={slide.image1} alt="" />
                        <div className="green-circle"> </div>
                        <img src={slide.image2} alt="" />
                      </div>
                      <div className="login-left-lower">
                        <h3>{slide.heading}</h3>
                        <p>{slide.text}</p>
                      </div>
                    </div>
                  </Slide>
                ))}
              </SlideWrapper>
            </SliderContainer>
            <DotsContainer>
              {slides.map((_, idx) => (
                <Dot
                  key={idx}
                  active={idx === currentIndex}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </DotsContainer>
          </div>
        </div>
        <div className="login-right-all">
          <div className="login-right">
            <img className="logo-frame" src="/images/Frame.png" alt="" />
            <div className="login-right-upper">
              <h3>Welcome back!</h3>
              <p>Securely login to your account</p>
            </div>
            <div className="sign-2">
              {/* Email Input */}
              <div className="personal-input">
                <input
                  value={formData.first_name}
                  onChange={handleChange}
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                />
                <input
                  value={formData.last_name}
                  onChange={handleChange}
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                />
              </div>
              <div className="email-sign">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="email-sign">
                <input
                  type="number"
                  name="phone"
                  placeholder=" Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="personal-input">
                {/* <select
                  id="state"
                  value={formData.state}
                  onChange={handleStateChange}
                >
                  <option value="">-- Select State --</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>

                <select
                  id="city"
                  value={formData.city}
                  onChange={handleCityChange}
                  disabled={!lgas.length}
                >
                  <option value="">-- Select City/LGA --</option>
                  {lgas.map((lga) => (
                    <option key={lga} value={lga}>
                      {lga}
                    </option>
                  ))}
                </select> */}
                  <input
                  value={formData.state}
                  onChange={handleChange}
                  type="text"
                  name="state"
                  placeholder="State"
                />
                <input
                  value={formData.city}
                  onChange={handleChange}
                  type="text"
                  name="city"
                  placeholder="City"
                />
              </div>
              <div className="email-sign">
                <input
                  type="text"
                  name="address"
                  placeholder=" Home Address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <button
                onClick={handleSubmit}
                style={{
                  background: isValid ? "#56BF2A" : "#b8eda2",
                }}
              >
                  {loading ?<ClipLoader color="white" size={40} /> :
                
                "Continue" }
              </button>
              
            </div>
          </div>
         
        </div>
      </div>

      {userDetails && userDetails !== null ? (
        <>
        <div className="dropdown-container">
          <div className="dropdown-all-div">
            <h4>Account Created Successfully</h4>
            <p>Your account have been created, enjoy seamless online parking experience with RUA</p>
            <button onClick={handleMoveToDashboard}>Go to dashboard</button>
          </div>

        </div>
        </>
      ): ""}
    </LoginRap>
  );
};

export default UserPersonalInfo;
