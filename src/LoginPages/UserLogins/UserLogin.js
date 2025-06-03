import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { loginUser } from "../../Redux/slices/AuthSlice";
import { ClipLoader } from "react-spinners";

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const SlideWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${props => `-${props.currentIndex * 100}%`});
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
  background-color: ${props => (props.active ? "#060B13" : "#ccc")};
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
    color: #56BF2A;
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
  .loginerror {
    color: red;
    font-size: 13px;
    font-weight: 400;
  }
`;

const UserLogin = () => {
    const dispatch = useDispatch();
     const [currentIndex, setCurrentIndex] = useState(0);
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
  const { loading, error, user, loginErroMessage } = useSelector((state) => state.auth);
console.log(loginErroMessage);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);


  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex(prev => (prev + 1) % slides.length);
  }, 5000); // slide every 5 seconds

  return () => clearInterval(interval);
}, [slides.length]);

 useEffect(() => {
    if (user && user?.data?.email) {
      localStorage.setItem("ruauserregisteredEmail", user.data.email);
      localStorage.setItem("ruaUserToken", user.data.api_token);
      localStorage.setItem('ruaUserDetails', JSON.stringify(user?.data));      

      navigate("/users/dashboard");
    }
  }, [user, navigate]);



  const isValid =
    formData.email.trim() !== "" && formData.password.trim() !== "";
  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (isValid) {
        dispatch(loginUser(formData));
      }
    };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMoveToDashboard = () => {
  navigate("/users/dashboard");
    }
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
              <div className="email-sign">
                <Icon
                  className="email-icon"
                  icon="ic:outline-email"
                  width="20"
                  height="20"
                  style={{
                    color: formData.email ? "#060B13" : "#99A2AF",
                  }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Password Input */}
              <div className="email-sign">
                <Icon
                  className="lock-icon"
                  icon="solar:lock-keyhole-linear"
                  width="20"
                  height="20"
                  style={{
                    color: formData.password ? "#060B13" : "#99A2AF",
                  }}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <Icon
                  className="eye-icon"
                  icon={showPassword ? "solar:eye-outline" : "mage:eye-off"}
                  width="20"
                  height="20"
                  style={{ color: "#99A2AF" }}
                  onClick={togglePasswordVisibility}
                />
              </div>
              {loginErroMessage ? (
                <p className="loginerror">{loginErroMessage}</p>
              ): ""}
              <div className="sign-3">
                <label>
                  <input type="checkbox" className="custom-checkbox" />
                  Remember me
                </label>
                <Link to="/usersForgetPassword" className="forget-link">
                  Forget password
                </Link>
              </div>
              <button 
              onClick={handleSubmit}
              style={{
                background: isValid ? "#56BF2A" : "#b8eda2",
              }}>
                
                {loading ?<ClipLoader color="white" size={40} /> :
                                
                                "Login" }
              </button>
              <div className="account-div">
                <p>Don't have an account?</p>
                <Link  className="singup-link" to="/usersSignup">Sign up</Link>
              </div>
            </div>
          </div>
          <div className="login-right-lower">
            <p>
              By clicking “Login or Signup”, you assert that you have read and
              agreed to our
              <Link className="term-serve">Terms of Service</Link> and
              <Link className="term-serve">Privacy Policy.</Link>
            </p>
          </div>
        </div>
      </div>
    </LoginRap>
  );
};

export default UserLogin;
