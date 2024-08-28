import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Input, Button as CustomButton } from "./Style/Form";

const Button = ({ otpReceived, handleClick }) => {
  if (otpReceived)
    return (
      <CustomButton onClick={() => handleClick()}>Verify OTP</CustomButton>
    );
  else
    return <CustomButton onClick={() => handleClick()}>Send OTP</CustomButton>;
};

const LoginForm = () => {
  const [mobile, setMobile] = useState();
  const [otp, setOtp] = useState();
  const [otpReceived, setOtpReceived] = useState(false);

  let navigate = useNavigate();
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mobile: mobile }),
  };
  const sendOtp = async () => {
    fetch("http://localhost:8000/api/get-otp", options)
      .then((response) => response.json())
      .then((response) => {
        setOtpReceived(true);

        alert(
          response.otp + " is your one time password for login into chat app."
        );
        sessionStorage.setItem("otp", response.otp);
      })
      .catch((err) => console.error(err));
  };

  const verifyOtp = () => {
    const storedOtp = sessionStorage.getItem("otp");
    if (storedOtp === otp) {
      alert("OTP verified successfully!");
      setOtpReceived(false);
      sessionStorage.removeItem("otp");

      fetch("http://localhost:8000/api/user-login", options)
      .then(response => response.json())
      .then(response => {
        sessionStorage.setItem("userID", response.userID);
        // console.log(response.userID);
      })
      return navigate("/room-list");
    } else {
      alert("Invalid OTP!");
      setOtp("");
      setOtpReceived(false);
      sessionStorage.removeItem("otp");
      return;
    }
  };

  return (
    <Container>
      <Input
        type="text"
        placeholder="Mobile number"
        onChange={(e) => setMobile(e.target.value)}
      />
      <Input placeholder="Enter OTP" onChange={(e) => setOtp(e.target.value)} />
      <Button
        handleClick={otpReceived ? verifyOtp : sendOtp}
        otpReceived={otpReceived}
      />
    </Container>
  );
};

export default LoginForm;
