import { ChangeEvent, MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../lib/sweetAlert";
import assert from "assert";
import {
  Container,
  CustomButton,
  Form,
  Input,
  InputBox,
  InputLabel,
  StyledLink,
} from "./style";
import MemberApiService from "app/ApiServices/memberApiService";
import { serverApi } from "lib/config";
import axios from "axios";
const md5 = require("md5");

const SignUp = () => {
  const navigate = useNavigate();
  const [clientName, setClientName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errClientName, setErrClientName] = useState<string>("");
  const [errPassword, setErrPassword] = useState<string>("");

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setClientName(e.target.value);
    setErrClientName("");
  };

  const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setErrPassword("");
  };

  const initialRegData: RegData = {
    name: "",
    email: "",
    key: "MyKey",
    secret: "MySecret",
  };
  interface RegData {
    name: string;
    key: string;
    secret: string;
    email: string;
    // Define other properties here...
  }
  const [regData, setRegData] = useState<RegData>(initialRegData);
  const [isLoading, setIsLoading] = useState(false);
  const onChangeRegData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegData({ ...regData, [name]: value });
  };

  const handleSignUp = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      // if (!clientName) {
      //   setErrClientName("Enter your name");
      // }

      // if (!password) {
      //   setErrPassword("Create a password");
      // } else {
      //   if (password.length < 4) {
      //     setErrPassword("Passwords must be at least 4 characters");
      //   }
      // }

      const signup_data = {
        name: clientName,
        email: password,
        key: "MyKey",
        secret: "MySecret",
      };
      assert.ok(!errClientName, errClientName);
      assert.ok(!errPassword, errPassword);
      const memberApiService = new MemberApiService();
      await memberApiService.signupRequest(regData);

      // await sweetTopSmallSuccessAlert("Sign up successfully", 700, true);
      // navigate("/");
      return true;
    } catch (err) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
    // try {
    //   const url = "http://localhost:3006/signup";
    //   const method = "POST";
    //   const userKey = "MyUserKey";
    //   const userSecret = "MyUserSecret";

    //   const requestData = {
    //     name: "Jackson",
    //     email: "jackson@gmail.com",
    //     key: "Mason",
    //     secret: "MySecret",
    //   };

    //   const body = JSON.stringify(requestData);

    //   // Calculate the MD5 sign
    //   const sign = md5(`${method}+/signup+${body}+${userSecret}`);

    //   const headers = {
    //     Key: userKey,
    //     Sign: sign,
    //     "Content-Type": "application/json",
    //   };

    //   const response = await axios.post(url, body, { headers });
    //   console.log(response.data);
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };
  return (
    <Container>
      <Form>
        <h1>Sign up</h1>
        {/* client name */}
        <InputBox>
          <InputLabel htmlFor="Username">Username</InputLabel>
          <Input
            id="outlined-basic"
            // value={clientName}
            name="name"
            onChange={onChangeRegData}
          />
          {/* {errClientName && (
            <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
              <span className="font-bold italic mr-1">!</span>
              {errClientName}
            </p>
          )} */}
        </InputBox>
        <InputBox>
          <InputLabel htmlFor="Username">Email</InputLabel>
          <Input
            name="email"
            type="text"
            placeholder="Email"
            onChange={onChangeRegData}
          />
        </InputBox>
        {/* Password */}
        <InputBox>
          <InputLabel htmlFor="Username">Password</InputLabel>
          <Input
            name="password"
            id="outlined-password-input"
            placeholder="Enter your password"
            autoComplete="current-password"
            onChange={onChangeRegData}
          />
          {/* {errPassword && (
            <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
              <span className="font-bold italic mr-1">!</span>
              {errPassword}
            </p>
          )} */}
        </InputBox>
        {/* Confirm Password */}
        <InputBox>
          <InputLabel htmlFor="Username">Confirm password</InputLabel>
          <Input
            id="outlined-password-input"
            placeholder="Enter your connfirm password"
            autoComplete="current-password"
            onChange={onChangeRegData}
            // value={password}
            name="rePassword"
          />
          {/* {errPassword && (
            <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
              <span className="font-bold italic mr-1">!</span>
              {errPassword}
            </p>
          )} */}
        </InputBox>

        <CustomButton onClick={handleSignUp}>Submit</CustomButton>
        <p className="text-sm text-center font-titleFont font-medium">
          Already signed up?<span> </span>
          <StyledLink to="/signin">
            <span className="ml-2 text-blue-400 hover:text-blue-600 duration-300">
              Go to sign in.
            </span>
          </StyledLink>
        </p>
      </Form>
    </Container>
  );
};

export default SignUp;
